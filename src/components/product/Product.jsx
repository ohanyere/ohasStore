import Button from "../button/Button";
import { BUTTON_TYPE_CLASSES } from "../button/Button";
import { useEffect } from "react";
import {addToCart} from "../../features/cart/cartSlice"
import { useDispatch, useSelector } from "react-redux";
import {inCreaseQauntity, cartTotal } from "../../features/cart/cartSlice"
import "./product.scss"
const Product = ({productData}) => {
    const {name,imageUrl, price} = productData
    const {cartItems,totalQuantity} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    
    // const {cartItems, dispatch} = useContext(cartContext)

    useEffect(() => {
        dispatch(cartTotal(cartItems))
    }, [cartItems])

    const addCart = () => {
        console.log(cartItems);
        console.log(productData);
        
        dispatch(addToCart(productData))
        // console.log(productData);
    }


    return ( 
        <div className="product-card-container">
            <img src={imageUrl} alt="name" />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addCart}>Add to cart</Button>
        </div>
     );
}
 
export default Product;