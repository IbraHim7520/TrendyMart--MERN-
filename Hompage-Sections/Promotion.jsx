import React from 'react';

const Promotion = () => {
    return (
        <div className='w-full  py-8'>
                    <div className="flex justify-center p-12 justify-items-center items-center    bg-pink-50 rounded-xl">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/promotional/image.png"
                alt="promotional" className="hidden h-3/4 object-cover md:block w-full max-w-lg rounded-l-xl" />
            <div className="relative flex items-center justify-center">
                
                <div className="max-md:py-20 px-6 md:px-10 text-center">
                    <h1 className="text-3xl font-bold">
                        <span className="text-blue-600">Don’t miss out</span> on our discounted products.
                    </h1>
                    <p className="mt-4 text-gray-500">
                        Don't miss out on amazing discounts—shop now before they're gone!
                    </p>
                    <button type='button' className="rounded-lg btn btn-secondary text-sm px-14 py-3 mt-4 text-white">
                        Check out the products
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Promotion;