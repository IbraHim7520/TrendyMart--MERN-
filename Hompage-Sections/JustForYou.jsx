import React from 'react';
import noDataImage from "../assets/no_data.jpg"
import { IoIosArrowForward } from "react-icons/io";
const JustForYou = () => {
    return (
               <div className='lg:container  px-5 lg:px-0 w-full mx-auto mt-24'>
                   <div className='flex justify-between items-center'>
                           <div>
                               <h1 className='text-2xl font-semibold text-gray-700'>Just For You</h1>
                               <p className='text-sm text-gray-700'>Some products that you may like</p>
                           </div>
                           <div>
                            <button className='btn bg-orange-500 text-white'>
                            View More
                            <IoIosArrowForward size={18}></IoIosArrowForward>
                            </button>
                           </div>
                   </div>
                   <hr className='w-full text-sm mt-5 text-gray-400'></hr>
       
                   {/* Shows card here */}
                   <div className='min-h-80 flex flex-col justify-center items-center'>
                           <img className='w-52' src={noDataImage}></img>
                           <h1 className='text-xl font-semibold text-gray-700'>Failed to load Data</h1>
                   </div>
               </div>
    );
};

export default JustForYou;