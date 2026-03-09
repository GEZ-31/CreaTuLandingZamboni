import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const {cart, clear, removeItem} = useContext(CartContext);
  return (
    <div>
        <h2>Carrito</h2>
        <div>
            {cart.map((compra)=>(
                <div key={compra.id}>
                    <img src={compra.img} alt={compra.name} width={120} height={120}/>
                    <p>{compra.name}</p>
                    <p>${compra.price},00</p>
                    <p>Cantidad: {compra.quantity}</p>
                    <p>Total: ${compra.price * compra.quantity},00</p>
                    <button className="btn btn-danger" onClick={() => removeItem(compra.id)}> X </button>
                </div>
            ))}
        </div>
        <span>Total a pagar: </span>
        <div>
            <button className="btn btn-danger" onClick={clear}>Vaciar carrito</button>
            <button className="btn btn-success" >Terminar compra</button>
        </div>
        
    </div>
  )
}

export default Cart