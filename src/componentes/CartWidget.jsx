import { FaShoppingCart } from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'

const CartWidget =()=>{
    return(
        <div>
            <span><FaShoppingCart fontSize={20} /></span>
            <Badge bg="danger">3</Badge>
        </div>
    )
}   
export default CartWidget