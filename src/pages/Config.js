import { useEffect, useState } from 'react'
import apis from '../apis'
import useAuth from '../ahooks/useAuth'

const Config = () => {
    const { auth } = useAuth()
    const [data, setData] = useState({
        start: "",
        end: "",
        late: ""
    })


    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await apis.get('api/config', {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                setData({
                    start: response.data.data[0].start_working,
                    end: response.data.data[0].finish_working,
                    late: response.data.data[0].late
                })

            } catch (error) {
                console.log(error);
            }
        }
        fetch()
    }, [auth])

    return (
        <div>
            <div className='flex justify-between mb-4'>
                <h1 className='text-[26px] font-bold text-[#3A5372]'>Configuration</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Start Time</label>
                    <input
                        className='bg-[#F1F9F9] border-b-2 w-[320px] px-2 my-2 outline-0 leading-loose'
                        placeholder='Start Time'
                        value={data?.start}
                        onChange={(e) => setData({ start: e.target.value })}
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>End Time</label>
                    <input
                        className='bg-[#F1F9F9] border-b-2 w-[320px] px-2 my-2 outline-0 leading-loose'
                        placeholder='End Time'
                        value={data?.end}
                        onChange={(e) => setData({ end: e.target.value })}
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='text-[18px] text-[#3A5372] font-bold pl-1'>Late Time</label>
                    <input
                        className='bg-[#F1F9F9] border-b-2 w-[320px] px-2 my-2 outline-0 leading-loose'
                        placeholder='Late Time'
                        value={data?.late}
                        onChange={(e) => setData({ late: e.target.value })}
                    />
                </div>
            </div>
        </div>
    )
}

export default Config