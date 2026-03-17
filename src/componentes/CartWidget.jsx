import { HiShoppingCart } from "react-icons/hi2";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart, cartQty } = useContext(CartContext);
  return (
    <div className="p-3 gap-2">
      <Link to="/cart">
        <span className="m-1">
          <HiShoppingCart color="white" fontSize={36} />
        </span>
      </Link>
      {cart.length > 0 && (
        <Badge fontSize={22} className="p-1" bg="danger">
          {cartQty()}
        </Badge>
      )}
    </div>
  );
};
export default CartWidget;
