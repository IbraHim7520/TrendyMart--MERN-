import React from 'react';
import noDataImage from "../assets/no_data.jpg"
const TopRatedProducts = () => {
    return (
        <div className='lg:container  px-5 lg:px-0 w-full mx-auto mt-24'>
            <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-semibold text-gray-700'>Top Sales Products</h1>
                        <p className='text-sm text-gray-700'>Top sales product in this month</p>
                    </div>
                    
            </div>
            <hr className='w-full text-sm mt-5 text-gray-400'></hr>

            {/* Shows card here */}
            <div className='min-h-80 flex flex-col justify-center items-center'>
                    <img className='w-52' src={noDataImage}></img>
                    <h1 className='text-xl font-semibold text-gray-700'>Failed to load Data</h1>
            </div>
        </div>
    );
};

export default TopRatedProducts;