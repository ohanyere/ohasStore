import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice"
// import cartSlice from "../features/cart/cartSlice"
import productReducer from "../features/products/productSlice"
import  taskSlice  from "../features/cart/cartSlice";
const store = configureStore({
    reducer : {
    auth : authReducer,
    cart : taskSlice,
    product : productReducer
    }
})

export default store