import React from "react";
import ItemCount from '../componentes/ItemCount';

const ItemDetail = ({ detalle }) => {
  const onAdd = (cantidad)=> {
    console.log(`Agregaste al carrito ${cantidad} unidades de ${detalle.name}`)
  }
  return (
    <div className="container">
      <div>
        <h1>Detalle de {detalle.name}</h1>
        <img src={detalle.img} alt={detalle.name} />
        <p>{detalle.description}</p>
        <h2>Precio: ${detalle.price},00</h2>
        <p>Stock: {detalle.stock}</p>
        <ItemCount onAdd={onAdd} stock={detalle.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
