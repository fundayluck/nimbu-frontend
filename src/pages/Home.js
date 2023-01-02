import React from 'react'
import { useDispatch } from 'react-redux'
import { logout, selectAuth } from '../store/slices/AuthSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const { status } = useDispatch(selectAuth)
    console.log(status);
    const navigate = useNavigate()
    const dispatch = useDispatch()

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