import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { Link, NavLink } from 'react-router';
import { IoMenu } from "react-icons/io5";

const Nav = () => {
    return (
        <div>
            <div className="px-5 p-1 justify-center text-sm items-center bg-base-100 shadow-sm">
                <div className='mb-4 md:flex w-full justify-between items-center'>
                    <ul className='hidden md:flex justify-center items-center gap-5 '>
                        <NavLink className='hover:text-orange-400 hover:cursor-pointer link link-hover'>About Us</NavLink>
                        <NavLink className='hover:text-orange-400 hover:cursor-pointer link link-hover'>Contact Us</NavLink>
                        <NavLink className='hover:text-orange-400 hover:cursor-pointer link link-hover'>Become a Seller</NavLink>
                    </ul>
                    <h1 className='text-center bg-amber-200 px-5 rounded-md hover:cursor-pointer'>Free delivery on first order <span className='text-semibold text-orange-500'>Shipping $0</span></h1>
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
                                    <NavLink>Home</NavLink>
                                    <NavLink>Products</NavLink>
                                    <NavLink>
                                        <div className="tooltip" data-tip="Account">
                                            <IoPersonCircle size={25} />
                                        </div>
                                    </NavLink>
                                    <NavLink>
                                        <div className="tooltip" data-tip="Wishlist">
                                            <MdFavorite size={25} />
                                        </div>
                                    </NavLink>
                                    <NavLink>
                                        <div className="tooltip" data-tip="Cart">
                                            <FaShoppingCart size={25} />
                                        </div>
                                    </NavLink>
                                    <hr className='w-full text-gray-400'></hr>
                                    <div className='flex md:hidden space-y-2  flex-col '>
                                        <NavLink className='hover:text-orange-400 hover:cursor-pointer link link-hover'>About Us</NavLink>
                                        <NavLink className='hover:text-orange-400 hover:cursor-pointer link link-hover'>Contact Us</NavLink>
                                        <NavLink className='hover:text-orange-400 hover:cursor-pointer link link-hover'>Become a Seller</NavLink>
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
                            <h1 className='font-bold text-2xl text-gray-800'>TrendyMart</h1>
                        </div>
                        <div className='flex w-2/4 justify-center'>
                            <input className='input w-full' placeholder='Search Products'></input>
                            <button className='btn bg-orange-500 text-white'>Search</button>
                        </div>

                        <div className='hidden lg:block'>
                            <ul className='flex text-lg font-semibold justify-center items-center gap-5 '>
                                <NavLink>Home</NavLink>
                                <NavLink>Products</NavLink>
                                <NavLink>
                                    <div className="tooltip" data-tip="Account">
                                        <IoPersonCircle size={25} />
                                    </div>
                                </NavLink>
                                <NavLink>
                                    <div className="tooltip" data-tip="Wishlist">
                                        <MdFavorite size={25} />
                                    </div>
                                </NavLink>
                                <NavLink>
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

