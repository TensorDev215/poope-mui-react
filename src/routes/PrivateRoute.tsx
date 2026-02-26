import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const PrivateRoute = ({children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) {
            navigate('/')
        }
    }, [navigate])

    return children
}

export default PrivateRoute