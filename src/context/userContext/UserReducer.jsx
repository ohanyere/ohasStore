const userReducer = (state, action) => {
    switch (action.type) {
        case "SETUSER":
            return {
                ...state,
                user : action.payload,
                isSuccessful : true,
                isError : false
            }
            
            break;
    
        default:
            break;
    }
}

export default userReducer