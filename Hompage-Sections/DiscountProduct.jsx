import React from 'react';

const DiscountProduct = () => {
    return (
         <div className='w-full  px-3 md:px-4 lg:px-6 xl:px-10 2xl:px-14 3xl:px-20'>
             <div className='w-full space-y-2 py-5 md:py-8 lg:py-16 '>
                <h1  className='text-center font-bold text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl' >Special Discount Products</h1>
                <p className='text-center text-medium text-gray-600 md:text-lg lg:text-xl 2xl:text-xl'>Enjoy premium styles at unbeatable prices. Fashion that fits your budget.</p>
                
             </div>

             <div className='w-full min-h-72 flex flex-col justify-center items-center'>
                <p>No product added yet!</p>
             </div>
        </div>
    );
};

export default DiscountProduct;