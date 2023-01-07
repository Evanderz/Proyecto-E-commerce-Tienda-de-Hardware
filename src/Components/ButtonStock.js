
export const ButtonStock = ({ stock, contador, setContador }) => {

    const agregarProducto = () => {

        if (contador < stock) {

            setContador(contador => contador + 1)

        }
    }

    const quitarProducto = () => {

        if (contador >= 1) {

            setContador(contador => contador - 1)

        }
    }

    return (
        <div>

            <button onClick={quitarProducto} className='btn separarBoton shadow-lg bg-black shadow-violet-500 m-5'>-</button>
            <span className='text-xl m-2 separarBoton'>{contador}</span>
            <button onClick={agregarProducto} className='btn separarBoton shadow-lg bg-black shadow-violet-500 m-5'>+</button>

        </div>
    )
}

export default ButtonStock