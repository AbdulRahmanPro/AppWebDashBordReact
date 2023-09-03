import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Message(propos) {
    const {but , setbutValue} = useState() 
    return (
        <div className='popup-overlay w-screen h-screen '>
            <div className='popup-content rounded-lg flex flex-col justify-center items-center max-w-lg h-80 bg-white'>
            <div className=' flex flex-col justify-center items-center gap-5'>
                <FontAwesomeIcon className='text-red-600 text-6xl' icon={faXmark} />
                <p className='text-red-600 text-2xl'>Failed</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-7'>
                <p className=' text-red-500'>
                The login process was not successful. It is possible that the email and password are incorrect                </p>
                <p>happy day</p>
            </div>
            <Link to="/home"><button className='w-52 p-2 rounded-lg bg-green-500'>Continue</button></Link>
        </div>
        </div>
    )
}