import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, imagen, categoria, price }) => {
  return (
    <>
      <div className='bordeProductos  row  '>
        {imagen}
        {name}
        <div className='m-2'>
        ${price}
        </div>

        <div className=''>
          <Link to={`/item/${id}`} className='btn separarBoton'>Detalle Producto</Link>
        </div>
      </div>

    </>

  )
}

export default Item