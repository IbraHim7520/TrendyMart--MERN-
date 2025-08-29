import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({product}) => {
    return (
          <Link to={`/details/${product?._id}`} className='max-w-64'>
            <div className='group'>
                <img className='group-hover:hidden rounded-lg h-60 w-full object-cover' src={product?.Images[0]} alt="img1"  />
                <img className='hidden group-hover:block rounded-lg h-60 w-full  object-cover' src={product?.Images[1]} alt="img2"  />
            </div>
            <p className='text-sm mt-2'>{product?.ProductName}</p>
            <p className='text-xl font-medium '>৳{product?.OfferPrice}</p>
        </Link>
    );
};

export default ProductCard;