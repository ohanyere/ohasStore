import "./cart-item.scss"
const CartItem = ({item}) => {
    const {imageUrl, name, price, quantity} = item
    console.log(price);
    console.log(125);
    console.log(item.name);
    
    
    
    return ( 
        <div className="cart-item-container">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
     );
}
 
export default CartItem;