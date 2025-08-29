import React from 'react';

const ProductCard = ({product}) => {
    return (
          <div className='max-w-64'>
            <div className='group'>
                <img className='group-hover:hidden rounded-lg h-60 w-full object-cover' src={product?.Images[0]} alt="img1"  />
                <img className='hidden group-hover:block rounded-lg h-60 w-full  object-cover' src={product?.Images[1]} alt="img2"  />
            </div>
            <p className='text-sm mt-2'>{product?.ProductName}</p>
            <p className='text-xl'>{product?.OfferPrice}</p>
        </div>
    );
};

export default ProductCard;