import { createContext, useReducer, useEffect, useRef } from "react";
import userReducer from "./UserReducer";
import {getAuth, onAuthStateChanged} from "firebase/auth"
export const userContext = createContext()

const UserProvider = ({children}) => {
    const initialState = {
        user : null,
        isSuccessful : false,
        isError : false
    }
    const auth = getAuth()
    const isMounted = useRef(true)
    // logout()

    const [state, dispatch] = useReducer(userReducer, initialState )
    useEffect(() => {
           
            if(isMounted){
                onAuthStateChanged(auth, (user) => {
                    console.log(user);
                    if(user){
                        dispatch({
                            type : "SETUSER",
                            payload : user
                        })       
                        
                    }
                  
                })
            }
                return () => {
                    isMounted.current = false
                }
            
        }, [])


    return <userContext.Provider value={{...state, dispatch}}>
        {children}
    </userContext.Provider>
}

export default UserProvider