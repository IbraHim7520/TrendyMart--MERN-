import React from 'react';
import EmptyCart from "../assets/empty_cart.jpg"
import { Link } from 'react-router';
const MyOrders = () => {
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

export default MyOrders;