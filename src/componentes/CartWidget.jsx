import { HiShoppingCart } from "react-icons/hi2";
import Badge from 'react-bootstrap/Badge'
import { Link } from "react-router-dom";

const CartWidget =()=>{
    return(
        <div className="p-3 gap-2">
            <Link to="/cart">
                <span className="m-1" ><HiShoppingCart color="white" fontSize={36} /></span>
            </Link>
            <Badge fontSize={22} className="p-1" bg="danger">3</Badge>
        </div>
    )
}   
export default CartWidget