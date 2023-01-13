

const StatusCard = ({ status }) => {
    console.log(status);
    let Content

    if (status === 1) {
        Content = 'active'
    }
    if (status === 0) {
        Content = 'non Active'
    }

    return (
        <div className='bg-[#E6F3E5] flex justify-center rounded px-2'>
            {Content}
        </div>
    )

}

export default StatusCard