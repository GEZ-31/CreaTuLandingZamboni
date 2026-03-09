import React, { useState } from 'react'
import { CartContext } from './CartContext';

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const clear = () => {
        setCart([]);
    }
    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }
    const addItem = (item, qty) => {
        if(isInCart(item.id)){
            setCart(cart.map((prod) => {
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + qty}
                } else {
                    return prod;
                }
            }));
        } else {
            setCart([...cart, {...item, quantity: qty}]);
        }
    }
    const itemQuantity = (id) => {
        const inCart = cart.find((prod) => prod.id === id)
        if(inCart){
            return inCart.quantity;
        } else {
            return 0;
        }
    }

    return (
        <CartContext.Provider value={{cart, setCart, clear, removeItem, addItem, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
};

