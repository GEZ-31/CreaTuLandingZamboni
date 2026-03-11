import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const {cart, clear, removeItem} = useContext(CartContext);
  return (
    <div className='d-flex flex-column justify-content-start m-3'>
        <h2 className="p-4 ">Carrito</h2>
        <div className='d-flex flex-column justify-content-start'>
            {cart.map((compra)=>(
                
                <div key={compra.id} className="card shadow-lg m-3 w-75" >
                    <div className="d-flex flex-row align-items-center gap-3 m-3 p-2">
                        <div className="card-body">
                            <img src={compra.img} className="img-fluid rounded-start" width="120" alt={compra.name}  />
                        </div>                        
                        <div className="card-body gap-2">
                            <h5 className="card-title">{compra.name}</h5>
                            <p className="card-text fs-4"> ${compra.price},00 </p>
                            <p className="card-text"> Cantidad: {compra.quantity} </p>
                        </div>                        
                        <div className="card-body d-flex flex-row justify-content-between gap-3" >
                            <p className="card-text mb-0 fs-4"> Total: ${compra.price * compra.quantity},00 </p>
                            <button className="btn btn-danger" onClick={() => removeItem(compra.id)}> X </button>
                        </div>
                    </div>
                </div>    
            ))}
        </div>
        <div className='d-flex flex-column justify-content-between m-3'>
            <span className='ms-2 fs-3'>Total a pagar: </span>
            <div className='my-2'>
                <button className="btn m-2 btn-danger" onClick={clear}>Vaciar carrito</button>
                <button className="btn m-2 btn-success" >Terminar compra</button>
            </div>
        </div>
    </div>
  )
}

export default Cart