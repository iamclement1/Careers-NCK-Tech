import React from 'react';
// import { Profile } from '../Assets/profile.png'

const Payment = () => {
    return (
    <div className='flex justify-between p-12 pt-0'>
        <div className='md:w-2/6 '>
            <h2 className='text-gray-500 font-semibold text-xl'>Payment Information</h2>
            <span className='text-gray-500 text-xs'>Choose your mode of payment</span>

            <div className='bg-gradient-to-r from-pink-500 to-purple-500 p-8  rounded-md'>
                <p className='text-xs text-white font-semibold'>CARD NUMBER</p>
                <span className='text-xs text-white pt-2'>4324543393821030</span>
                {/* <img src={ Profile } alt="image" /> */}
                <p className='text-xs text-white pt-12'>EXPIRATION DATE</p>
                <span className='text-xs text-white'>03/24</span>

                <div className='flex justify-between items-center pt-6'>
                    <div>
                        <h3 className='text-white font-xs font-semibold'>John Deo</h3>
                    </div>
                    <div className='rounded-full bg-yellow-500 w-12 h-12'>

                    </div>
                </div>
            </div>
            
        </div>
        <div>noew</div>
    </div>
    )
}

export default Payment;
