import { createBrowserRouter } from "react-router";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home"
import AllProducts from "../Pages/AllProducts";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import MyCart from "../Pages/MyCart"
import MyWishlist from "../Pages/MyWishlist"
import DRoot from "../Dashbord/Pages/DRoot";
import DHome from "../Dashbord/Pages/DHome";
import BeaSeller from "../Pages/BeaSeller";
const router = createBrowserRouter([
    {
        path:"/",
        Component: Layout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path:"/all-products",
                Component: AllProducts
            },
            {
                path: "/my-cart",
                Component:MyCart
            },
            {
                path: "/my-wishlist",
                Component: MyWishlist
            }
        ]
    },
    {
        path: "user-login",
        Component:Login
    },
    {
        path:"user-signup",
        Component:Signup
    },
    {
        path:"be-seller",
        Component:BeaSeller
    },
    {
        path:"dashboard",
        Component:DRoot,
        children:[
            {
                index:true,
                path:"",
                Component:DHome
            }
        ]
    }
])
export default router;