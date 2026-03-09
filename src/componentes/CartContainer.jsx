import React, { useContext } from 'react'
import Cart from './Cart'
import EmptyCart from './EmptyCart';
import { CartContext } from '../context/CartContext';

const CartContainer = () => {
    const {cart} = useContext(CartContext);
  return (
    <>
        {
            !cart.length ? <EmptyCart/>
             : 
             <Cart/>
        }
        
    </>
  )
}

export default CartContainer