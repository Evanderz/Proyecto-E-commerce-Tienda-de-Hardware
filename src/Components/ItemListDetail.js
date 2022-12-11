import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { productos } from './data/Hardware'
import { useParams } from 'react-router-dom'
import { NavBar } from './NavBar'

const ItemListDetail = () => {

  const [item, setItem] = useState([])
  const {id} = useParams()

  useEffect(() => {

    getItemDetail().then(response => {

      setItem(response)

    })
  }, [ id ])

  const getItemDetail = () => {
    return new Promise((resolve, reject) => {
      const item = productos.filter(p => p.id == id)

      setTimeout(() => {

        resolve(item ? item : productos);

      }, 500)

    })

  }

  return (
    <div className='box wrapper'>
      
      {item.map(i => <ItemDetail key={i.id} {...i} />)}
      
  
    </div>
  )
}

export default ItemListDetail