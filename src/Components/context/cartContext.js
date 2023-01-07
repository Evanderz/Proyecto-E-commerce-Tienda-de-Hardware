import React, { useContext, useState } from "react";

const CartContext = React.createContext({

    items: [],
    add: () => { },
    clear: () => { }

});

const useCart = () => {

    return useContext(CartContext)

}

const CartContextProvider = ({ children }) => {

    const [items, setItems] = useState([])

    const addToCart = (item) => {

        let indexEncontrado = items.findIndex(i => i.id === item.id)

        if (indexEncontrado > -1) {

            let newItems = items

            newItems[indexEncontrado].contador = items[indexEncontrado].contador + item.contador

            setItems(newItems)

        } else {

            setItems(items => items.concat(item))

        }

    }

    const clearCart = () => {

        setItems([])
    }


    const context = {

        items: items,
        add: addToCart,
        clear: clearCart

    }


    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>)
}

export { CartContext, CartContextProvider, useCart }






