import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, imagen, categoria, price }) => {
  return (
    <>
      <div className='border-solid border-2 border-blue-500 rounded-md shadow-lg bg-black shadow-violet-500 m-4  row  '>
        <img src={imagen}></img>
        {name}
        <div className='m-2'>
          ${price}
        </div>
        <div className=''>
          <Link to={`/item/${id}`} className='btn separarBoton shadow-lg shadow-violet-500'>Detalle Producto</Link>
        </div>
      </div>

    </>

  )
}

export default Item