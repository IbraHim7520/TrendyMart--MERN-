import React, { useEffect, useState } from 'react';
import HomeBanner from '../Hompage-Sections/HomeBanner';
import HomeGrids from '../Hompage-Sections/HomeGrids';
import PopuProducts from '../Hompage-Sections/PopuProducts';
import Promotion from '../Hompage-Sections/Promotion';
import DiscountProduct from '../Hompage-Sections/DiscountProduct';
import Features from '../Hompage-Sections/Features';
import axios from 'axios';

const Home = () => {
    const [popularProduct , setpopularProduct]= useState([])
    
    useEffect( ()=>{
        const getPopularProducts = async() =>{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/popular-products`)
            if(response?.data){
                setpopularProduct(response?.data)
            }else{
                setpopularProduct([])
            }
        }
        getPopularProducts()
    }, [] )
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeGrids />
            <PopuProducts 
            popularProduct={popularProduct}
            />
            <Promotion />
            <DiscountProduct />
            <Features />
        </div>
    );
};

export default Home;