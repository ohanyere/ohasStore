import "./cartdropdown.scss"
import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext/CartContext";
import Button from "../button/Button";
import CartItem from "../cartItems/Cart-Item";
const CartdropDown = () => {
    const{cartItems, dispatch} = useContext(cartContext)

   
    const navigate = useNavigate()

    const onRedirect = () => {
        navigate("/checkout")
    }
    return ( 
        <div className="cart-dropdown-container">
          {cartItems.lenght >= 0 ? <div>
            {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
            <Button  onClick={onRedirect} >Go to checkout</Button>
          </div> : <div>no item found</div>}
        </div>
     );
}
 
export default CartdropDown;