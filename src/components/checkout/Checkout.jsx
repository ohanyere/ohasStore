import "./checkout.scss"
import {useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {cartTotal} from "../../features/cart/cartSlice"
import CheckoutItem from "../Checkout-Item/Checkout-item"
import PaymentForm from "../PaymentForm/PaymentForm"
const Checkout = () => {
    const {cartItems,cartPrice} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(cartTotal(cartItems))
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
          <PaymentForm />
        </div>
      );
}
 
export default Checkout;