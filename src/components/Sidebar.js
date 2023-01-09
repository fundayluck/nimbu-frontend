import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo/title.svg'
import { ReactComponent as Dashboard } from '../assets/logo/Dashboard.svg'
import { ReactComponent as Attendance } from '../assets/logo/Attendance.svg'
import { ReactComponent as People } from '../assets/logo/People.svg'
import { ReactComponent as RequestFor } from '../assets/logo/RequestFor.svg'
import { ReactComponent as AccessRequest } from '../assets/logo/AccessRequest.svg'
import { ReactComponent as Document } from '../assets/logo/Document.svg'

const sidebarList = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <Dashboard className='m-0' />
    },
    {
        path: "/attendance",
        name: "Attendance",
        icon: <Attendance className='m-2' />
    },
    {
        path: "/people",
        name: "People",
        icon: <People className='m-2' />
    },
    {
        path: "/request",
        name: "Request For",
        icon: <RequestFor className='m-2' />
    },
    {
        path: "/access",
        name: "Access Request",
        icon: <AccessRequest className='m-2' />
    },
    {
        path: "/document",
        name: "Document",
        icon: <Document className='m-2' />
    },
]

const Sidebar = () => {
    return (
        <div className='flex flex-col items-center w-[250px] fixed top-0 left-0 bottom-0 bg-[#E1F2FB]' >
            <div>
                <Logo className='w-[150px] mb-5' />
            </div>
            <ul>
                {sidebarList.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path} className={({ isActive }) => (isActive ? "bg-white flex items-center p-2 rounded-md my-2" : "flex items-center p-2 rounded-md my-2")}>
                            {item.icon}
                            <span className='text-[20px] ml-4'>{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar