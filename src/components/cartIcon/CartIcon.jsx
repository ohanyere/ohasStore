import Shopbag from "../../assets/Shopbag";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext/CartContext";
import cartActions from "../../context/cartContext/CartActions";
import "./CartIcon.scss"
const CartIcon = () => {
    const {dispatch, toggleCart, total} = useContext(cartContext)

    const cartToggle = () => {
        const sup = cartActions.cartToggle(toggleCart)
        dispatch({
            type: "SETTOGGLE",
            payload : sup
        })
    }
      
    //  console.log(total);
     
    
    return ( 
        <div className="cart-icon-container"  onClick={cartToggle}>
            <Shopbag  className="shopping-icon"/>
            <span className="item-count">{total}</span>
        </div>
     );
}
 
export default CartIcon;