import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import ProductCard from '../Cards/ProductCard';

const AllProducts = () => {
    const { data, isError, isPending } = useQuery({
        queryKey: ['producs'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/all-products`)
            return response?.data
        }
    })

    if (isError || !data || data.length === 0) {
        return (
            <div className="w-full flex justify-center items-center">
                <p>No Products</p>
            </div>
        );
    }
    if (isPending) {
        return (
            <div className="w-full flex flex-col justify-center items-center">
                <span className="loading loading-spinner"></span>
                <p>Loading..</p>
            </div>
        );
    }

    return (
        <div className="w-full mt-5">
            <div className='w-full flex justify-start items-center'>
                
            </div>
            <div className="w-full space-y-3 grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6">
                {data.map((product) => (
                    <ProductCard product={product} key={product?._id} />
                ))}
            </div>
        </div>
    );
};

export default AllProducts;