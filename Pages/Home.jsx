import React from 'react';
import HomeBanner from '../Hompage-Sections/HomeBanner';
import HomeGrids from '../Hompage-Sections/HomeGrids';
import PopuProducts from '../Hompage-Sections/PopuProducts';
import Promotion from '../Hompage-Sections/Promotion';
import DiscountProduct from '../Hompage-Sections/DiscountProduct';
import Features from '../Hompage-Sections/Features';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeGrids />
            <PopuProducts />
            <Promotion />
            <DiscountProduct />
            <Features />
        </div>
    );
};

export default Home;