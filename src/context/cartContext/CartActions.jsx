const cartToggle = (toggleData) => {
    
    return !toggleData
}

const addCart = (cartItems, productToAdd) => {
    
    const productExist = cartItems.find((cartItem) => {
        return cartItem.id === productToAdd.id
})  
    if(productExist){
        return    cartItems.map((item) => item.id === productToAdd.id ? {...item, quantity : item.quantity +1} : item )
    }

    return  [...cartItems, {...productToAdd, quantity : 1}]
    
}

const removeCart = (cartItems, productToRemove) => {
    const findProduct = cartItems.find((item) => item.id === productToRemove.id)
    console.log(findProduct);
    
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
const cartActions = {
    cartToggle,
    addCart,
    removeCart,
    cartCount,
    cartFilter,
    cartPrice
}

export default cartActions