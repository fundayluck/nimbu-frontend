import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/slices/AuthSlice'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [allAttribute, setAllAttribute] = useState(null)
    console.log(allAttribute);
    const { token } = useSelector(state => state.authUser)

    useEffect(() => {
        const getUser = async () => {
            const decode = await jwtDecode(token)
            setAllAttribute(decode)
        }
        getUser()
    }, [token])


    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }



    return (
        <>
            <div>Home</div>
            <button onClick={() => handleLogout()} >logout</button>
        </>
    )
}

export default Home