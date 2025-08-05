import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Navbar/Nav';
import Footer from "../Footer/Footer"
const Layout = () => {
    return (
        <div>
        <Nav></Nav>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Layout;