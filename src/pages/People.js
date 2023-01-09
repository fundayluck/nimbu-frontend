import { Fragment, useEffect, useState } from 'react'
import Button from '../components/common/Button'
import Photo from '../assets/images/photo.jpg'
import { HiDotsVertical } from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'
import useAuth from '../ahooks/useAuth'
import apis from '../apis'
import { ImSpinner2 } from 'react-icons/im'
import { Link } from 'react-router-dom'

const People = () => {
    const { auth } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [staffs, setStaffs] = useState([])
    const [errMessage, setErrMessage] = useState([])
    const Staffs = staffs?.data

    useEffect(() => {
        const getAllUser = async () => {
            try {
                setIsLoading(true)
                const response = await apis.get('/api/staff', {
                    headers: {
                        authorization: `Bearer ${auth.token}`
                    }
                })
                setStaffs(response.data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                setErrMessage(error.response.data)
            }
        }
        getAllUser()
    }, [auth])

    let content

    if (isLoading) {
        content = <tbody>
            <Fragment >
                <tr className='fixed bg-white hover:shadow-xl cursor-pointer rounded-md'>
                    <td className='p-4 h-[73px] text-[#3A5372] tracking-wide flex justify-center text-[17px] w-[660px]'>
                        <ImSpinner2 className='animate-spin text-[22px]' />
                    </td>
                </tr>
            </Fragment>
        </tbody>
    } else if
        (staffs.status === true) {
        content =
            Staffs ? Staffs.map((user, key) =>
                <tbody>
                    <Fragment key={key}>
                        < tr className='bg-white hover:shadow-xl cursor-pointer'  >
                            <td className='px-5 rounded-l-lg'>
                                < img
                                    className='w-10 h-10 rounded-md border-2 border-[#3A5372]'
                                    src={Photo}
                                    alt='avatar'
                                />
                            </td>
                            <td className='p-4 h-[73px] text-[#3A5372] tracking-wide text-[17px] font-bold'>{user.employee}</td>
                            <td className='p-4 h-[73px] text-[#3A5372] tracking-wide text-[17px]'>{user.position}</td>
                            <td className='p-4  h-[73px] text-[#3A5372] tracking-wide text-[17px]'>{user.phone}</td>
                            <td className='p-4   h-[73px]text-[#3A5372] tracking-wide text-[17px]'>{user.dom}</td>
                            <td className='text-[17px] rounded-r-lg'><HiDotsVertical /></td>
                        </tr>
                        <tr className='bg-[#F1F9F9] h-2'></tr>
                    </Fragment>
                </tbody>
            ) : []
    } else if (errMessage.status === false) {
        content = <tbody>
            <Fragment >
                <tr className='fixed bg-white hover:shadow-xl cursor-pointer rounded-md'>
                    <td className='p-4 h-[73px] text-[#3A5372] tracking-wide flex justify-center text-[17px] w-[660px]'>{errMessage.data}</td>
                </tr>
            </Fragment>
        </tbody>
    }

    return (
        <div>
            <h1 className='text-[26px] font-bold text-[#3A5372]'>People</h1>
            <div className='flex justify-between mt-[33px] mr-24 ml-2 mb-4'>
                <AiOutlineSearch className='fixed mt-2 ml-1 text-[#555770]' />
                <input className='h-[30px] px-6 py-1 border border-[#C7C9D9] rounded' placeholder='search of people..' />
                <Link to='add-employee'>
                    <Button
                        name='Add Employee'
                        className='bg-[#F6E7E6] px-2 py-1 rounded-md tracking-wider text-[17px] text-[#3A5372] shadow hover:shadow-md '
                    />
                </Link>
            </div>
            <table className='w-[92%]'>
                <thead>
                    <tr>
                        <td className=''></td>
                        <td className='text-[22px] text-[#C2A3A1] p-4'>Employee</td>
                        <td className='text-[22px] text-[#C2A3A1] p-4'>Position</td>
                        <td className='text-[22px] text-[#C2A3A1] p-4'>Phone </td>
                        <td className='text-[22px] text-[#C2A3A1] p-4'>Dom</td>
                    </tr>
                </thead>
                {content}
            </table>
        </div >
    )
}

export default People