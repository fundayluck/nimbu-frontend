import React from 'react'
import Photo from '../../assets/images/photo.jpg'

const DetailStaff = () => {
    return (
        <div>
            <h1 className='text-[26px] font-bold text-[#3A5372]'>Detail Employee</h1>
            <div className='grid grid-rows-2 grid-flow-col'>
                <div className='row-span-2'>
                    <img src={Photo} alt='' className='ml-5 w-[150px] h-[150px] rounded' />
                </div>
                <div className='col-span-2 flex flex-col gap-1'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>NIP</label>
                    <input
                        className='bg-[#F1F9F9] border-b-2 w-[320px] px-2 my-2 outline-0 leading-loose'
                        placeholder='NIP'
                        required
                    // value={nip}
                    // onChange={(e) => setNip(e.target.value)}
                    />
                </div>
                <div className='col-span-2 flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Name</label>
                    <input
                        className='bg-[#F1F9F9] border-b-2 w-[320px] px-2 my-2 outline-0 leading-loose'
                        placeholder='Name'
                        required
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className='grid grid-rows-4 grid-flow-col'>
                <div className='row-span-1 flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Position</label>
                    <select
                        // value={position} onChange={(e) =>
                        //     setPosition(e.target.value)}
                        className="w-[244px] p-2 border border-[#C7C9D9] rounded">
                        <option>Choose the Position</option>
                        <option value="63aa9cb408bb3db4b26d2a11">Sales Respresentative</option>
                        <option value="63aa9cdd08bb3db4b26d2a12">Human Resources</option>
                        <option value="63aa9d1308bb3db4b26d2a13">Accounting</option>
                        <option value="63be60dd64e1a662c1eaa3c7">Software Engineer</option>
                    </select>
                </div>
                <div className='row-span-1 flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Phone</label>
                    <input
                        required
                        type='tel'
                        className='bg-[#F1F9F9] border-b-2 w-[320px] px-2 my-2 outline-0 leading-loose'
                        placeholder='ex: 08xxxxxxxxx'
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className='row-span-1 flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Area</label>
                    <input
                        required
                        type='text'
                        className='bg-[#F1F9F9] border-b-2 w-[320px] px-2 my-2 outline-0 leading-loose'
                        placeholder='Area'
                    // value={area}
                    // onChange={(e) => setArea(e.target.value)}
                    />
                </div>
                <div className='col-span-1 flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Address</label>
                    <input
                        className='bg-[#F1F9F9] border-b-2 w-[320px] px-2 my-2 outline-0 leading-loose'
                        placeholder='Address'
                        required
                    // value={address}
                    // onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className='col-span-1 flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Birth Date</label>
                    <input type='date'
                        // value={birth}
                        // onChange={(e) => setBirth(e.target.value)}
                        className="w-[244px] p-1 border border-[#C7C9D9] rounded"
                    />
                </div>
                <div className='row-span-1 flex flex-col mb-1'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Gender</label>
                    <div className="flex items-center mb-4">
                        <input
                            type="radio"
                            // checked={gender === 'Laki-laki'}
                            // onChange={handleMale}
                            className="w-4 h-4 text-[#3A5372] bg-gray-100 border-gray-300"
                        />
                        <label className="ml-2 text-sm font-medium text-[#3A5372] ">male</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            // checked={gender === 'Perempuan'}
                            // onChange={handleFemale}
                            className="w-4 h-4 text-[#3A5372] bg-gray-100 border-gray-300"
                        />
                        <label className="ml-2 text-sm font-medium text-[#3A5372] ">female</label>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>NIK</label>
                    <input
                        className='bg-[#F1F9F9] border-b-2 w-[320px] px-2 my-2 outline-0 leading-loose'
                        placeholder='NIK'
                        required
                    // value={NIK}
                    // onChange={(e) => setNIK(e.target.value)}
                    />
                </div>

            </div>
        </div >
    )
}

export default DetailStaff