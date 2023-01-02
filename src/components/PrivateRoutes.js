import React from 'react'
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'

const PrivateRoutes = ({ children }) => {
    const { status } = useSelector(state => state.authUser)
    return status ? children : <LoadingToRedirect />
}

export default PrivateRoutes