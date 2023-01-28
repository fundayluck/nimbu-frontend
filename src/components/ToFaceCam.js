import React, { useCallback, useRef, useState } from 'react'
import Webcam from "react-webcam";
import { AiOutlineCamera } from 'react-icons/ai'
import { MdReplay } from 'react-icons/md'

const ToFaceCam = () => {
    const [img, setImg] = useState(null);
    const webcamRef = useRef(null);

    const videoConstraints = {
        width: 420,
        height: 420,
        facingMode: "user",
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImg(imageSrc);
    }, [webcamRef]);
    return (
        <>
            {img === null ? (
                <div className='flex flex-row justify-center items-end mb-2'>
                    <Webcam
                        audio={false}
                        mirrored={true}
                        height={400}
                        width={400}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        className='rounded-full'
                    />
                    <div className='absolute text-black border border-black border-1 p-2 rounded-full cursor-pointer mb-2 hover:bg-gray-300' onClick={capture}>
                        <AiOutlineCamera className='text-4xl' />
                    </div>
                </div>
            ) : (
                <div className='flex flex-row justify-center items-end'>
                    <img src={img} alt="screenshot" className='rounded-full' />
                    <div
                        className='absolute text-black border border-gray-300 border-1 p-2 rounded-full cursor-pointer mb-2 hover:bg-gray-100 '
                        onClick={() => setImg(null)}
                    >
                        <MdReplay className='text-4xl text-black' />
                    </div>
                </div>
            )}
        </>
    )
}


export default ToFaceCam