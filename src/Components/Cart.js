import React, { useContext } from 'react'
import { useCart } from './context/cartContext'


export const Cart = () => {

    const { items, clear } = useCart()
    
    return (
        <>
        
            <div className="m-10 text-xl">Cart</div>
            <div>{items.map(i => <li className='bordeProductos' key={i.id}>{items}</li>)}</div>
            {console.log("items antes de mostrar" + {items})}
            <div>
            
                <button className='btn' onClick={clear}>Vaciar Carrito</button>
            </div>

        </>
        
    )
    
}
