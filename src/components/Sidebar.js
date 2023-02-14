import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo/title.svg'
import { ReactComponent as Dashboard } from '../assets/logo/Dashboard.svg'
import { ReactComponent as Attendance } from '../assets/logo/Attendance.svg'
import { ReactComponent as People } from '../assets/logo/People.svg'
import { ReactComponent as RequestFor } from '../assets/logo/RequestFor.svg'
import { ReactComponent as AccessRequest } from '../assets/logo/AccessRequest.svg'
import { AiFillSetting as Configuration } from 'react-icons/ai'
import useAuth from '../ahooks/useAuth'
import apis from '../apis'
import jwtDecode from 'jwt-decode'

const sidebarList = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <Dashboard className='m-0' />,
        protect: false
    },
    {
        path: "/attendance",
        name: "Attendance",
        icon: <Attendance className='m-2' />,
        protect: true
    },
    {
        path: "/people",
        name: "People",
        icon: <People className='m-2' />,
        protect: true
    },
    {
        path: "/request",
        name: "Request For",
        icon: <RequestFor className='m-2' />,
        protect: false
    },
    {
        path: "/access",
        name: "Access Request",
        icon: <AccessRequest className='m-2' />,
        protect: true
    },
    {
        path: "/config",
        name: "Configuration",
        icon: <Configuration className='m-2 text-[21px] text-[#3A5372]' />,
        protect: true
    }
]

const Sidebar = () => {
    const { auth } = useAuth()
    const [id, setId] = useState(null)
    const [data, setData] = useState(null)
    const getId = id?.userId

    useEffect(() => {
        const getUser = async () => {
            try {
                const decode = await jwtDecode(JSON.stringify(auth))
                setId(decode)

            } catch (error) {
                return
            }
        }
        getUser()
        const getData = async () => {
            try {
                if (getId === undefined) { return null }
                const response = await apis.get(`/api/user/${getId}`, {
                    headers: {
                        authorization: `Bearer ${auth?.token}`
                    }
                })
                setData(response.data.data)
            } catch (error) {
                console.log(error);
            }

        }
        getData()
    }, [auth, getId])

    return (
        <div className='flex flex-col items-center w-[250px] fixed top-0 left-0 bottom-0 bg-[#E1F2FB]' >
            <div>
                <Logo className='w-[150px] mb-5' />
            </div>
            <ul>
                {sidebarList.map((item, index) => (
                    <li
                        key={index}
                        className={`${item.protect === true
                            && data?.role === 'STAFF'
                            ? 'hidden' : ''}
                            ${item.protect === true
                                && data?.role === undefined
                                ? 'hidden' : ''
                            }
                            `}

                    >
                        <NavLink to={item.path} className={({ isActive }) => (isActive ? "bg-white flex items-center p-2 rounded-md my-2" : "flex items-center p-2 rounded-md my-2")}>
                            {item.icon}
                            <span className='text-[20px] ml-4'>{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Sidebar