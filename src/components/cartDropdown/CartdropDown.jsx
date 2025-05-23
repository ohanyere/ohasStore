import "./cartdropdown.scss"

import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext/CartContext";
import Button from "../button/Button";
import CartItem from "../cartItems/Cart-Item";
import { useSelector } from "react-redux";
const CartdropDown = () => {
    const{cartItems} = useSelector(state => state.cart)
    console.log(cartItems)
    
   
    const navigate = useNavigate()

    const onRedirect = () => {
      console.log(234)
        navigate("/checkout")
    }
    return ( 
        <div className="cart-dropdown-container">
          {cartItems.length > 0 ? <div>
            {cartItems.map((item) => console.log(item)
            )}
            <Button  onClick={onRedirect} >Go to checkout</Button>
          </div> : <div className="noItemFound">no item found</div>}
        </div>
     );
}
 
export default CartdropDown;