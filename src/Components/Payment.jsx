import React from 'react';
import Button from './Button';
import  Sim  from '../assets/sim.png'
import Paypal from '../assets/Paypal.png'
import Visa from '../assets/visa.png';
import Discover from '../assets/Discover.png'

const Payment = () => {
    return (
        <div className='flex flex-col lg:flex-row px-12 pt-6 font-BaiJamjuree lg:justify-between '>
            <div className='lg:w-2/5 md:items-center'>
                <h2 className='text-gray-500 font-semibold text-xl'>Payment Information</h2>
                <span className='text-gray-500 text-xs'>Choose your mode of payment</span>
                <div className='bg-gradient-to-r from-pink-500 to-purple-500 p-8  rounded-md'>
                    <p className='text-xs text-white font-semibold'>CARD NUMBER</p>
                    <span className='text-xs text-white pt-2'>4324543393821030</span>
                    <img src={Sim} alt="image" className='w-12 pt-2' />
                    <p className='text-xs text-white pt-3'>EXPIRATION DATE</p>
                    <span className='text-xs text-white'>03/24</span>
                    
                    <div className='flex justify-between items-center pt-2'>
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
            
            <div className='lg:w3/5'>
                <div className='flex justify-between md:items-center sm:min-w-full'>
            <div></div>
            <div className='flex items-center pr-8 mr-4 space-x-7 sm:-ml-16'>
                <div className='flex items-center space-x-3 mr-6'>
                <img className='w-8' src={Visa} alt="Visa-logo" />
                <img className='w-12 h-2' src={Discover} alt="Discover-logo" />
                </div>
              <div className='flex items-center space-x-2'>
                <div className='w-4 h-4 rounded-full bg-gray-200'></div>
                <img className='w-14 ' src={Paypal} alt=" Paypal-logo" />
              </div>
            </div>
          </div>
          <div className='w-full pt-8'>
            <form className='text-black'>
              <div className='flex flex-col lg:flex-row text-black lg:space-x-4'>
                <div className='w-full'>
                  <label className="block text-gray-400 text-xs mb-2" for="title">
                    Credit card number
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber text-sm" type="text" placeholder="4324 5433 9382 1030"></input>
                </div>
                <div className='w-full mt-4 lg:mt-0'>
                  <label className="block text-gray-400 text-xs mb-2" for="title">
                    Expiration date
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber text-sm" type="text" placeholder="03/24"></input>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row text-black lg:space-x-4 mt-4'>
                <div className='w-full'>
                  <label className="block text-gray-400 text-xs mb-2" for="title">
                    Security code
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber text-sm" type="text" placeholder="420"></input>
                </div>
                <div className='w-full mt-4 lg:mt-0'>
                  <label className="block text-gray-400 text-xs mb-2" for="title">
                    Postal code
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber text-sm" type="text" placeholder="10119"></input>
                </div>
              </div>
              <div className='pt-6 flex flex-row'>
                <input classname="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-900 checked:border-blue-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label inline-block text-sm ml-4 text-gray-500" for="flexRadioDefault2">
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
