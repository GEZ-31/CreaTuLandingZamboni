import React from "react";
import ItemCount from "../componentes/ItemCount";

const ItemDetail = ({ detalle }) => {
  const onAdd = (cantidad) => {
    console.log(`Agregaste al carrito ${cantidad} unidades de ${detalle.name}`);
  };
  return (
    <div className="d-flex flex-column align-items-center m-4 gap-4">
      <h1 className="text-center p-4">Detalle de {detalle.name}</h1>
      <div className="d-flex gap-4 justify-content-evenly align-items-center">
        <img src={detalle.img} alt={detalle.name} className="w-25 p-6 m-2 object-fit-cover"/>        
        <div className="w-50 d-flex flex-column gap-4">
          <p className="fs-5">{detalle.description}</p>
          <h2>Precio: ${detalle.price},00</h2>
          <p>Stock: {detalle.stock}</p>
          <ItemCount onAdd={onAdd} stock={detalle.stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
