import React, { useEffect, useState } from 'react'
import { Blocks } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { productos } from './data/Hardware'
import ItemDetail from './ItemDetail'


const ItemListDetail = () => {

  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {

    getItemDetail().then(response => {

      setItem(response)

    }).finally(()=>{

       setIsLoading(false)

    })
  }, [id])

  const getItemDetail = () => {
    setIsLoading(true)
    return new Promise((resolve, reject) => {
      const item = productos.filter(p => p.id == id)

      setTimeout(() => {

        resolve(item ? item : productos);

      }, 500)

    })

  }

  return (
    <>  {isLoading ?

      <div className='centrarLoading'>
        <Blocks
          visible={isLoading}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div> 
      :
      <div className='box wrapper'>

        {item.map(i => <ItemDetail key={i.id} {...i} />)}


      </div>}

    </>
  )

}

export default ItemListDetail