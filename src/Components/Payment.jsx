import React from 'react';
import Button from './Button';
// import { Sim } from '../assets/sim.png'

const Payment = () => {
    return (
    <div className='flex justify-between p-12 pt-0 sm:flex'>
        <div className='md:w-2/6'>
            <h2 className='text-gray-500 font-semibold text-xl'>Payment Information</h2>
            <span className='text-gray-500 text-xs'>Choose your mode of payment</span>

            <div className='bg-gradient-to-r from-pink-500 to-purple-500 p-8  rounded-md'>
                <p className='text-xs text-white font-semibold'>CARD NUMBER</p>
                <span className='text-xs text-white pt-2'>4324543393821030</span>
                {/* <img src={ Sim } alt="image" /> */}
                <p className='text-xs text-white pt-12'>EXPIRATION DATE</p>
                <span className='text-xs text-white'>03/24</span>

                <div className='flex justify-between items-center pt-6'>
                    <div>
                        <h3 className='text-white font-xs font-semibold'>John Deo</h3>
                    </div>
                    <div className='flex'>
                    <div className='rounded-full bg-red-600 w-12 h-12 relative right-8'></div>
                    <div className='rounded-full bg-yellow-300 bg-opacity-80 w-12 h-12 absolute'></div>
                    </div>
                </div>
            </div>
            
        </div>
        <div>
            <div>Brand Logo</div>
            <div className='w-full pt-8 '>
                <form action="" className='text-black'>
                    <div className='flex mr-8 text-black'>
                        <div className='mr-3'>
                            <label class="block text-gray-400 text-xs mb-2" for="title">
                                Credit card number
                            </label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber text-sm" type="text" placeholder="4324 5433 9382 1030"></input>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-xs mb-2" for="title">
                                Expiration date
                            </label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber text-sm" type="text" placeholder="03/24"></input>
                        </div>
                    </div>
                    <div className='flex mr-8 text-black pt-8'>
                        <div className='mr-3'>
                            <label class="block text-gray-400 text-xs mb-2" for="title">
                                Security code
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber text-sm" type="text" placeholder="420"></input>
                        </div>
                        <div>
                            <label className="block text-gray-400 text-xs mb-2" for="title">
                                Postal code
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber text-sm" type="text" placeholder="10119"></input>
                        </div>
                    </div>
                    <div className='pt-6'>
                        <input classname="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-900 checked:border-blue-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label inline-block text-sm ml-4 text-gray-500" for="flexRadioDefault2">
                            Use this card for next time purchase
                        </label>
                    </div>
                </form>
                <Button />
            </div>
        </div>
    </div>
    
    )
}

export default Payment;
