import React from 'react';
import useAuth from '../CustomHooks/useAuth';
import { Link } from 'react-router';
import { FaLocationArrow } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import WebLogo from '../Components/WebLogo';
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

const Nav = () => {
    const {userInfo , UserRole} = useAuth()
    return (
       <div className='w-full border-b-1 border-gray-200 px-3 md:px-4 bg-pink-50 top-0 z-50 sticky lg:px-6 xl:px-10 2xl:px-14 3xl:px-20'>
            <div className='w-full  flex justify-between items-center'>
                <div className='flex text-xs md:text-sm hover:text- gap-2 md:gap-4 justify-center items-center'>
                    <p className='hover:link link-hover hover:text-success'>About Us</p>
                    |
                    <p className='hover:link link-hover hover:text-success'>Contact Us</p>
                    |
                    <Link className='hover:link link-hover hover:text-success' to={"/be-seller"}>Become a Seller</Link>
                </div>
                <div>
                    <Link to={"/dashboard"} className='flex text-xs md:text-sm hover:link link-hover hover:text-success items-center justify-center gap-1'>Dashbord <FaLocationArrow className='text-xs md:text-sm'/> </Link>
                </div>
            </div>

            <div className='w-full my-2 text-sm 2xl:text-lg flex  justify-between items-center'>
                <WebLogo></WebLogo>
                <div className='flex gap-5 justify-center items-center'>

                    <form class="hidden md:flex items-center border gap-2 bg-white border-gray-500/30 h-12 max-w-md w-full rounded-full overflow-hidden">
                        <input type="text" placeholder="Enter your email" class="w-full h-full  pl-6 outline-none text-sm placeholder-gray-500" required></input>
                            <button type="submit" class="btn btn-secondary rounded-full text-sm text-white mr-1 flex items-center justify-center gap-1">
                                <IoMdSearch size={15} />
                                Search
                            </button>
                    </form>
                    <div className="tooltip" data-tip="orders">
                        <Link className={({ isActive }) => isActive ? "text-success" : "text-neutral"} to={"/my-orders"}>Orders</Link>
                    </div>

                    <div className="tooltip" data-tip="cart">
                        <Link className={({ isActive }) => isActive ? "text-success" : "text-neutral"} to={"/my-cart"} ><FaCartShopping size={20} /></Link>
                    </div>
                    <div className="tooltip" data-tip={userInfo ? userInfo?.displayName : "Account"}>
                        {
                            userInfo ? 
                                <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
                                        <img src={userInfo?.photoURL} />
                                    </div>
                                </div>
                            :
                            <MdAccountCircle />
                        }
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Nav;

