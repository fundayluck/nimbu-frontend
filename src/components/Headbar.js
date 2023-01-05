import React from 'react'
import Photo from '../assets/images/photo.jpg'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/slices/AuthSlice';

const Headbar = ({ data }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const photo = data?.data.id_staff.photo

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <nav className="bg-[#F1F9F9] border-gray-200 px-2  fixed w-full shadow">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <button onClick={handleLogout} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg " aria-controls="navbar-default" aria-expanded="false">
                    {photo === undefined ? '' :
                        < img
                            className='w-10 h-10 rounded outline-0'
                            src={photo !== null ? `http://localhost:5000/${photo}` : Photo}
                            alt={photo}
                        />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Headbar