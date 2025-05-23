const cartReducers = (state, actions) => {
    switch (actions.type) {
        case "SETTOGGLE" :
            return {
                ...state,
                toggleCart : actions.payload
            }
           
            case "ADD_CART" :
           return {
             ...state,
             cartItems : actions.payload
           }
           
           case "ADD_CARTO" :
            return {
              ...state,
              cartItems : actions.payload
            }
            
           case "CARTCOUNT" :
           return {
             ...state,
             total : actions.payload

           }

           case "REMOVE_CART" :
           return {
             ...state,
             cartItems : actions.payload  
           }

           case "FILTER_CART" :
           return {
             ...state,
             cartItems : actions.payload,
           }

           case "TOTALPRICE" :
           return {
             ...state,
             cartPrice : actions.payload  
           }
    
        default:
            break;
    }
}

export default cartReducers