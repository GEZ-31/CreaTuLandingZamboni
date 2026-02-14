import { HiShoppingCart } from "react-icons/hi2";
import Badge from 'react-bootstrap/Badge'

const CartWidget =()=>{
    return(
        <div >
            <span ><HiShoppingCart color="white" fontSize={36} /></span>
            <Badge fontSize={26}className="p-2" bg="danger">3</Badge>
        </div>
    )
}   
export default CartWidget