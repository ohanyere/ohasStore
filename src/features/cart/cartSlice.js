import {createSlice} from "@reduxjs/toolkit";
import cartService from "./cartServicer";

const initialState = {
    isCartOpen : false,
    cartItems : [],
    totalQuantity : 0,
    totalPrice : 0
}
console.log("cartSlice")

export const taskSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       cartToggle :(state) => {
          state.isCartOpen = !state.isCartOpen
       },

       addToCart : (state, action) => {
        
        state.cartItems = cartService.addCart(state.cartItems, action.payload)
        
       },
       cartTotal : (state) => {
        state.totalQuantity = cartService.cartCount(state.cartItems)
       },
       cartTotalPrice : (state) => {
        state.totalPrice = cartService.cartPrice(state.cartItems)
       },
       removeCart  : (state, action) => {
        state.cartItems = cartService.cartFilter(state.cartItems, action.payload)
       },
       deCreaseQauntity : (state, action) => {
        state.cartItems = cartService.removeCart(state.cartItems, action.payload)
       },
       inCreaseQauntity : (state, action) => {
        state.cartItems = cartService.addCart(state.cartItems, action.payload)
       },
    }
})

export const {cartToggle, inCreaseQauntity, deCreaseQauntity,removeCart,cartTotal,cartTotalPrice,addToCart} = taskSlice.actions
export default taskSlice.reducer