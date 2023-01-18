import { useEffect, useRef, useState } from 'react'
import Photo from '../assets/images/photo.jpg'
import { NavLink, useNavigate } from 'react-router-dom';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi'
import { BaseUrl } from '../apis';
import useAuth from '../ahooks/useAuth';

const Headbar = ({ data }) => {
    const { setAuth } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        setIsOpen(false)
        setAuth({
            status: false,
            token: null
        })
        navigate('/')
    }

    const handleDropdown = () => {
        !isOpen ? setIsOpen(true) : setIsOpen(false)
    }

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
    }, [ref]);



    return (
        <nav className="bg-[#F1F9F9] border-gray-200 px-2  fixed w-full">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <button onClick={handleDropdown} ref={ref} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg " aria-controls="navbar-default" aria-expanded="false">
                    {data?.data.id_staff === undefined && data?.data.id_staff.photo === undefined ?
                        <>
                            < img
                                className='w-10 h-10 rounded outline-0'
                                src={Photo}
                                alt='avatar'
                            />
                            {
                                isOpen ?
                                    <BiChevronDown className='ease-out text-xl' />
                                    :
                                    <BiChevronLeft className='ease-out text-xl' />
                            }
                        </>
                        :
                        <>
                            < img
                                className='w-10 h-10 rounded outline-0'
                                src={
                                    data?.data.id_staff !== null
                                        ? `${BaseUrl}/${data?.data.id_staff.photo}`
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
                        <NavLink
                            to='/detail-user'
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2  text-sm text-gray-500 rounded-lg  hover:text-gray-700"
                        >
                            Account Setting
                        </NavLink>
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