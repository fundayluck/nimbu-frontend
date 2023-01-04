import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const { status } = useSelector(state => state.authUser)
    const [auth, setAuth] = useState({})
    useEffect(() => {
        const getUser = () => {
            setAuth(status)
        }
        getUser()
    }, [status])
    return auth ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes