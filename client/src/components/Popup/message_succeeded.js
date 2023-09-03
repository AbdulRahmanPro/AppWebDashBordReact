import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Message(propos) {
    const {but , setbutValue} = useState() 
    return (
        <div className='popup-overlay w-screen h-screen '>
            <div className='popup-content rounded-lg flex flex-col justify-center items-center max-w-lg h-80 bg-white'>
            <div className=' flex flex-col justify-center items-center gap-5'>
                <FontAwesomeIcon className='text-green-600   text-6xl' icon={faCheck} />
                <p className='text-green-600 text-2xl'>Success</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-7'>
                <p className=' text-gray-500'>
                    Login successful. Thank you for using our platform. We will send you details by e-mail
                </p>
                <p>Check your email</p>

            </div>
            <Link to="/home"><button className='  w-52 p-2 rounded-lg bg-green-500'>Continue</button></Link>
        </div>
        </div>
    )
}