import { useEffect, useState } from 'react'
import Photo from '../../assets/images/photo.jpg'
import apis, { BaseUrl } from '../../apis'
import { NavLink, useParams } from 'react-router-dom'
import useAuth from '../../ahooks/useAuth'
import Button from '../common/Button'
import moment from 'moment'
import { BiArrowBack } from 'react-icons/bi'

const DetailStaff = () => {
    const { auth } = useAuth()
    const { id } = useParams()
    const [user, setUser] = useState([])
    const Staff = user?.data
    console.log(Staff);

    useEffect(() => {
        const getUser = async () => {
            const response = await apis.get(`/api/staff/${id}`, {
                headers: {
                    authorization: `Bearer ${auth.token}`
                }
            })
            setUser(response.data)
        }
        getUser()
    }, [id, auth])

    return (
        <div>
            <div className='flex items-center mb-4'>
                <NavLink to='/people' className='hover:bg-gray-200 mr-4'>
                    <BiArrowBack className='text-[25px] font-bold' />
                </NavLink>
                <h1 className='text-[26px] font-bold text-[#3A5372]'>Employee Information</h1>
            </div>
            <div className='flex mb-2 mx-8'>
                <div className='mr-[134px]'>
                    {Staff ?
                        <img src={`${BaseUrl}/${Staff?.photo}`} alt='' className='ml-5 w-[150px] h-[150px] rounded' />
                        :
                        <img src={Photo} alt='' className='ml-5 w-[150px] h-[150px] rounded' />
                    }
                </div>
                <div className='flex flex-col'>
                    <Button name='Edit Employee' className='bg-[#F6E7E6] h-[40px] px-2 py-1 rounded-md tracking-wider text-[17px] text-[#3A5372] shadow hover:shadow-md mr-2 mb-2' />
                    <Button name='Edit Employee' className='bg-[#F6E7E6] h-[40px] px-2 py-1 rounded-md tracking-wider text-[17px] text-[#3A5372] shadow hover:shadow-md mr-2 mb-2' />
                </div>

            </div>
            <div className='grid grid-cols-2  ml-12 mr-[25%]'>
                <div className=' flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>NIP</label>
                    <div className='p-2 text-[20px] text-[#3A5372]'>{Staff?._id}</div>
                </div>
                <div className=' flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Name</label>
                    <div className='p-2 text-[20px] text-[#3A5372]'>{Staff?.name}</div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Position</label>
                    <div className='p-2 text-[20px] text-[#3A5372]'>{Staff?.id_division.name}</div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Phone</label>
                    <div className='p-2 text-[20px] text-[#3A5372]'>{Staff?.phone}</div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Area</label>
                    <div className='p-2 text-[20px] text-[#3A5372]'>{Staff?.area}</div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Address</label>
                    <div className='p-2 text-[20px] text-[#3A5372]'>{Staff?.address}</div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Date Birth</label>
                    <div className='p-2 text-[20px] text-[#3A5372]'>{moment(Staff?.birth).format('DD MMMM YYYY')}</div>
                </div>
                <div className='flex flex-col '>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Gender</label>
                    <div className='p-2 text-[20px] text-[#3A5372]'>{Staff?.gender}</div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>NIK</label>
                    <div className='p-2 text-[20px] text-[#3A5372]'>{Staff?.NIK}</div>
                </div>
            </div>
        </div >
    )
}

export default DetailStaff