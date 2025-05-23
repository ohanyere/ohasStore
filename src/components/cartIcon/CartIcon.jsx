import Shopbag from "../../assets/Shopbag";
import { useDispatch, useSelector } from "react-redux";
import { cartToggle } from "../../features/cart/cartSlice";
import "./CartIcon.scss"
const CartIcon = () => {
    const {totalQuantity} = useSelector(state => state.cart)
     const dispatch = useDispatch()
 

   const handleToggle = () => {
        dispatch(cartToggle())
   }
      
 
     
    
    return ( 
        <div className="cart-icon-container"  onClick={handleToggle}>
            <Shopbag  className="shopping-icon"/>
            <span className="item-count">{totalQuantity}</span>
        </div>
     );
}
 
export default CartIcon;