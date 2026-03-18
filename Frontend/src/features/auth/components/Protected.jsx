import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth.context"

const Protected = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    // 🔥 wait until auth loads
    if (loading) {
        return <h1>Loading...</h1>
    }

    // 🔥 if not logged in → go to login
    if (!user) {
        return <Navigate to="/login" />
    }

    return children
}

export default Protected