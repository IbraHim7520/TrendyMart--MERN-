import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { Link, NavLink } from 'react-router';
import { IoMenu } from "react-icons/io5";
import WebLogo from '../Components/WebLogo';
import useAuth from '../CustomHooks/useAuth';

const Nav = () => {
    const {userInfo , UserRole} = useAuth()

    return (
        <div>
            <div className="px-5 p-1 justify-center text-sm items-center bg-base-100 shadow-sm">
                <div className='mb-4 md:flex w-full justify-between items-center'>
                    <ul className='hidden md:flex justify-center items-center gap-5 '>
                        <NavLink className='hover:text-orange-400 hover:cursor-pointer link link-hover'>About Us</NavLink>
                        <NavLink className='hover:text-orange-400 hover:cursor-pointer link link-hover'>Contact Us</NavLink>
                        <NavLink to={"/be-seller"} className='hover:text-orange-400 hover:cursor-pointer link link-hover'>Become a Seller</NavLink>
                    </ul>
                    <h1 className='text-center bg-amber-200 px-5 rounded-md hover:cursor-pointer'>Free delivery on first order <span className='text-semibold text-orange-500'>Shipping $0</span></h1>
                
                    {
                        UserRole?.Role === "Admin" || UserRole?.Role === "Seller" ? 
                        <Link to={"dashboard"} type="button" class="hidden md:flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 active:scale-95 transition">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.13 14.652a.553.553 0 0 1-.78-.78l4.097-4.098a.552.552 0 0 1 .78.78zM5.882 6.95l-2.11 2.887s-.402-.343-1.224-.236C1.332 9.76.816 11.167.56 11.457.295 11.639-.553 9.829.555 8.16c1.872-2.815 5.327-1.21 5.327-1.21m5.169 5.168-2.887 2.11s.343.401.236 1.224c-.16 1.216-1.566 1.731-1.856 1.988-.182.265 1.629 1.112 3.295.005 2.817-1.872 1.212-5.327 1.212-5.327m5.303-6.198c.607-1.365.616-2.753-.07-3.686l.02-.02C17.375 1.145 18.129.16 17.986.018c-.142-.142-1.126.611-2.198 1.682l-.019.02c-.931-.685-2.32-.677-3.683-.071a13.3 13.3 0 0 0 1.895 2.374 13.3 13.3 0 0 0 2.373 1.898" fill="#06B6D4" />
                            <path d="M13.363 4.639a14.2 14.2 0 0 1-2.054-2.58 7 7 0 0 0-1.279 1.016c-1.314 1.314-6.163 7.728-6.163 7.728l.865.865 2.305-2.305a1.134 1.134 0 0 1 1.602 1.602L6.334 13.27l.865.865s6.414-4.849 7.728-6.163a7 7 0 0 0 1.018-1.283 14.2 14.2 0 0 1-2.582-2.05m-2.978 2.978A1.355 1.355 0 1 1 12.3 5.7a1.355 1.355 0 0 1-1.916 1.917" fill="#06B6D4" />
                        </svg>
                        Dashboard
                    </Link>
                        :
                        ""  
                    }
                </div>

                <div className='flex p-3  lg:px-12 2xl:px-16 w-full justify-start items-center'>

                    {/* Drwar button here */}
                    <div className='block lg:hidden'>
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer-4" className="drawer-button">
                                    <IoMenu size={35} />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu space-y-2 bg-base-200 text-base-content min-h-full w-80 p-4">
                                    {
                                        UserRole?.Role === "Admin" || UserRole?.Role === "Seller" ?
                                            <Link to={"dashboard"} type="button" class="hidden md:flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 active:scale-95 transition">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.13 14.652a.553.553 0 0 1-.78-.78l4.097-4.098a.552.552 0 0 1 .78.78zM5.882 6.95l-2.11 2.887s-.402-.343-1.224-.236C1.332 9.76.816 11.167.56 11.457.295 11.639-.553 9.829.555 8.16c1.872-2.815 5.327-1.21 5.327-1.21m5.169 5.168-2.887 2.11s.343.401.236 1.224c-.16 1.216-1.566 1.731-1.856 1.988-.182.265 1.629 1.112 3.295.005 2.817-1.872 1.212-5.327 1.212-5.327m5.303-6.198c.607-1.365.616-2.753-.07-3.686l.02-.02C17.375 1.145 18.129.16 17.986.018c-.142-.142-1.126.611-2.198 1.682l-.019.02c-.931-.685-2.32-.677-3.683-.071a13.3 13.3 0 0 0 1.895 2.374 13.3 13.3 0 0 0 2.373 1.898" fill="#06B6D4" />
                                                    <path d="M13.363 4.639a14.2 14.2 0 0 1-2.054-2.58 7 7 0 0 0-1.279 1.016c-1.314 1.314-6.163 7.728-6.163 7.728l.865.865 2.305-2.305a1.134 1.134 0 0 1 1.602 1.602L6.334 13.27l.865.865s6.414-4.849 7.728-6.163a7 7 0 0 0 1.018-1.283 14.2 14.2 0 0 1-2.582-2.05m-2.978 2.978A1.355 1.355 0 1 1 12.3 5.7a1.355 1.355 0 0 1-1.916 1.917" fill="#06B6D4" />
                                                </svg>
                                                Dashboard
                                            </Link>
                                            :
                                            ""
                                    }
                                    <NavLink className={({ isActive }) => isActive ? "text-orange-500" : "text-black"} >Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "text-orange-500" : "text-black"} to={"/all-products"}>Products</NavLink>
                                    {
                                        userInfo ?
                                            <div className='flex flex-col justify-start  gap-5'>
                                                <div className='tooltip' data-tip={userInfo?.displayName}>
                                                    <div className="avatar">
                                                        <div className="w-8 rounded-full">
                                                            <img src={userInfo?.photoURL} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className='btn btn-sm px-5 btn-error text-white'>Logout</button>
                                            </div>
                                        :
                                        <NavLink to={"/user-login"} className={({isActive})=> isActive ? "text-orange-500" : "text-black" }>
                                        <div className="tooltip" data-tip="Account">
                                            <IoPersonCircle size={25} />
                                        </div>
                                    </NavLink>
                                    }
                                    <NavLink to={"/my-wishlist"} className={({isActive})=> isActive ? "text-orange-500" : "text-black" }>
                                        <div  className="tooltip" data-tip="Wishlist">
                                            <MdFavorite size={25} />
                                        </div>
                                    </NavLink>
                                    <NavLink to={"/my-cart"} className={({isActive})=> isActive ? "text-orange-500" : "text-black" }>
                                        <div className="tooltip" data-tip="Cart">
                                            <FaShoppingCart size={25} />
                                        </div>
                                    </NavLink>
                                    <hr className='w-full text-gray-400'></hr>
                                    <div className='flex md:hidden space-y-2  flex-col '>
                                        <NavLink className='hover:text-orange-400 hover:cursor-pointer link link-hover'>About Us</NavLink>
                                        <NavLink className='hover:text-orange-400 hover:cursor-pointer link link-hover'>Contact Us</NavLink>
                                        <NavLink to={"/be-seller"} className='hover:text-orange-400 hover:cursor-pointer link link-hover'>Become a Seller</NavLink>
                                    </div>
                                    <hr className='w-full text-gray-400'></hr>
                                    <div className="w-full  rounded-box flex   lg:hidden flex-col  grow place-items-center">
                                        <Link className='w-full hover:bg-base-300 text-start text-lg p-2 bg-base-200 border-t-2 border-b-2 border-gray-400 '>Food</Link>
                                        <Link className='w-full hover:bg-base-300 text-start text-lg p-2 bg-base-200 border-t-2 border-b-2 border-gray-400 '>Home appliens</Link>
                                        <Link className='w-full hover:bg-base-300 text-start text-lg p-2 bg-base-200 border-t-2 border-b-2 border-gray-400 '>Skin care</Link>
                                        <Link className='w-full hover:bg-base-300 text-start text-lg p-2 bg-base-200 border-t-2 border-b-2 border-gray-400 '>Baby food & toys</Link>
                                        <Link className='w-full hover:bg-base-300 text-start text-lg p-2 bg-base-200 border-t-2 border-b-2 border-gray-400 '>Gadget accesories</Link>
                                        <Link className='w-full hover:bg-base-300 text-start text-lg p-2 bg-base-200 border-t-2 border-b-2 border-gray-400 '>Fashhion</Link>
                                    </div>

                                </ul>
     
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full justify-between items-center ml-1'>
                        <div>
                            <WebLogo></WebLogo>
                        </div>
                        <div className='hidden md:flex w-2/4 justify-center'>
                            <input className='input w-full' placeholder='Search Products'></input>
                            <button className='btn bg-orange-500 text-white'>Search</button>
                        </div>

                        <div className='hidden lg:block'>
                            <ul className='flex text-lg font-semibold justify-center items-center gap-5 '>
                                <NavLink className={({isActive})=> isActive ? "text-orange-500" : "text-black" } to={"/"} >Home</NavLink>
                                <NavLink className={({isActive})=> isActive ? "text-orange-500" : "text-black" }   to={"/all-products"}>Products</NavLink>
                               {
                                userInfo ?
                               <div className='flex justify-center items-center gap-5'>
                                <div className='tooltip' data-tip={userInfo?.displayName}>
                                     <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={userInfo?.photoURL } />
                                    </div>
                                    </div>
                                </div>
                                    <button className='btn btn-sm px-5 btn-error text-white'>Logout</button>
                               </div>
                               :
                               <NavLink to={"/user-login"} className={({isActive})=> isActive ? "text-orange-500" : "text-black" }>
                                        <div className="tooltip" data-tip="Account">
                                            <IoPersonCircle size={25} />
                                        </div>
                            </NavLink>
                               }
                                <NavLink to={"/my-wishlist"} className={({isActive})=> isActive ? "text-orange-500" : "text-black" }>
                                    <div className="tooltip" data-tip="Wishlist">
                                        <MdFavorite size={25} />
                                    </div>
                                </NavLink>
                                <NavLink to={"/my-cart"} className={({isActive})=> isActive ? "text-orange-500" : "text-black" }>
                                    <div className="tooltip" data-tip="Cart">
                                        <FaShoppingCart size={25} />
                                    </div>
                                </NavLink>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;

