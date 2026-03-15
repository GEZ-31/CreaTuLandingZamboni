import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";

const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const comprar = () => {
    onAdd(count);
  };

  return (
    <>
      {stock === 0  ? (
        <p className="text-danger">No hay stock disponible</p>
      ) : (
        <div className="counter-container">
          <div className="counter-controls">
            <button className="btn btn-danger" onClick={restar}>
              <FiMinus />

            </button>

            <span className="counter-value">{count}</span>

            <button className="btn btn-success" onClick={sumar}>
             <IoIosAdd  />
            </button>
          </div>

          <button className="btn btn-primary buy-btn" onClick={comprar}>
            Comprar
          </button>
        </div>
      )}
    </>
  );
};

export default ItemCount;
