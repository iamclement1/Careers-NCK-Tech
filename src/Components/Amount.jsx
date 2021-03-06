import React from 'react';

const Amount = () => {
    return (
        <div className='p-12 pt-0 md:w-full font-BaiJamjuree'>
            <div>
                <hr />
            </div>
            <div className='flex justify-between'>
                <div className='font-semibold'>
                    <h2>Subtotal</h2>
                </div>
                <div className='font-medium'>
                    <p>&#8358;2,497.00</p>
                </div>
            </div>
            <div className='flex justify-between pt-4'>
                <div className='font-semibold'>
                    <h2>Estimated TAX</h2>
                </div>
                <div className='font-medium'>
                    <p>&#8358;119.64</p>
                </div>
            </div>
            <div className='flex justify-between pt-4'>
                <div className='font-semibold'>
                    <h2>Promotional Code: <span className='text-gray-400'>Z4KXLM9A</span></h2>
                    
                </div>
                <div className='font-medium'>
                    <p>&#8358;119.64</p>
                </div>
            </div>
            <div className='pt-10'>
                <hr />
            </div>
            <div className='flex flex-wrap flex-col-reverse md:flex-row md:justify-between lg:justify-between md:items-center pt-4'>
                <div className='font-semibold pt-4'>
                    <button class="bg-blue-500 w-full hover:bg-blue-500 text-white font-bold py-3 lg:px-14 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                        Complete Payment
                    </button>
                </div>
                <div className='font-extrabold text-2xl'>
                    <p>Total &#8358;2556.64</p>
                </div>
            </div>
        </div>
    )
};

export default Amount;
