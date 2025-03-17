import "./checkout-item.scss"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext/CartContext";
import cartActions from "../../context/cartContext/CartActions";
const CheckoutItem = ({checkoutitem}) => {
    const {imageUrl, name, quantity, price} = checkoutitem
    const {dispatch, cartItems} = useContext(cartContext)
    const onIncrement = (productToAdd) => {
        const sup = cartActions.addCart(cartItems, productToAdd) 
            dispatch({
            type : "ADD_CART",
            payload : sup
        })
    }
        const onDecrement = (productToRemove) => {
            const sup = cartActions.removeCart(cartItems, productToRemove) 
                dispatch({
                type : "REMOVE_CART",
                payload : sup
            })
    }

    const clearItemHandler = () => {
        const filter = cartActions.cartFilter(cartItems, checkoutitem)
        dispatch({
            type : "FILTER_CART",
            payload : filter
        })
    }
    return (  
        <>
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow'onClick={() => onDecrement(checkoutitem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => onIncrement(checkoutitem)}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
        
        </>
    );
}
 
export default CheckoutItem;