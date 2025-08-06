import React from 'react';
import beSeller from "../assets/be_a_seller.png"
import bottom_banner from "../assets/homapge_images/home_page_banner.png"
const BeSeller = () => {
    return (
        <div className='py-24 '>
        <div className="container bg-orange-50 rounded-lg p-12 py-24 mx-auto ">
		<div className="flex flex-col overflow-hidden rounded-md gap-5  lg:flex-row">
			<img src={beSeller} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex mt-12 lg:mt-0 flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase bg-orange-200 w-fit px-12 p-1 rounded-sm">Join, it's free</span>
				<h3 className="text-5xl font-bold">Start your journey today. Be your own boss. Be a seller</h3>
				<p className="my-6 dark:text-gray-600">
                    Unlock the potential of your business by joining our platform as a seller. Whether you're an individual creator or a growing brand, we provide you with the tools and support to reach more customers and grow your sales.
                </p>
				<button type="button" className="btn bg-orange-500 text-white px-12 w-fit">Be a Seller</button>
			</div>
		</div>


        </div>
		<div className='w-full container mx-auto'>
			<img src={bottom_banner}>

			</img>
		</div>
        </div>
    );
};

export default BeSeller;