import React, { useEffect, useState } from 'react'
import Headbar from './Headbar'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const Layout = () => {
    const { token } = useSelector(state => state.authUser)
    const [id, setId] = useState(null)
    const [data, setData] = useState(null)
    const getId = id?.userId
    useEffect(() => {
        const getUser = async () => {
            try {
                const decode = await jwtDecode(JSON.stringify(token))
                setId(decode)
            } catch (error) {

            }
        }
        getUser()
        const getData = async () => {
            try {
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
    }, [token, getId])

    return (
        <div>
            <Headbar data={data} />
            <Sidebar />
        </div>
    )
}

export default Layout