import React, { useEffect, useState } from 'react'
import { Blocks } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './stackblitz/Loader'
import { getDoc, getFirestore, doc, collection, getDocs,query,where } from 'firebase/firestore'


const ItemListDetail = () => {

  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {

    getItemDetail()

  }, [id])

  const getItemDetail = () => {
    
    setIsLoading(true)

        const db = getFirestore()

        //filtro por categoria dependiendo lo que seleccionen en el boton de categorias
        const collectionFilter = collection(db, 'Hardware')
          
        
        getDocs(collectionFilter).then(( snapshot ) => {
          
            const productos = (snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
            const item = productos.filter(p => p.id == id)
           

            setItem(item.length > 0 ? item : productos)
    
    
        }).finally(()=>{

            setIsLoading(false)
     
         })
        }

  return (
    <>  {isLoading ?

      <Loader/>
      :
      <div className='box wrapper'>

        {item.map(i => <ItemDetail key={i.id} {...i} />)}


      </div>}

    </>
  )

}

export default ItemListDetail