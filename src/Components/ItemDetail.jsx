import React from 'react'
import { ButtonStock } from './ButtonStock'

const ItemDetail = ({name, detail, stock,imagen }) => {
  return (
    <>
      <div>Detalle del producto:
        <div className='bordeProductos text-left row'>
          <li>{imagen}</li>
          <li>Producto:{name}</li>
          <li>Detalle:{detail}</li>
          <li>Stock: {stock}</li>
          <ButtonStock stock={stock}/>
        </div>
      </div>
    </>

  )
}
export default ItemDetail