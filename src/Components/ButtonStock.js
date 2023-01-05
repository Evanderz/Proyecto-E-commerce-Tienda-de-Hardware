import React, { useState } from 'react'
import { useCart } from './context/cartContext'



export const ButtonStock = ({ stock }) => {

    const [contador, setContador] = useState(1)

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
            
            
            <button onClick={quitarProducto} className='btn separarBoton'>-</button>
            <span className='text-xl m-2 separarBoton'>{contador}</span>
            <button onClick={agregarProducto} className='btn separarBoton'>+</button>
            

        </div>
    )
}

export default ButtonStock