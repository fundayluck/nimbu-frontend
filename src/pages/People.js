import { Fragment } from 'react'
import Button from '../components/common/Button'
import Photo from '../assets/images/photo.jpg'
import { HiDotsVertical } from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'

const person = [
    {
        employee: 'test 1',
        position: 'software Engineer',
        phone: '081380036281',
        dom: 'bekasi'
    },
    {
        employee: 'test 2',
        position: 'software Engineer',
        phone: '081380036281',
        dom: 'bekasi'
    }
]

const People = () => {
    return (
        <div>
            <h1 className='text-[26px] font-bold text-[#3A5372]'>People</h1>
            <div className='flex justify-between mt-[33px] mr-20 ml-2 mb-4'>
                <AiOutlineSearch className='fixed mt-2 ml-1 text-[#555770]' />
                <input className='h-[30px] px-6 py-1 border border-[#C7C9D9] rounded' placeholder='search of people..' />
                <Button
                    name='Add Employee'
                    className='bg-[#F6E7E6] px-2 py-1 rounded-md tracking-wider text-[17px] text-[#3A5372] shadow '
                />
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
                <tbody>
                    {person.map((user, key) => (
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
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default People