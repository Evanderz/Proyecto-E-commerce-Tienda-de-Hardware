import React from 'react'
import { ButtonStock } from './ButtonStock'

const ItemDetail = ({name, detail, stock,imagen,price }) => {
  return (
    <>
    
      <div>Detalle del producto:
        <div className='bordeProductos text-left row'>
          <li className='m-2'>{imagen}</li>
          <li className='m-2'>Producto:{` ${name}`}</li>
          <li className='m-2'>Detalle:{` ${detail}`}</li>
          <li className='m-2'>Stock:{` ${stock}`}</li>
          <li className='m-2'>Precio:{`$${price}`}</li>
          <ButtonStock stock={stock}/>
        </div>
      </div>
    </>

  )
}
export default ItemDetail