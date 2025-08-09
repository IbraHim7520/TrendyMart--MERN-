import React from 'react';
import SellerForm from '../Forms/SellerForm';
import ZeroComission from "../assets/zero_comission.png"
import Support from "../assets/support.png"
import NationReach from "../assets/nation_reach.png"
import Free_Delivery from "../assets/free_delivery.png"
import MarketingTools from "../assets/marketing_tools.png"
import TimelyPayment from "../assets/timely_payments.png"
import Unable from "../assets/unable.jpg"
import useAuth from '../CustomHooks/useAuth';
import { useForm } from 'react-hook-form';
const BeaSeller = () => {
   const { UserRole} = useAuth()
   const {handleSubmit , register, reset}= useForm()
    return (
        <div className='bg-base-200 flex flex-col justify-center items-center w-full min-h-screen'>
                <div className='container justify-items-center text-center mx-auto bg-white rounded-2xl shadow flex flex-col  items-center w-full px-5 md:px-12 lg:px-0 p-5'>
               {
                UserRole?.Role === "Admin" || UserRole?.Role === "Seller" ?
                <>
                    <img src={Unable} className='max-w-96'>
                </img>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-black text-center'>You're already a {UserRole?.Role}</h1>
                </>
                
                :
                <>
                <h1 className='text-3xl mb-2 md:text-4xl lg:text-5xl font-bold text-gray-700'>Seller Registration form</h1>
                <p className='text-sm lg:text-xl font-semibold text-gray-500'>Join our marketplace and grow your business. Fill out the form below to start selling your products to a wider audience</p>
                <SellerForm></SellerForm>
                </> 
               }
                </div>

          <div className='container p-5 mt-24 mx-auto flex flex-col'>
          <h1 className='text-3xl mb-5 md:text-4xl text-center lg:text-5xl font-bold text-black'>New Seller Benefits</h1>
            <div className='grid space-y-8 grid-cols-2 lg:grid-cols-3'>
                <div className='text-center flex flex-col items-center justify-center'>
                <img className='w-24' src={ZeroComission}></img>
                    <h1 className='text-md font-bold text-black md:text-lg lg:text-xl'>0% Commision</h1>
                    <p className='text-sm lg:text-md text-gray-400 font-semibold'>0% Platform Commision fee for 90 Days</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                <img className='w-24' src={MarketingTools}></img>
                    <h1 className='text-md font-bold text-black md:text-lg lg:text-xl'>Marketing Tools</h1>
                    <p className='text-sm lg:text-md text-gray-400 font-semibold'>Create Product Ads to increase visibility in search results</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                <img className='w-24' src={NationReach}></img>
                    <h1 className='text-md font-bold text-black md:text-lg lg:text-xl'>Nationwide Reach</h1>
                    <p className='text-sm lg:text-md text-gray-400 font-semibold'>Deliver your product anywhere in the country</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                <img className='w-24' src={TimelyPayment}></img>
                    <h1 className='text-md font-bold text-black md:text-lg lg:text-xl'>Timely Payments</h1>
                    <p className='text-sm lg:text-md text-gray-400 font-semibold'>Weekly payment cycles</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                <img className='w-24' src={Free_Delivery}></img>
                    <h1 className='text-md font-bold text-black md:text-lg lg:text-xl'>Free Shipping</h1>
                    <p className='text-sm lg:text-md text-gray-400 font-semibold'>Offer Free Shipping via programs like FSM</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                <img className='w-24' src={Support}></img>
                    <h1 className='text-md font-bold text-black md:text-lg lg:text-xl'>Dedicated Support & Training</h1>
                    <p className='text-sm lg:text-md text-gray-400 font-semibold'>Incubation specialist support for 90 days</p>
                </div>
            </div>
          </div>      
        </div>
    );
};

export default BeaSeller;