import React from 'react';

const MyWishlist = () => {
    return (
        <div>
          <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                <img className='max-w-96' src={EmptyCart}></img>
                <p className='text-xl font-semibold text-gray-700'>No Product Added Yet!</p>
                <Link to={"/all-products"} className='btn bg-orange-500 text-white'>Browse Products</Link>
            </div>
        </div>
    );
};

export default MyWishlist;