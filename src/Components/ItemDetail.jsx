import React from 'react'
import { ButtonStock } from './ButtonStock'
import { useCart } from './context/cartContext'

const ItemDetail = ({ id, name, detail, stock, imagen, price }) => {

const {add} = useCart()

const addHandler = () =>{

  add( id );
}

  return (
    <>

      <div>Detalle del producto:
        <div className='bordeProductos text-left row'>
          <li className='m-2'><img src={imagen} /></li>
          <li className='m-2'>Producto:{` ${name}`}</li>
          <li className='m-2'>Detalle:{` ${detail}`}</li>
          <li className='m-2'>Stock:{` ${stock}`}</li>
          <li className='m-2'>Precio:{`$${price}`}</li>
          <ButtonStock stock={stock} />
          <div>
            <button className="btn" onClick={addHandler}>Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </>

  )
}
export default ItemDetail