import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import Loader from './stackblitz/Loader'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const ItemList = (filtro) => {

    const { categoria } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {

        getItems()

    }, [categoria])


    const getItems = () => {

        setIsLoading(true)

        const db = getFirestore()

        //filtro por categoria dependiendo lo que seleccionen en el boton de categorias
        const collectionFilter = collection(db, 'Hardware')


        getDocs(collectionFilter).then((snapshot) => {

            const productos = (snapshot.docs.map(d => ({ id: d.id, ...d.data() })))

            const items = productos.filter(p => p.categoria == categoria)


            setItems(items.length > 0 ? items : productos)


        }).finally(() => {

            setIsLoading(false)

        })

    }

    return (
        <>
            {isLoading ?

                <Loader />
                :
                <div className='box wrapper'>

                    {items.map(p => <Item key={p.id} {...p} />)}


                </div>}
        </>
    )
}

export default ItemList