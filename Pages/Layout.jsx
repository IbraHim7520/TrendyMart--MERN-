import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import Nav from '../Navbar/Nav';
import Footer from "../Footer/Footer"
const Layout = () => {
    const path = useLocation()
    
    return (
        <div>
        {
            path.pathname === "/user-login" || path.pathname === "/user-signup" ?
            <div>
                <Outlet></Outlet>
            </div>    
            :
            <div>
                <Nav></Nav>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
        <Footer></Footer>
            </div>
        }
        </div>
    );
};

export default Layout;