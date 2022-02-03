import React from 'react';

const Amount = () => {
    return (
        <div className='p-12 pt-0'>
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
                    <p>&#8358;2,497.00</p>
                </div>
            </div>
        </div>
    )
};

export default Amount;
