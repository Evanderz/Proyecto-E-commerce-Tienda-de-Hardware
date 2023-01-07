import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonStock } from './ButtonStock'
import { useCart } from './context/cartContext'

const ItemDetail = ({ id, name, detail, stock, imagen, price }) => {

  let boton = 0
  let boton2 = null

  const [contador, setContador] = useState(1)
  const [mostrarBoton, setMostrarBoton] = useState(false)




  const irAlCarrito = () => {


    setMostrarBoton(false)


  }

  const { add } = useCart()

  const addHandler = () => {

    add({ id, name, detail, price, imagen, contador, stock });
    setMostrarBoton(true)
  }

  if (mostrarBoton === false) {

    boton = <button className="btn shadow-lg shadow-violet-500" onClick={addHandler}>Agregar al Carrito</button>

  } else {


    boton = <Link to='/item/cart'><button className="btn shadow-lg shadow-violet-500" onClick={irAlCarrito}>Ir al carrito</button></Link>
    boton2 = <Link to='/'><button className="btn shadow-lg shadow-violet-500 m-2" onClick={irAlCarrito}>Seguir Comprando</button></Link>

  }

  return (
    <>

      <div >
        <div className='m-4'>Detalle del producto:</div>
        <div className='border-solid border-2 border-blue-500 rounded-md shadow-lg bg-black shadow-violet-500 text-left row'>
          <li className='m-2'><img src={imagen} /></li>
          <li className='m-2'>Producto:{` ${name}`}</li>
          <li className='m-2'>Detalle:{` ${detail}`}</li>
          <li className='m-2'>Stock:{` ${stock}`}</li>
          <li className='m-2'>Precio:{`$${price}`}</li>
          <ButtonStock stock={stock} contador={contador} setContador={setContador} />
          <div>
            {boton}
            {boton2}
          </div>
        </div>
      </div>
    </>

  )
}
export default ItemDetail