import React from 'react';

const HomeBanner = () => {
    return (
        <section
            className="flex flex-col items-center py-40 text-center text-sm text-white max-md:px-2 bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.6)), url('https://i.ibb.co.com/JF3zMSy9/cos-s2.webp')`
            }}
        >
            <h1 class="font-bold text-[45px]/[52px] md:text-6xl/[65px] mt-6 max-w-4xl">
                Elevate Your Style With the Latest Men’s & Women’s Trends
            </h1>
            <p class="font-medium text-sm lg:text-lg mt-2 max-w-xl">From timeless classics to bold new arrivals, discover fashion that matches your lifestyle.</p>
            <p class="font-medium text-sm lg:text-lg mt-3 md:mt-7 max-w-xl">
                Designed for every occasion, crafted for every personality.
            </p>
            <button className='btn mt-12 px-12 md:px-16 lg:px-24 xl:px-32 rounded-full btn-secondary'>Explore</button>
        
        </section>
    );
};

export default HomeBanner;