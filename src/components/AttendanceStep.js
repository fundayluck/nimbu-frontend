import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ToFaceCam from './ToFaceCam'
import ToMap from './ToMap'
import Button from './common/Button'

const AttendanceStep = ({ closeModal }) => {
    const [stepOne, setStepOne] = useState(false)

    useEffect(() => {
        document.body.classList.add('overflow-hidden')

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])


    let renderContent;

    if (!stepOne) {
        renderContent = <ToMap />
    } else if (stepOne) {
        renderContent = <ToFaceCam />
    }

    const handleNext = () => {
        setStepOne(true)
    }

    const handleBack = () => {
        if (stepOne === false) {
            closeModal(false)
        }
        setStepOne(false)
    }

    return ReactDOM.createPortal(
        <div className='flex justify-center '>
            <div className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className={`fixed inset-40 top-10 p-2 rounded`}>
                <div className='flex justify-center items-center'>
                    {renderContent}
                </div>
                <div className='p-2 flex justify-center items-center'>
                    <Button onClick={handleBack} name='back' className='bg-blue-500 text-white py-2 px-4 mr-1 rounded' />
                    <Button onClick={handleNext} name='next' className='bg-blue-500 text-white py-2 px-4 mr-1 rounded' />
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    )
}

export default AttendanceStep