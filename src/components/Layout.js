import React, { useEffect, useState } from 'react'
import Headbar from './Headbar'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { Outlet, useNavigate } from 'react-router-dom'
import { logout } from '../store/slices/AuthSlice'
import Swal from 'sweetalert2'

const Layout = () => {
    const { token } = useSelector(state => state.authUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [id, setId] = useState(null)
    const [data, setData] = useState(null)
    const getId = id?.userId



    useEffect(() => {
        const getUser = async () => {
            try {
                const decode = await jwtDecode(JSON.stringify(token))
                setId(decode)
                if (decode.exp * 1000 < Date.now()) {
                    dispatch(logout())
                    navigate('/')
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'Your token has expired, please login again!',
                        showConfirmButton: true,
                    })
                }
            } catch (error) {
                return
            }
        }
        getUser()
        const getData = async () => {
            try {
                if (getId === undefined) { return null }
                const response = await axios.get(`http://localhost:5000/api/user/${getId}`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setData(response.data)
            } catch (error) {

            }

        }
        getData()
    }, [token, getId, dispatch, navigate])

    return (
        <div>
            <Headbar data={data} />
            <Sidebar />
            <div className='ml-[300px] pt-[60px]'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout