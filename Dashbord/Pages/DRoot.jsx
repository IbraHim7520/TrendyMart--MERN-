import React, { useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import DHome from './DHome';
import WebLogo from '../../Components/WebLogo';
import useAuth from "../../CustomHooks/useAuth"
const DRoot = () => {
    const { UserRole } = useAuth()
    const navigate = useNavigate()
    useEffect( ()=>{
        if(UserRole?.Role === "Customer"){
            navigate("/");
            return
        }

    } , [UserRole?.Role] )
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
                <div className="w-1/6 bg-base-300 border-r-2 space-y-0.5 border-gray-600  min-h-screen  ">
                    {/* for seller dashboard */}
                    {
                        UserRole?.Role === "Admin" ?
                            <>
                                <NavLink to={""} className={({ isActive }) => isActive ? "btn w-full hover:bg-blue-400 text-white bg-blue-400" : "btn w-full hover:bg-blue-400 text-white btn-primary"}>Admin Profile</NavLink>
                                <NavLink to={"admin-user-management"} className={({ isActive }) => isActive ? "btn w-full hover:bg-blue-400 text-white bg-blue-400" : "btn w-full hover:bg-blue-400 text-white btn-primary"}>User Management</NavLink>
                                <NavLink to={"admin-product-moderation"} className={({ isActive }) => isActive ? "btn w-full hover:bg-blue-400 text-white bg-blue-400" : "btn w-full hover:bg-blue-400 text-white btn-primary"}>Product Moderation</NavLink>
                                <NavLink to={"admin-order-monitoring"} className={({ isActive }) => isActive ? "btn w-full hover:bg-blue-400 text-white bg-blue-400" : "btn w-full hover:bg-blue-400 text-white btn-primary"}>Order Monitoring</NavLink>

                            </>
                            :
                            <>
                                {
                                    UserRole?.Role === "Seller" ?

                                        <>
                                            <NavLink to={""} className={({ isActive }) => isActive ? "btn w-full hover:bg-blue-400 text-white bg-blue-400" : "btn w-full hover bg-blue-400 text-white btn-primary"}>Seller Profile </NavLink>
                                            <NavLink to={"seller-product-manage"} className={({ isActive }) => isActive ? "btn w-full hover:bg-blue-400 text-white  bg-blue-400" : "btn w-full hover:bg-blue-400 text-white btn-primary"}>Product Management</NavLink>
                                            <NavLink to={"seller-order-manage"} className={({ isActive }) => isActive ? "btn w-full hover:bg-blue-400 text-white  bg-blue-400" : "btn w-full hover:bg-blue-400 text-white btn-primary"}>Order Management</NavLink>
                                            <NavLink to={"seller-sales-analysis"} className={({ isActive }) => isActive ? "btn w-full hover:bg-blue-400 text-white  bg-blue-400" : "btn w-full hover:bg-blue-400 text-white btn-primary"}>Sales Analytics</NavLink>
                                            <NavLink to={"payments"} className={({ isActive }) => isActive ? "btn w-full hover:bg-blue-400 text-white  bg-blue-400" : "btn w-full hover:bg-blue-400 text-white btn-primary"}>Payments & Transactions</NavLink>
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

