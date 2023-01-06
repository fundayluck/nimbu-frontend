import React, { useState } from 'react'
import Photo from '../assets/images/photo.jpg'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi'
import { logout } from '../store/slices/AuthSlice';

const Headbar = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        setIsOpen(false)
        dispatch(logout())
        navigate('/')
    }

    const handleDropdown = () => {
        !isOpen ? setIsOpen(true) : setIsOpen(false)
    }

    return (
        <nav className="bg-[#F1F9F9] border-gray-200 px-2  fixed w-full shadow">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <button onClick={handleDropdown} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg " aria-controls="navbar-default" aria-expanded="false">
                    {data?.data.id_staff === undefined && data?.data.id_staff.photo === undefined ?
                        < img
                            className='w-10 h-10 rounded outline-0'
                            src={Photo}
                            alt='avatar'
                        />
                        :
                        <>
                            < img
                                className='w-10 h-10 rounded outline-0'
                                src={
                                    data?.data.id_staff !== null
                                        ? `http://localhost:5000/${data?.data.id_staff.photo}`
                                        : Photo
                                }
                                alt='avatar'
                            />
                            {
                                isOpen ?
                                    <BiChevronDown className='ease-out text-xl' />
                                    :
                                    <BiChevronLeft className='ease-out text-xl' />
                            }

                        </>
                    }
                </button>
                <div className={`absolute transition duration-200 ease-out right-0 z-10 w-30 mt-[140px] mr-4 origin-top-right bg-[#C2A3A1] border border-gray-100 rounded-b-xl rounded-l-xl shadow-lg ${isOpen ? 'scale-1' : 'scale-0'}`}>
                    <div className="p-2">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2  text-sm text-gray-500 rounded-lg  hover:text-gray-700"
                        >
                            Account Setting
                        </button>
                        <button
                            onClick={handleLogout}
                            className="block px-4 py-2  text-sm text-gray-500 rounded-lg hover:text-gray-700"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Headbar