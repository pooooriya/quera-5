import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const getToken = localStorage.getItem("token")
    return getToken ? children : <Navigate to="/login" />
}

export default PrivateRoute