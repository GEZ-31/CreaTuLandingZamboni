import ItemCount from "../componentes/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const ItemDetail = ({ detalle }) => {
  const { addItem, itemQuantity } = useContext(CartContext);
  const [compra, setCompra] = useState(false);
  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    toast.success("Producto agregado al carrito");
    setCompra(true);
  };
  const stockActual = detalle.stock - itemQuantity(detalle.id);

  return (
    <div className="d-flex flex-column align-items-center mx-5 gap-3 w-75 justify-content-center">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-center p-4">Detalle de {detalle.name}</h1>
      <div className="d-flex gap-4 justify-content-evenly align-items-start">
        <img
          src={detalle.img}
          alt={detalle.name}
          className="w-25 p-6 m-2 object-fit-cover"
        />
        <div className="w-50 d-flex flex-column gap-4">
          <p className="fs-5">{detalle.description}</p>
          <h2>Precio: ${detalle.price},00</h2>
          <p className="fs-5">Stock: {stockActual}</p>
          {compra ? (
            <div>
              <Link to="/cart" className="btn btn-dark">
                Ir al carrito
              </Link>
              <Link to="/" className="btn btn-primary m-2">
                Seguir comprando
              </Link>
            </div>
          ) : (
            <ItemCount onAdd={onAdd} stock={stockActual} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
