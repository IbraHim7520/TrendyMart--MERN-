import React from 'react';
import SellerForm from '../Forms/SellerForm';
import Unable from "../assets/unable.jpg"
import useAuth from '../CustomHooks/useAuth';
const BeaSeller = () => {
   const { UserRole} = useAuth()
 
    return (
        <div className='bg-base-200 flex flex-col justify-center items-center w-full min-h-screen'>
                <div className='container justify-items-center text-center mx-auto bg-white rounded-2xl shadow flex flex-col  items-center w-full px-5 md:px-12 lg:px-0 p-5'>
               {
                UserRole?.Role === "Admin" || UserRole?.Role == "Seller" ?
                <>
                    <img src={Unable} className='max-w-96'>
                </img>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-black text-center'>You're already a {UserRole?.Role}</h1>
                </>
                
                :
                <>
                <h1 className='text-3xl mb-2 md:text-4xl lg:text-5xl font-bold text-gray-700'>Seller Registration form</h1>
                <p className='text-sm lg:text-xl font-semibold text-gray-500'>Join our marketplace and grow your business. Fill out the form below to start selling your products to a wider audience</p>
                <SellerForm 
                ></SellerForm>
                </> 
               }
                </div>
     
        </div>
    );
};

export default BeaSeller;