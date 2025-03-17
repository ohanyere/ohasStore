import "./checkout.scss"
import { useContext, useEffect } from "react"
import { cartContext } from "../../context/cartContext/CartContext"
import cartActions from "../../context/cartContext/CartActions"
import CheckoutItem from "../Checkout-Item/Checkout-item"
const Checkout = () => {
    const {cartItems,dispatch, cartPrice} = useContext(cartContext)
    
    useEffect(() => {
        const sort = cartActions.cartPrice(cartItems)
        dispatch({
            type : "TOTALPRICE",
            payload : sort
        })
    }, [cartItems])
    return (
        <div className='checkout-container'>
          <div className='checkout-header'>
            <div className='header-block'>
              <span>Product</span>
            </div>
            <div className='header-block'>
              <span>Description</span>
            </div>
            <div className='header-block'>
              <span>Quantity</span>
            </div>
            <div className='header-block'>
              <span>Price</span>
            </div>
            <div className='header-block'>
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} checkoutitem={cartItem} />
          ))}
          <div className='total'>TOTAL: ${cartPrice}</div>
        </div>
      );
}
 
export default Checkout;