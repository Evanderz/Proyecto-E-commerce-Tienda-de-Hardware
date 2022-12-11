import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name,imagen,categoria}) => {
  return (
    <>
      <div className='bordeProductos  row  '>{imagen}{name}
      <div className=''>
        <Link to= {`/item/${id}`} className='btn separarBoton'>Detalle Producto</Link>
        </div>
      </div>
      
    </>

  )
}

export default Item