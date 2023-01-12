import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


const Users = ({ show }) => {
    return (
        <div className={`${show ? '' : 'hidden'}`}>
            <div className='flex justify-between mt-[33px] mr-24 ml-2 mb-4'>
                <AiOutlineSearch className='fixed mt-2 ml-1 text-[#555770]' />
                <input className='h-[30px] px-6 py-1 border border-[#C7C9D9] rounded' placeholder='search of people..' />

            </div>
            <table className='w-[92%]'>
                <thead>
                    <tr>
                        <td className=''></td>
                        <td className='text-[22px] text-[#C2A3A1] p-4'>Employee</td>
                        <td className='text-[22px] text-[#C2A3A1] p-4'>Position</td>
                        <td className='text-[22px] text-[#C2A3A1] p-4'>Phone </td>
                        <td className='text-[22px] text-[#C2A3A1] p-4'>Area</td>
                    </tr>
                </thead>
                {/* {content} */}
            </table>
        </div >
    )
}

export default Users