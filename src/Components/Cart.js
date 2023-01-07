import { useCart } from './context/cartContext'
import { getFirestore, collection, addDoc, doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import Formulario from './Formulario'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


export const Cart = () => {


    let productos = null
    let formulario = null
    let nroOrden = null
    let acumuladorTotalPrice = 0
    let mensajeCarrito = null
    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [mail, setMail] = useState("")
    const [telefono, setTelefono] = useState("")




    let { items, clear } = useCart()
    
    if (items.length < 1) {

        mensajeCarrito = <div className='text-2xl m-10 '>Agrega productos al carrito</div>

    }

    const cambiarNombre = (nombre) => {

        setNombre(nombre)

    }

    const cambiarApellido = (apellido) => {

        setApellido(apellido)

    }

    const cambiarMail = (mail) => {

        setMail(mail)

    }

    const cambiarTelefono = (telefono) => {


        setTelefono(telefono)

    }


    items.forEach(element => {

        acumuladorTotalPrice = acumuladorTotalPrice + element.price * element.contador

    });

    const confirmarCompra = () => {

        if (items.length < 1) {

            setMostrarFormulario(false)

            Swal.fire({

                title: "Advertencia!",
                text: "No tiene productos en el carrito",
                icon: "warning",
                confirmButtonText: "Aceptar",
                backdrop: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                color: '#000000',
                background: '##8F8F8F',

            })

        } else {

            setMostrarFormulario(true)

        }



    }

    const cancelarCompra = () => {

        setMostrarFormulario(false)

    }

    const sacarStock = (id, stock) => {
        const db = getFirestore()
        const stockDoc = doc(db, 'Hardware', id)
        updateDoc(stockDoc, {
            stock: stock
        }
        )

    }
    const guardarOrden = async (orden) => {

        const db = getFirestore()
        const ordenCollection = collection(db, 'Ordenes')
        const { id } = await addDoc(ordenCollection, orden)

        items.forEach(element => {

            let stockActual = element.stock - element.contador

            sacarStock(element.id, stockActual)

        });
        nroOrden = id
        alertaCompraExitosa(nroOrden);
        clear()

    }

    const finalizarCompra = () => {

        productos = (items.map(i => ({ id: i.id, cantidad: i.contador, detail: i.detail, name: i.name, price: i.price })))
        console.log(items);



        const usuario = { name: { nombre }, apellido: { apellido }, phone: { telefono }, email: { mail } }
        const orden = {

            comprador: usuario,
            items: productos,
            total: "$" + acumuladorTotalPrice

        }

        guardarOrden(orden);

    }

    if (mostrarFormulario !== false) {

        formulario =
            <>
                <div className='fondoTrasparente'></div>
                <div className='border-solid  border-2 border-blue-500 rounded-md shadow-lg bg-black shadow-violet-500 m-10 centraLoader  divAbsoluto'>
                    <div className='text-4xl  text-center'>Ultimo paso!</div>

                    <Formulario nombre={nombre} nombreCambiado={cambiarNombre} apellido={apellido} apellidoCambiado={cambiarApellido} mail={mail} mailCambiado={cambiarMail} telefono={telefono} telefonoCambiado={cambiarTelefono} />
                    <button className='btn shadow-lg bg-black shadow-violet-500 m-5' onClick={cancelarCompra} >Cancelar</button>
                    <Link to='/'><button className='btn shadow-lg bg-black shadow-violet-500 m-5' onClick={finalizarCompra}>Finalizar Compra</button></Link>
                </div>
            </>
    } else {

        formulario = null

    }

    const alertaCompraExitosa = (id) => {


        setMostrarFormulario(false)

        Swal.fire({

            title: `Compra Exitosa!
            Nro de orden:
            ${id}`,
            text: "Muchas gracias por confiar en nosotros!",
            icon: "success",
            confirmButtonText: "Aceptar",
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            color: '#000000',
            background: '##8F8F8F',

        })
    }

    return (



        <>
            <div className="m-10 text-4xl">Tu Carrito:</div>
            {formulario}
            {mensajeCarrito}
            <div>{items.map(i => <li className='border-solid border-2 border-blue-500 rounded-md shadow-lg bg-black shadow-violet-500 m-5' key={i.id}>
                <div className='box'>

                    <div className='wrapperCarrito'>

                        <div className=''><img className=' pequeña m-5' src={i.imagen} /></div>
                        <div className='text-2xl div '> {i.name}</div>
                        <div className='text-2xl centrarCarrito'>Precio:${i.price}</div>
                        <div className=' text-2xl centrarCarrito '>Cantidad: {i.contador}</div>

                    </div>
                </div>

            </li>)}</div>
            <div className='m-10 text-4xl '>Total: ${acumuladorTotalPrice}</div>
            <div>
                <button className='btn m-2 shadow-lg bg-black shadow-violet-500 m-5' onClick={clear}>Vaciar Carrito</button>
                <button className='btn m-2 shadow-lg bg-black shadow-violet-500 m-5' onClick={confirmarCompra} >Confirmar compra</button>
            </div>

        </>

    )

}
