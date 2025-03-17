import { useState, useEffect } from "react"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { useContext } from "react"
import { userContext } from "../context/userContext/UserContext"
const useAuthStatus = () => {
    const[laoding, setLoading] = useState(true)
    const[loggedIn, setLoggedIn] = useState(false)
    const{dispatch} = useContext(userContext)
    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user){
                setLoggedIn(true)
                dispatch({
                    type : "SETUSER",
                    payload : user
                })
            }
            setLoading(false)
        })
    })
    return {loggedIn, laoding}
}
 
export default useAuthStatus;