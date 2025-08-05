import React from 'react';

const Product = () => {
    return (
        <div class="flex flex-col bg-white shadow-md w-72">
            <img class='w-72 h-48 object-cover'
                src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
                alt="image"></img>
            <div class="p-4 text-sm">
                <p class="text-slate-600">$ 29.00</p>
                <p class="text-slate-800 text-base font-medium my-1.5">Chris Jordan</p>
                <p class="text-slate-500">Looks amazing out of the box. I barely had to customize anything.</p>
                <div class="grid grid-cols-2 gap-2 mt-3">
                    <button class="bg-slate-100 text-slate-600 py-2">
                        Add to cart
                    </button>
                    <button class="bg-slate-800 text-white py-2">
                        Buy now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;