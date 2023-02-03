import Button from '../components/common/Button'
import Photo from '../assets/images/photo.jpg'
import Moment from 'react-moment'
import { useGeolocated } from 'react-geolocated'
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AttendanceStep from '../components/AttendanceStep'

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false)
    const { coords, isGeolocationAvailable, isGeolocationEnabled, positionError } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    const _toMap = () => {
        setShowModal(true)
    }

    const checkButton = () => {
        if (!isGeolocationAvailable) return <div>Your browser does not support Geolocation</div>;
        if (!isGeolocationEnabled) return <div>Geolocation is not enabled</div>;
        if (positionError) return <div>Something went wrong</div>;
        if (coords) return <Button
            name='Clock In'
            className='bg-[#64B566] text-white px-5 py-1 rounded'
            onClick={_toMap} />;
        return 'Error';
    };

    const map = <AttendanceStep closeModal={setShowModal} />

    return (
        <>
            <div>
                {showModal && map}
            </div>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-[26px] font-bold text-[#3A5372]'>Dashboard</h1>
                </div>
                <div className='bg-white rounded-md mb-2 w-[92%] shadow-md' >
                    <div className='flex justify-between mx-10'>

                        <div className='flex flex-col justify-center items-center '>
                            < img
                                className='w-[50px] h-[50px] rounded-md border-2 border-[#3A5372]'
                                src={Photo}
                                alt='avatar'
                            />
                        </div>
                        <div className='flex justify-center flex-col items-center h-[73px] text-[#3A5372] text-[17px] font-bold col-span-1'>
                            Afan Dayu Laksono
                        </div>
                        <div className='flex justify-center flex-col items-center h-[73px] text-[#3A5372] text-[17px]'>
                            <Moment interval={1000} format='dddd, DD-MM-YYYY' />
                        </div>
                        <div className='flex justify-center flex-col items-center h-[73px] text-[#3A5372] text-[17px]'>
                            <Moment interval={1000} format='hh:mm:ss' />
                        </div>
                        <div className='flex justify-center flex-col items-center h-[73px]text-[#3A5372] text-[17px]'>
                            {checkButton()}
                        </div>
                    </div>
                </div>

                <h1 className='ml-6 text-[26px] font-bold text-[#3A5372] mt-10 mb-2'>Attendance History</h1>
                <div className='ml-5'>
                    <div className='overflow-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-[#F1F9F9] bg-white rounded-md mb-2 w-[90%] h-[340px] px-10 py-5 shadow-md' >
                        <p className='text-[18px] text-[#3A5372] py-2 ml-[22px]'>
                            <strong>Afan Dayu Laksono</strong> had clocked out on Wednesday, 04 January 2023 at 17.20.00
                        </p>
                        <p className='text-[18px] text-[#3A5372] py-2 ml-[22px]'>
                            <strong>Afan Dayu Laksono</strong> had clocked in on Wednesday, 04 January 2023 at 07.14.00
                        </p>
                        <p className='text-[18px] text-[#3A5372] py-2 ml-[22px]'>
                            <strong>Afan Dayu Laksono</strong> had clocked out on Tuesday, 03 January 2023 at 17.32.00
                        </p>
                        <p className='text-[18px] text-[#3A5372] py-2 ml-[22px]'>
                            <strong>Afan Dayu Laksono</strong> had clocked in on Tuesday, 04 January 2023 at 07.41.00
                        </p>
                        <p className='text-[18px] text-[#3A5372] py-2 ml-[22px]'>
                            <strong>Afan Dayu Laksono</strong> had clocked in on Tuesday, 04 January 2023 at 07.41.00
                        </p>
                        <p className='text-[18px] text-[#3A5372] py-2 ml-[22px]'>
                            <strong>Afan Dayu Laksono</strong> had clocked in on Tuesday, 04 January 2023 at 07.41.00
                        </p>
                        <p className='text-[18px] text-[#3A5372] py-2 ml-[22px]'>
                            <strong>Afan Dayu Laksono</strong> had clocked in on Tuesday, 04 January 2023 at 07.41.00
                        </p>
                        <p className='text-[18px] text-[#3A5372] py-2 ml-[22px]'>
                            <strong>Afan Dayu Laksono</strong> had clocked in on Tuesday, 04 January 2023 at 07.41.00
                        </p>
                        <p className='text-[18px] text-[#3A5372] py-2 ml-[22px]'>
                            <strong>Afan Dayu Laksono</strong> had clocked in on Tuesday, 04 January 2023 at 07.41.00
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Dashboard