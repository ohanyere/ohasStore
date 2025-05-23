const addCart = (cartItems, productToAdd) => {
    console.log("ADD TO CART", productToAdd);
    const productExist = cartItems.find((cartItem) => {
        console.log("CHECKING:", cartItem.id, productToAdd.id);
        return cartItem.id === productToAdd.id;
    });

    if (productExist) {
        const updatedCart = cartItems.map((item) =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        console.log("UPDATED QUANTITY:", updatedCart);
        return updatedCart;
    }

    const newCart = [...cartItems, { ...productToAdd, quantity: 1 }];
    console.log(productToAdd);
    console.log("NEW ITEM ADDED:", newCart);
    return newCart;
};


const cartToggle = (toggleData) => {    
    return !toggleData
}

const removeCart = (cartItems, productToRemove) => {
    const findProduct = cartItems.find((item) => item.id === productToRemove.id)
    
    if(findProduct.quantity === 1){
     return cartItems.filter((item) => item.id !== productToRemove.id)
    }
        
    return cartItems.map((item) => item.id === productToRemove.id ? {...item, quantity : item.quantity - 1} : item)
}

const cartCount  = (cartItems) => {
    return  cartItems.reduce((total, currentElement) => total + currentElement.quantity, 0)
  }

  const cartFilter  = (cartItems, product) => {
      return  cartItems.filter(item => item.id !== product.id)
    }
  
const cartPrice = (cartItems) => {
    return cartItems.reduce((total, currentElement) => total + currentElement.quantity * currentElement.price , 0)
}

const cartService = {
    cartToggle,
    addCart,
    removeCart,
    cartCount,
    cartFilter,
    cartPrice
}

export default cartService