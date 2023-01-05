import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='flex flex-col w-[250px] fixed top-0 left-0 bottom-0 bg-[#E1F2FB]' >
            <NavLink to='/dashboard'>
                Dashboard
            </NavLink>
            <NavLink to='/attendance'>
                Attendance
            </NavLink>
            <NavLink to='/people'>
                People
            </NavLink>
            <NavLink to='/request'>
                Request for
            </NavLink>
            <NavLink to='/access'>
                Access Request
            </NavLink>
            <NavLink to='/document'>
                Document
            </NavLink>
        </div>
    )
}

export default Sidebar