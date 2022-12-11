import React, { useState, useEffect } from 'react'
import Item from './Item'
import { productos } from './data/Hardware'
import { useParams } from 'react-router-dom'


const ItemList = () => {
    const [products, setProducts] = useState([])
    const {categoria} = useParams()

    useEffect(() => {

        getProducts().then(response => {

            setProducts(response)

        })

    }, [categoria])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            const products = categoria ? productos.filter(p => p.categoria == categoria) : productos
           
            
            setTimeout(() => {

                resolve(products);
                
                
            }, 500)

        })

    }

    return (
        <div className='box wrapper'>
        
            {products.map(p => <Item key={p.id} {...p} />)}
        
        </div>

    )
}

export default ItemList