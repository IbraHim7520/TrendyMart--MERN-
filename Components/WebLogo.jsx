import React from 'react';
import Logo from "../assets/logo.png"
import { Link } from 'react-router';
const WebLogo = () => {
    return (
        <Link to={"/"} className='w-fit h-fit flex justify-center items-center'>
            <img className='w-20' src={Logo}></img>
            <h1 className='font-bold text-2xl text-gray-800'>TrendyMart</h1>
        </Link>
    );
};

export default WebLogo;