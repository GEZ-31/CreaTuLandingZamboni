import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";


const Checkout = () => {
    const [cliente, setCliente] = useState({});
    const [validMail, setValidMail] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    
    const {cart, total, clear} = useContext(CartContext);

    const clienteData = (e) => {
        setCliente(
            {
                ...cliente,
                [e.target.name] : e.target.value,
            }
        )
    }
    const generarOrden = (e) => {
        e.preventDefault();
        if (!cliente.nombreCompleto || !cliente.direccion || !cliente.email || !validMail) {
            setError('Por favor, completa todos los campos')
        }else if (cliente.email !== validMail) {
            setError('Los correos electrónicos no coinciden')
        }else{
            setError(null)
            setCargando(true)
            let orden = {
                comprador: cliente,
                carrito: cart,
                total: total(),
                fecha: serverTimestamp()
            }
            const orderCollection = collection(db, "ordenes")
            addDoc(orderCollection, orden)
            .then((res) => {
                setOrdenId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
            .finally(() => setCargando(false))
        }
    }
    if(!cart.length && !ordenId){
            return <EmptyCart/>
    }
    return (
    <>
        {
            ordenId ?
            <div className="d-flex flex-column justify-content-center align-items-center m-auto  gap-4  w-50">
                <h1 className="my-5">¡Gracias por tu compra!</h1>
                <p className="fs-5">Tu código de orden es: {ordenId}</p>
                <Link to={`/orden/${ordenId}`} className="btn btn-primary">Ver mi pedido</Link>
                <Link to="/" className="btn btn-dark">Volver al inicio</Link>
            </div>
            :            
            <div className="d-flex flex-column justify-content-center align-items-center m-auto gap-2 w-50">
                <h2 className="my-2">Completa con tus datos</h2>
                {error && <span className="alert alert-danger">{error}</span>}
                <form className="d-flex flex-column gap-2 w-100" onSubmit={generarOrden}>
                    <input className="form-control" placeholder="Nombre completo" name="nombreCompleto" type="text" onChange={clienteData}/>
                    <input className="form-control" placeholder="Dirección" name="direccion" type="text" onChange={clienteData} />
                    <input className="form-control" placeholder="Correo electrónico" name="email" type="email" onChange={clienteData}  />
                    <input className="form-control" placeholder="Repite tu email" name="repetirEmail" type="email" onChange={(e) => setValidMail(e.target.value)} />
                    <button className="btn btn-primary" disabled={cargando} type="submit">
                        {cargando ? 'Generando orden...' : 'Generar orden de compra'}
                    </button>
                </form>
            </div>
        }
    </>
    );
};

export default Checkout