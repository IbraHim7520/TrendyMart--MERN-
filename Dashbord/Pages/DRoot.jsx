import React, { useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import { MdAccountBox } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { FaTableList } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";

import WebLogo from '../../Components/WebLogo';
import useAuth from "../../CustomHooks/useAuth"
const DRoot = () => {
    const { UserRole , userInfo} = useAuth()
    const navigate = useNavigate()
    useEffect( ()=>{
        if(UserRole?.Role === "Customer"){
            navigate("/");
            return
        }

    } , [UserRole?.Role] )
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-pink-50 transition-all duration-300">
                <WebLogo></WebLogo>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <Link to={"/"} className='border rounded-full text-sm px-4 py-1'>Logout</Link>
                </div>
            </div>

            <div className="flex  w-full">
                <div className="w-1/6 bg-base-300 border-r-2 space-y-0.5 border-gray-600  min-h-screen  ">
                    {/* for seller dashboard */}
                    {
                        UserRole?.Role === "Admin" ?
                            <>
                                <NavLink to={""} className={({isActive}) => isActive ? "btn w-full flex justify-center items-center btn-secondary " : "btn  w-full flex justify-center items-center bg-pink-200" } > <MdAccountBox size={20}/> <p className='hidden lg:block'>Admin Profile</p></NavLink>
                                <NavLink to={"admin-user-management"}  className={({isActive}) => isActive ? "btn w-full flex justify-center items-center btn-secondary " : "btn  w-full flex justify-center items-center bg-pink-200" } > <FaUsers size={20}/> <p className='hidden lg:block'> User Management</p></NavLink>
                                <NavLink to={"admin-product-moderation"} className={({isActive}) => isActive ? "btn w-full flex justify-center items-center btn-secondary " : "btn   w-full flex justify-center items-center bg-pink-200" } > <FaTableList size={20}/> <p className='hidden lg:block'>Product Moderation</p> </NavLink>
                                <NavLink to={"admin-order-monitoring"}  className={({isActive}) => isActive ? "btn w-full flex justify-center items-center btn-secondary " : "btn  w-full flex justify-center items-center bg-pink-200" } > <FaClipboardList size={20}/> <p className='hidden lg:block'>Order Monitoring</p> </NavLink>

                            </>
                            :
                            <>
                                {
                                    UserRole?.Role === "Seller" ?

                                        <>
                                <NavLink to={""} className={({isActive}) => isActive ? "btn w-full flex justify-center items-center btn-secondary " : "btn  w-full flex justify-center items-center bg-pink-200" } > <MdAccountBox size={20}/> <p className='hidden lg:block'>Seller Profile</p></NavLink>
                                <NavLink to={"seller-product-manage"}  className={({isActive}) => isActive ? "btn w-full flex justify-center items-center btn-secondary " : "btn  w-full flex justify-center items-center bg-pink-200" } > <FaUsers size={20}/> <p className='hidden lg:block'>Product Management</p></NavLink>
                                <NavLink to={"seller-sales-analysis"}  className={({isActive}) => isActive ? "btn w-full flex justify-center items-center btn-secondary " : "btn  w-full flex justify-center items-center bg-pink-200" } > <FaChartSimple size={20}/> <p className='hidden lg:block'>Sales Anaalysis</p></NavLink>
                                <NavLink to={"seller-order-manage"} className={({isActive}) => isActive ? "btn w-full flex justify-center items-center btn-secondary " : "btn   w-full flex justify-center items-center bg-pink-200" } > <FaBoxes size={20}/> <p className='hidden lg:block'>Order Management</p> </NavLink>
                                <NavLink to={"payments"}  className={({isActive}) => isActive ? "btn w-full flex justify-center items-center btn-secondary " : "btn  w-full flex justify-center items-center bg-pink-200" } > <MdPayment size={20}/> <p className='hidden lg:block'>Payments & Transactions</p> </NavLink>
                                        </>
                                        :
                                        <></>
                                }
                            </>
                    }
                    {/* Admin dashboard */}

                </div>

                <div className="w-5/6 bg-base-300 rounded-box grid min-h-screen grow ">
                    <Outlet></Outlet>
                </div>
            </div>

        </>

    );
};

export default DRoot;

