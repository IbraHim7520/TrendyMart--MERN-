import React, { useEffect, useState } from 'react';
import EmptyCart from "../assets/empty_cart.jpg"
import { Link } from 'react-router';
import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAuth from '../CustomHooks/useAuth';
const MyCart = () => {
    const [product , setProduct] = useState([])
    const {userInfo} = useAuth()
    const [paymentMethod , setPaymentMathod] = useState('COD')
    const {data, isPending , isError , refetch } = useQuery({
        queryKey: ['get-cart-data'],
        queryFn: async()=>{
           const response = await axios.get(`${import.meta.env.VITE_API_URL}/get-cart/${userInfo?.email}`)
           setProduct(response?.data || []) 
           return response?.data
        }
    })


        if (isPending) {
        return (
            <div className="w-full min-h-screen flex flex-col justify-center items-center">
                <span className="loading text-4xl loading-spinner"></span>
                <p>Loading..</p>
            </div>
        );
    }


    if (isError || !data || data.length === 0) {
        return (
            <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                <img className='max-w-96' src={EmptyCart}></img>
                <p className='text-xl font-semibold text-gray-700'>No Product Added Yet!</p>
                <Link to={"/all-products"} className='btn bg-orange-500 text-white'>Browse Products</Link>
            </div>
        );
    }


    const handleCartDelete = async(id) =>{   
        alert(id)
        try{
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-cart/${id}`)
            console.log(data)
            if (data?.deletedCount > 0){
                toast.success("Item removed!")
                refetch()
            }else{
                toast.error("Unable to remove!")
            }
        }catch{
            toast.error('Something went wrong!')
        }
    }
    const handleOnlinePayment = ()=>{
        
    }
    const handlePlaceOrder = async(e, product)=>{
        e.preventDefault()
        const deliveryAddress = e.target.address.value
        if (paymentMethod === "CARD"){
           return handleOnlinePayment()
        }
        for (const item of product){
            item.Address = deliveryAddress,
            item.PaymentMethod = paymentMethod
        }
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/post-order`, {product})
        if(data?.insertedCount > 0){
            toast.success()
        }
    }
    return (
         <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm">{product?.length} Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {product.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div className="cursor-pointer w-28 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                                <img className="w-full h-full object-cover" src={product?.Image} alt={product?.Name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{product?.Name}</p>
                                <div className="font-normal text-gray-500/70">
                                    <p>Size: {product?.Size || "N/A"}</p>
                                    <div className='flex items-center'>
                                        <p>Qty: {product?.Quantity} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">${product?.Price * product?.Quantity}</p>
                        <button onClick={()=>handleCartDelete(product?._id)} className="cursor-pointer mx-auto">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0" stroke="#FF532E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>)
                )}

                <Link to={"/"} className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium">
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1" stroke="#615fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Continue Shopping
                </Link>

            </div>

            <form onSubmit={(e)=>handlePlaceOrder(e , product)} className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <input required className='input w-full' placeholder='Enter your full address' type='text' name='address' ></input>
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select name='DeliveryOption' onChange={(e)=>setPaymentMathod(e.target.value)} className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option  value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">$20</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>$10</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>{
                            product.reduce( (sum , items)=> sum + items.Price * items.Quantity + 10 + 20 , 0 )
                            }</span>
                    </p>
                </div>

                <button type='submit' className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default MyCart;