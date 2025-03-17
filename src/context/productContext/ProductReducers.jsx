const ProductReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return{
                ...state,
                Products : action.payload,
                loading : false
                
            }
            break;
            
        default:
            break;
    }
}

export default ProductReducer