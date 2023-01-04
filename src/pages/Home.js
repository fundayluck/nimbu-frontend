import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/slices/AuthSlice'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [allAttribute, setAllAttribute] = useState(null)
    const user = useSelector(state => state.authUser)

    useEffect(() => {
        const getUser = async () => {
            try {
                const decode = await jwtDecode(JSON.stringify(user))
                setAllAttribute(decode)
            } catch (error) {

            }
        }
        getUser()
    }, [user])


    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }



    return (
        <>
            <div>{allAttribute?.userId}</div>
            <button onClick={() => handleLogout()} >logout</button>
        </>
    )
}

export default Home