import { Outlet, Navigate } from "react-router-dom";
import useAuthStatus from "../Hooks/useAuthStatus";

const PrivateRoute = () => {
    const {loggedIn, laoding} = useAuthStatus()

    if(laoding){
        return <h1>Loading ...</h1>
    }

    return loggedIn ? <Outlet /> : <Navigate to="/sign-up" />
}

export default PrivateRoute