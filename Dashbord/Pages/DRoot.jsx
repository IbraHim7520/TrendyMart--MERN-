import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import DHome from './DHome';
import WebLogo from '../../Components/WebLogo';
import useAuth from "../../CustomHooks/useAuth"
const DRoot = () => {
    const { UserRole } = useAuth()
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <WebLogo></WebLogo>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <Link to={"/"} className='border rounded-full text-sm px-4 py-1'>Logout</Link>
                </div>
            </div>

            <div className="flex  w-full">
                <div className="w-1/6 bg-base-300 border-r-2 border-gray-600  min-h-screen  ">
                    {/* for seller dashboard */}
                    {
                        UserRole?.Role === "Admin" ?
                            <>
                                <NavLink to={""} className={({ isActive }) => isActive ? "btn w-full hover:bg-amber-800 text-white bg-orange-800" : "btn w-full hover:bg-amber-800 text-white bg-orange-500"}>Admin Profile</NavLink>
                                <NavLink to={"admin-user-management"} className={({ isActive }) => isActive ? "btn w-full hover:bg-amber-800 text-white bg-orange-800" : "btn w-full hover:bg-amber-800 text-white bg-orange-500"}>User Management</NavLink>
                                <NavLink to={"admin-product-moderation"} className={({ isActive }) => isActive ? "btn w-full hover:bg-amber-800 text-white bg-orange-800" : "btn w-full hover:bg-amber-800 text-white bg-orange-500"}>Product Moderation</NavLink>
                                <NavLink to={"admin-order-monitoring"} className={({ isActive }) => isActive ? "btn w-full hover:bg-amber-800 text-white bg-orange-800" : "btn w-full hover:bg-amber-800 text-white bg-orange-500"}>Order Monitoring</NavLink>

                            </>
                            :
                            <>
                                {
                                    UserRole?.Role === "Seller" ?

                                        <>
                                            <NavLink to={""} className={({ isActive }) => isActive ? "btn w-full hover:bg-amber-800 text-white bg-orange-800" : "btn w-full hover:bg-amber-800 text-white bg-orange-500"}>Seller Profile </NavLink>
                                            <NavLink to={"seller-product-manage"} className={({ isActive }) => isActive ? "btn w-full hover:bg-amber-800 text-white bg-orange-800" : "btn w-full hover:bg-amber-800 text-white bg-orange-500"}>Product Management</NavLink>
                                            <NavLink to={"seller-order-manage"} className={({ isActive }) => isActive ? "btn w-full hover:bg-amber-800 text-white bg-orange-800" : "btn w-full hover:bg-amber-800 text-white bg-orange-500"}>Order Management</NavLink>
                                            <NavLink to={"seller-sales-analysis"} className={({ isActive }) => isActive ? "btn w-full hover:bg-amber-800 text-white bg-orange-800" : "btn w-full hover:bg-amber-800 text-white bg-orange-500"}>Sales Analytics</NavLink>
                                            <NavLink to={"payments"} className={({ isActive }) => isActive ? "btn w-full hover:bg-amber-800 text-white bg-orange-800" : "btn w-full hover:bg-amber-800 text-white bg-orange-500"}>Payments & Transactions</NavLink>
                                        </>
                                        :
                                        <></>
                                }
                            </>
                    }
                    {/* Admin dashboard */}

                </div>

                <div className="w-5/6 bg-base-300 rounded-box grid min-h-screen grow place-items-center">
                    <Outlet></Outlet>
                </div>
            </div>

        </>

    );
};

export default DRoot;

