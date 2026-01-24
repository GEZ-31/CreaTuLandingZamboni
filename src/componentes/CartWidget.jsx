import { FaShoppingCart } from 'react-icons/fa';

const CartWidget =()=>{
    return(
        <div>
            <span><FaShoppingCart /></span>
            <span style={{color:'red'}}>1</span>
        </div>
    )
}   
export default CartWidget