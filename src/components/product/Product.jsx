import Button from "../button/Button";
import { BUTTON_TYPE_CLASSES } from "../button/Button";
import { useContext , useEffect} from "react";
import cartActions from "../../context/cartContext/CartActions";
import { cartContext } from "../../context/cartContext/CartContext";
import "./product.scss"
const Product = ({productData}) => {
    const {name,imageUrl, price} = productData
    // console.log(name);
    
    const {cartItems, dispatch} = useContext(cartContext)

    useEffect(() => {
        const cartCount =  cartActions.cartCount(cartItems)
        dispatch({
            type : "CARTCOUNT",
            payload : cartCount
        })
    }, [cartItems])

    const addCart = () => {
        const suo =  cartActions.addCart(cartItems, productData)
        console.log(suo);
        
        dispatch({
            type : "ADD_CART",
            payload : suo
        })
        
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