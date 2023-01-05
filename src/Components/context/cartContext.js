import React, {children, useContext, useState } from "react";

const CartContext = React.createContext({

    items:[],
    add:() => {},
    clear:() => {}
    
});

const useCart = () =>{

return useContext(CartContext)


}


const CartContextProvider = ( { children } ) => {

const [items, setItems] = useState([])

console.log(items)

const addToCart = (item) => (
    

setItems(items => items.concat(item))

)

const clearCart = () => (

    setItems([])
)


const context ={

    items: items,
    add: addToCart,
    clear: clearCart

}


  return (
    <CartContext.Provider value ={context}>
        {children}
    </CartContext.Provider>)
}

export {CartContext, CartContextProvider,useCart}






