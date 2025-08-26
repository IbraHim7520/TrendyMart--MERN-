import React from 'react';
import watchCat from "../assets/wtach.jpg"
import womanCloth from "../assets/woman-cloth.jpg"
import Makeup from "../assets/makeup.jpg"
import Juwelary from "../assets/juwelary.jpg"
import manCloth from "../assets/men-cloth.jpg"

const HomeGrids = () => {
    return (
       <div className='w-full flex flex-col '>

            <h1  className='py-5 md:py-8 lg:py-16 text-center font-bold text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl  '>Featured Categories</h1>
             <div className='w-full grid grid-cols-1  my-5 lg:flex items-center justify-center gap-1 h-fit lg:h-96 '>
            <div className='w-full lg:w-1/4 h-72 overflow-hidden lg:h-full '>
                <img className='w-full transition-transform duration-500 ease-in-out transform hover:scale-110  h-full object-cover' src={watchCat}></img>
            </div>

            <div className='w-full lg:w-2/4  md:h-96 lg:h-full  h-full  gap-1 flex flex-col'>
                <div className='w-full overflow-hidden h-2/4'>
                    <img src={Makeup} className='w-full  transition-transform duration-500 ease-in-out transform hover:scale-110  h-full object-cover'></img>
                </div>
                <div className='w-full flex  gap-1 h-2/4'>
                    <div className='h-full overflow-hidden w-2/4 '>
                    <img src={womanCloth} className='w-full  transition-transform duration-500 ease-in-out transform hover:scale-110 h-full object-cover'></img>
                    </div>
                    <div className='h-full overflow-hidden w-2/4 '>
                    <img src={Juwelary} className='w-full  transition-transform duration-500 ease-in-out transform hover:scale-110 h-full object-cover'></img>
                    </div>
                </div>

            </div>

            <div className='w-full lg:w-1/4 h-72 overflow-hidden lg:h-full '>
                <img className='w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110  object-cover' src={manCloth}></img>
            </div>

        </div>
       </div>
    );
};

export default HomeGrids;