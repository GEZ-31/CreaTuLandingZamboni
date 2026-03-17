import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const cartLS = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartLS);
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart))
  }, [cart])
  const clear = () => {
    setCart([]);
  };
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };
  const cartQty = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };
  const total = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity * prod.price), 0);
  };
  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return { ...prod, quantity: prod.quantity + qty };
          } else {
            return prod;
          }
        }),
      );
    } else {
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };
  const itemQuantity = (id) => {
    const inCart = cart.find((prod) => prod.id === id);
    if (inCart) {
      return inCart.quantity;
    } else {
      return 0;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        clear,
        removeItem,
        addItem,
        itemQuantity,
        cartQty,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
