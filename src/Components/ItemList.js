import React, { useEffect, useState } from 'react'
import { Blocks } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { productos } from './data/Hardware'
import Item from './Item'

const ItemList = () => {
    const [products, setProducts] = useState([])
    const { categoria } = useParams()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        getProducts().then(response => {


            setProducts(response)

        }).finally(() => {

            setIsLoading(false)

        })

    }, [categoria])

    const getProducts = () => {

        setIsLoading(true);
        return new Promise((resolve, reject) => {
            const products = categoria ? productos.filter(p => p.categoria == categoria) : productos


            setTimeout(() => {

                resolve(products);


            }, 2000)

        })

    }
    return (
        <>
            {isLoading ? 
            
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

                    {products.map(p => <Item key={p.id} {...p} />)}

                </div>}
        </>
    )
}

export default ItemList