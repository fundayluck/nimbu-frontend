

const StatusCard = ({ status }) => {
    let Content

    if (status === '0') {
        Content = 'Active'
    }
    if (status === '1') {
        Content = 'non Active'
    }

    return (
        <div className='bg-[#E6F3E5] flex justify-center rounded'>
            {Content}
        </div>
    )

}

export default StatusCard