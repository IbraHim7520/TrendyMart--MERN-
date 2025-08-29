import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ProductCard from '../Cards/ProductCard';
import { Link } from 'react-router';

const PopuProducts = ({popularProduct}) => {   
    return (
        <div className='w-full  px-3 md:px-4 lg:px-6 xl:px-10 2xl:px-14 3xl:px-20'>
             <div className='w-full space-y-2 py-5 md:py-8 lg:py-16 '>
                <h1  className='text-center font-bold text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl' >Popular Products</h1>
                <p className='text-center text-medium text-gray-600 md:text-lg lg:text-xl 2xl:text-xl'>Handpicked favorites loved by our customers — explore the styles everyone’s talking about.</p>
             </div>

            <div className='w-full'>
                {
                    popularProduct.length == 0 ?
            <div className='w-full min-h-72 flex flex-col justify-center items-center'>
                <p>No product added yet!</p>
             </div>
                    :
                 <div className='w-full flex flex-col  place-items-end'>
                    <Link to={"/all-products"} className='btn w-fit btn-sm btn-secondary'>View all</Link>
                           <div className='w-full grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6'>
                            {
                                popularProduct.map( (product)=> <ProductCard key={product._id} product={product}></ProductCard> )
                            }
                    </div>
                 </div>

                }
            </div>
        </div>
    );
};


export default PopuProducts;