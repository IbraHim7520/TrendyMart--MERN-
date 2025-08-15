import React from 'react';
import banner1 from "../assets/banner1.jpeg"
import banner2 from "../assets/banner2.webp"
import { Link } from 'react-router';
import { IoIosArrowForward } from "react-icons/io";
import bwatch from "../assets/b-watch.png"
import bgadgets from "../assets/b-gadgets.png"


const Section1 = () => {
    return (
        <div>
            <div className='w-full flex flex-col p-2 '>

                <div className="flex lg:container h-fit mx-auto gap-1 w-full">
                    <div className="w-2/7  rounded-box  hidden lg:flex flex-col  grow place-items-center">
                        <Link className='w-full hover:bg-base-300 text-start flex justify-between items-center text-lg p-2 bg-base-200 border-t-2  border-gray-400 '>
                            <p>Food</p>
                            <IoIosArrowForward></IoIosArrowForward>
                        </Link>
                        <Link className='w-full hover:bg-base-300 text-start flex justify-between items-center text-lg p-2 bg-base-200 border-t-2  border-gray-400 '>
                            <p>Home appliens</p>
                            <IoIosArrowForward></IoIosArrowForward>
                        </Link>
                        <Link className='w-full hover:bg-base-300 text-start flex justify-between items-center text-lg p-2 bg-base-200 border-t-2  border-gray-400 '>
                            <p>Skin Care</p>
                            <IoIosArrowForward></IoIosArrowForward>
                        </Link>
                        <Link className='w-full hover:bg-base-300 text-start flex justify-between items-center text-lg p-2 bg-base-200 border-t-2  border-gray-400 '>
                            <p>Baby food & toys</p>
                            <IoIosArrowForward></IoIosArrowForward>
                        </Link>
                        <Link className='w-full hover:bg-base-300 text-start flex justify-between items-center text-lg p-2 bg-base-200 border-t-2  border-gray-400 '>
                            <p>Gadget accesories</p>
                            <IoIosArrowForward></IoIosArrowForward>
                        </Link>
                        <Link className='w-full hover:bg-base-300 text-start flex justify-between items-center text-lg p-2 bg-base-200 border-t-2 border-b-2 border-gray-400 '>
                            <p>Fashhion</p>
                            <IoIosArrowForward></IoIosArrowForward>
                        </Link>
                    </div>

                    <div className="w-full h-fit lg:w-5/7  place-items-center">
                        <img src={banner1} className='w-full h-full object-cover'></img>
                        <img src={banner2}></img>
                    </div>
                    
                </div>

                <div className='flex mt-12  space-y-5 md:space-y-0 md:gap-5 flex-col md:flex-row lg:container h-fit justify-center items-center mx-auto  w-full'>
                    <div className='w-full relative  rounded-md shadow-xl h-80 bg-amber-50'>
                        <div className='p-5 space-y-2'>
                            <h1 className='text-sm  bg-orange-200 w-fit px-12 rounded-sm'>10%Sale Off</h1>
                            <p className='text-3xl font-semibold text-gray-700'>Apple Watch Serial 7</p>
                            <p className='text-xl '>Don't miss the last opportunity.</p>
                            <button className='btn  bg-orange-500 text-white'>Shop Now</button>
                        </div>
                        <img className='absolute bottom-5  right-13 ' src={bwatch}></img>
                    </div>

                    <div className='w-full relative  rounded-md shadow-xl  h-80 bg-blue-100'>
                     <div className='p-5 space-y-2'>
                            <h1 className=' text-orange-500 rounded-sm'>Latest Collection</h1>
                            <p className='text-3xl font-semibold text-gray-700'>Apple Devices & Accesories</p>
                            <p className='text-xl '>Don't miss the last opportunity.</p>
                            <button className='btn  bg-orange-500 text-white'>Shop Now</button>
                        </div>
                             <img className=' absolute bottom-5  right-13' src={bgadgets}></img>
                    </div>
                </div>

               


            </div>






        </div>
    );
};

export default Section1;