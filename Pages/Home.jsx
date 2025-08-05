import React from 'react';
import Section1 from '../Hompage-Sections/Section1';
import TopRatedProducts from '../Hompage-Sections/TopRatedProducts';
import JustForYou from '../Hompage-Sections/JustForYou';
import Features1 from '../Hompage-Sections/Features1';
import BeSeller from '../Hompage-Sections/BeSeller';


const Home = () => {
    return (
        <div>
            <Section1></Section1>
            <TopRatedProducts></TopRatedProducts>
            <JustForYou></JustForYou>
             <BeSeller></BeSeller>
            <Features1></Features1>
           
        </div>
    );
};

export default Home;