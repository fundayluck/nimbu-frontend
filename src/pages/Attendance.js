import { Fragment, useEffect, useState } from 'react'
import useAuth from '../ahooks/useAuth'
import apis, { BaseUrl } from '../apis'
import { ImSpinner2 } from 'react-icons/im'
import moment from 'moment'
import { BiDotsVerticalRounded as Menu } from 'react-icons/bi'
import Button from '../components/common/Button'

const Attendance = () => {
    const { auth } = useAuth()
    const [data, setData] = useState([])
    const attend = data?.data
    const [loading, setLoading] = useState(false)
    const [errMessage, setErrMessage] = useState('')

    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            try {
                const response = await apis.get('api/attendance', {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                setData(response.data);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setErrMessage(error.response)
            }
        }
        fetch()
    }, [auth])

    let content

    if (loading) {
        content =
            <div className='fixed bg-white hover:shadow-xl cursor-pointer rounded-md  w-[69%]'>
                <div className='p-4 h-[73px] text-[#3A5372] tracking-wide flex justify-center text-[17px]'><ImSpinner2 className='animate-spin' /></div>
            </div>
    } else if (data.status) {
        content = attend.map((item, index) =>
            <Fragment key={index}>
                <div className='grid grid-cols-5 bg-white rounded-md mb-2' >
                    <div className='flex flex-col justify-center items-center mx-[20px]'>
                        < img
                            className='w-[50px] h-[50px] rounded-md border-2 border-[#3A5372]'
                            src={`${BaseUrl}/${item?.id_user.id_staff.photo}`}
                            alt='avatar'
                        />
                    </div>
                    <div className='flex justify-center flex-col items-center h-[73px] '>
                        <div className='text-[#3A5372] text-[17px] font-bold'>{item?.id_user.id_staff.name}</div>
                        <div className='text-[#3A5372] text-sm'>{item?.id_user.id_staff.id_division.name}</div>
                    </div>
                    <div className='flex justify-center flex-col items-center  h-[73px] text-[#3A5372] text-[17px]'>{moment(item?.date).format('ddd, DD/MM/YYYY')}</div>
                    <div className='flex justify-center flex-col items-center  h-[73px] text-[#3A5372] text-[17px]'>
                        <Button
                            className='bg-[#E6F3E5] px-4 text-[#4EAF51] rounded-md text-[16px]'
                            name={item.status}
                        />
                    </div>
                    <div className='flex justify-center flex-col items-center h-[73px] text-[#3A5372] text-[17px] '><Button className='px-2 flex justify-center rounded border-2 border-[#E1F2FB]' name='.png' /></div>
                    <div className='absolute mt-[55px] right-[120px] text-xs '>
                        {moment(item?.clock_in).format('LT')}
                    </div>
                </div>
            </Fragment>
        )
    } else {
        content =
            <div className='fixed bg-white hover:shadow-xl cursor-pointer rounded-md  w-[69%]'>
                <div className='p-4 h-[73px] text-[#3A5372] tracking-wide flex justify-center text-[17px]'>{errMessage.data}</div>
            </div>
    }

    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-[26px] font-bold text-[#3A5372]'>Employees Attendance</h1>
            </div>
            <div>
                <div className='flex justify-between mt-[33px] mr-24 ml-2 mb-4'>
                    <select
                        className='h-[40px] w-[224px] px-5 border border-[#C7C9D9] rounded'
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                    >
                        <option>All</option>
                    </select>

                </div>
                <div className='w-[92%]'>
                    <div className='grid grid-cols-5'>
                        <div className=''></div>
                        <div className='flex justify-center text-[22px] text-[#C2A3A1]'>Employee</div>
                        <div className='flex justify-center text-[22px] text-[#C2A3A1] '>Date</div>
                        <div className='flex justify-center text-[22px] text-[#C2A3A1] '>Status</div>
                        <div className='flex justify-center items-center text-[22px] text-[#C2A3A1] '><Menu /></div>
                    </div>
                </div>
                <div className='w-[92%]' >
                    {content}
                </div>
            </div >
        </div>
    )
}

export default Attendance