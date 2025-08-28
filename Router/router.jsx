import { createBrowserRouter } from "react-router";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home"
import AllProducts from "../Pages/AllProducts";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import MyCart from "../Pages/MyCart"
import DRoot from "../Dashbord/Pages/DRoot";
import DHome from "../Dashbord/Pages/DHome";
import BeaSeller from "../Pages/BeaSeller";
import ProductManagement from "../Dashbord/Pages/Seller-Page/ProductManagement"
import OrdersManagement from "../Dashbord/Pages/Seller-Page/OrderManagement"
import Sales from "../Dashbord/Pages/Seller-Page/Sales";
import Payments from "../Dashbord/Pages/Seller-Page/Payments";
import UserManagement from "../Dashbord/Pages/Admin-Page/UserManagement"
import PModaration from "../Dashbord/Pages/Admin-Page/PModaration"
import ProductMonitoring from "../Dashbord/Pages/Admin-Page/ProductMonitor"
import MyOrders from "../Pages/MyOrders";
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
                path: "/my-orders",
                Component: MyOrders
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
                Component:DHome,
                path:"h"
            },
            {
                path: "seller-product-manage",
                Component: ProductManagement
            },
            {
                path: "seller-order-manage",
                Component: OrdersManagement
            },
            {
                path: "seller-sales-analysis",
                Component: Sales
            },
            {
                path: "payments",
                Component: Payments
            },
            {
                path: "admin-user-management",
                Component: UserManagement
            },
            {
                path: "admin-product-moderation",
                Component: PModaration
            },
            {
                path: "admin-order-monitoring",
                Component: ProductMonitoring
            }
        ]
    }
])
export default router;