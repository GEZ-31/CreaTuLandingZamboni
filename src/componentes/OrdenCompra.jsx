import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const OrdenCompra = () => {
  const { id } = useParams()
  const [orden, setOrden] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchOrden = async () => {
      try {
        const docRef = doc(db, 'ordenes', id)
        const docSnapshot = await getDoc(docRef)
        if (docSnapshot.exists()) {
          setOrden(docSnapshot.data())
        } else {
          setError('Orden no encontrada')
        }
      } catch (err) {
        setError('Error al cargar la orden'), 
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchOrden()
  }, [id])

  if (loading) return <p>Cargando tu orden...</p>
  if (error) return <p>{error}</p>
  if (!orden) return <p>No se encontró la orden</p>

  return (
    <div>
        <h2 className="p-4 ">Orden de compra</h2>
        <p>Contenido de la orden de compra</p>
        <div className='d-flex flex-column justify-content-start'>
                    {orden.carrito.map((compra)=>(
                        
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
                                </div>
                            </div> 
                        </div>                         
                    ))}            
        </div>      
    </div>
  )
}

export default OrdenCompra