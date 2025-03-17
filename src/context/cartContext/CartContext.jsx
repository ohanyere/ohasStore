import { createContext, useReducer } from "react";
import cartReducers from "./CartReducers";

export const cartContext = createContext()

const CartProvider = ({children}) => {
    const initialState = {
        toggleCart : false,
        cartItems : [],
        total : 0,
        cartPrice : 0
    }

    const [state, dispatch] = useReducer(cartReducers, initialState)
    // console.log(state.toggleCart);
    
    return <cartContext.Provider value={{...state, dispatch}}>
        {children}
    </cartContext.Provider>
}

export  default CartProvider