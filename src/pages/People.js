import { Fragment, useState } from 'react'
import Staff from '../components/people/Staff'
import Users from '../components/people/Users'

const People = () => {
    const [showStaff, setShowStaff] = useState(true)
    const [isShowStaff, setIsShowStaff] = useState(true)
    const [showUsers, setshowUsers] = useState(false)
    const [isShowUsers, setIsShowUsers] = useState(false)

    console.log(isShowStaff);

    const handleStaff = () => {
        !showStaff ?
            setShowStaff(true)
            :
            setShowStaff(false)
        setIsShowUsers(false)
        setIsShowStaff(true)
        setshowUsers(false)
    }
    const handleUsers = () => {
        !showUsers
            ?
            setshowUsers(true)
            :
            setshowUsers(false)

        setIsShowStaff(false)
        setIsShowUsers(true)
        setShowStaff(false)
    }

    return (
        <>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-[26px] font-bold text-[#3A5372]'>People</h1>
                    <div className='flex items-center mr-20 bg-gray-200 rounded'>
                        <button
                            className={`mx-2 ${isShowStaff ? 'underline' : ''}`}
                            onClick={handleStaff}
                            disabled={isShowStaff}
                        >
                            Staff
                        </button>
                        <button
                            className={`mx-2 ${isShowUsers ? 'underline' : ''}`}
                            onClick={handleUsers}
                            disabled={isShowUsers}
                        >
                            Users
                        </button>
                    </div>
                </div>
                <Fragment>
                    <Staff show={showStaff} />
                </Fragment>
                <Fragment>
                    <Users show={showUsers} />
                </Fragment>
            </div >
        </>
    )
}

export default People