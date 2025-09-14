import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link, useLocation, useParams } from 'react-router';
import ReviewImage from "../assets/review.png"
import { RxCross2 } from "react-icons/rx";

import toast from 'react-hot-toast';
import useAuth from '../CustomHooks/useAuth';
const ProductDetails = () => {
    const { id } = useParams()
    
    const [selectedImg, setSelectedImg] = useState("");
    const [selectedSize , setSelectedSize] = useState('')
    const [quantity , setQuantity] = useState(1)
    const [thumbnail, setThumbnail] = useState(null);
    const { userInfo } = useAuth()
    const { data, isPending, isError } = useQuery({
        queryKey: ["get-details"],
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/one-product/${id}`)
            setThumbnail(result?.data?.Images[0])
            return result?.data
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
            <div className="w-full flex justify-center items-center">
                <p>No Products</p>
            </div>
        );
    }

    const handleItemCartModal_Open = () => {
        if (userInfo?.email === data?.Owner) {
            toast.error("Owner can't buy his own product!")
            return
        }
        if(!userInfo){
            return toast.error("Please login before to buy")
        }
        const Modal = document.getElementById('my_modal_2')
        Modal.showModal()
    }

    const handleCartAddSubmi = async(e) =>{
        e.preventDefault()
        const Modal = document.getElementById('my_modal_2')
        if (!selectedImg || !selectedSize){
            toast.error("Select an option first")
            return
        }
        const itemQuantity = e.target.SelectedQuantity.value
        const itemImage = e.target.productImage.value
        const itemSize = e.target.SelectedSize.value
        const SelectedCartItem = {
            ItemID: data?._id,
            Name: data?.ProductName,
            Size: itemSize,
            Image: itemImage,
            Quantity : parseInt(itemQuantity),
            Price: data?.OfferPrice,
            AddedBy: userInfo?.email,
            Status: "Pending"
        }
         const response = await axios.post(`${import.meta.env.VITE_API_URL}/add-cart`, { SelectedCartItem })
        console.log(response)
         if (response?.data?.insertedId) {
            toast.success("Successfully added to cart.")
            Modal.close()
            e.tartet.reset()
        } else {
            toast.error(response?.data?.message)
            Modal.close()
        }
    }

    const handleSelectionReset = ()=>{
        setQuantity(1)
        setSelectedImg("")
        setSelectedSize("")
    }
    return (
        <div className="max-w-full w-full  px-6">
            <p>
                <span><Link to={"/"}>Home</Link></span> /
                <span> <Link to={"/all-products"}>Products</Link></span> /
                <span> {data?.Category}</span> /
                <span className="text-indigo-500"> {data?.ProductName}</span>
            </p>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form onSubmit={(e)=>handleCartAddSubmi(e)} className='w-full space-y-3'>
                        <input className='w-full input' value={data?.ProductName} />
                        <div className="flex w-full justify-start items-center gap-4">
                            {/* Image 1 */}
                            <label
                                className={`cursor-pointer border-2 rounded-lg overflow-hidden ${selectedImg === "img1" ? "border-blue-500" : "border-gray-300"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="productImage"
                                    value={data?.Images[0]}
                                    className="hidden"
                                    onChange={() => setSelectedImg("img1")}
                                />
                                <img
                                    src={data?.Images[0]}
                                    alt="Option 1"
                                    className="w-32 h-32 object-cover"
                                />
                            </label>

                            {/* Image 2 */}
                            <label
                                className={`cursor-pointer border-2 rounded-lg overflow-hidden ${selectedImg === "img2" ? "border-blue-500" : "border-gray-300"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="productImage"
                                    value={data?.Images[1]}
                                    className="hidden"
                                    onChange={() => setSelectedImg("img2")}
                                />
                                <img
                                    src={data?.Images[1]}
                                    alt="Option 2"
                                    className="w-32 h-32 object-cover"
                                />
                            </label>
                        </div>
                        <div className='flex gap-3 justify-start items-center'>
                            {
                                    data?.Size.split(",").map((size , index)=> <label key={index} className={`cursor-pointer border-2 rounded-lg overflow-hidden ${selectedSize === size ? "border-green-500" : "border-gray-300" } `} ><input name='SelectedSize' type='radio' className='hidden' onChange={()=> setSelectedSize(size)} value={size}></input> <p className='btn'>{size}</p> </label> )   
                            }
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <button type='button' onClick={()=>  setQuantity(quantity+1)} className='btn btn-outline'>+</button>
                            <input name='SelectedQuantity' className='btn btn-ghost px-3' value={quantity}></input>
                            <button type='button' onClick={()=>setQuantity(prev => Math.max(prev - 1, 1))} className='btn btn-outline'>-</button>
                        </div>
                        
                        <div className='mt-5 flex justify-between items-center '>
                            <button type='submit' className='btn px-5 btn-secondary'>
                            Add
                        </button>
                        <p onClick={handleSelectionReset} className='text-sm flex gap-2 items-center justify-center cursor-pointer link-hover'>Clear <RxCross2 size={15}/></p>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <div className="flex p-5 lg:p-8 gap-5 w-full flex-col md:flex-row justify-center ">
                <div className="flex flex-col gap-3">
                    <div className="flex order-1  gap-3">
                        {data?.Images.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 max-h-72 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 max-w-3xl h-full rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{data?.ProductName}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) => (
                            data?.Ratings > i ? (
                                <svg key={i} width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" fill="#615fff" />
                                </svg>
                            ) : (
                                <svg width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" fill="#615fff" fill-opacity="0.35" />
                                </svg>
                            )
                        ))}
                        <p className="text-base ml-2">({data?.Ratings})</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: ${data?.Price}</p>
                        <p className="text-2xl font-medium">MRP: ${data?.OfferPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>


                    <p className="text-base font-medium mt-6">About Products</p>
                    <div className='flex mt-2 justify-start items-center'>
                        <p>{data?.ProductDescription}</p>
                    </div>

                    <p className="text-base font-medium mt-6">Size</p>
                    <div className='flex mt-2 justify-start items-center gap-4'>
                        {
                            data?.Size.split(",").map((size, index) => <button key={index} className='btn btn-sm'>{size}</button>)
                        }
                    </div>


                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button onClick={handleItemCartModal_Open} className="w-full lg:w-fit px-24 py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
            {/* Product Reviews Section */}
            <div className='mt-5 md:mt-8 lg:mt-12'>
                <div className='flex w-fit items-center justify-center gap-2'>
                    <h1 className='text-3xl font-medium mb-2'>Reviews</h1>
                    <img className='w-8 ' src={ReviewImage}></img>
                </div>
                <hr className='w-full text-gray-400'></hr>

                <div className='w-full gap-3 min-h-96 md:grid md:grid-cols-12 flex flex-col'>
                    {/* Customers Reviews Box */}
                    <div className='w-full  p-4 justify-items-center h-full items-center col-span-8'>
                        <img src={ReviewImage}></img>
                        <h1>No Reviews Yet!</h1>
                    </div>

                    <div className='w-full  p-4 col-span-4'>
                        <h1 className='text-2xl font-medium'>Your feedback</h1>

                        <form className='flex w-full flex-col mt-5'>
                            <div className="rating mb-5">
                                <input value={"1"} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input value={"2"} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input value={"3"} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" value={"4"} name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" value={"5"} name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>

                            <label>Your Opinion</label>
                            <textarea className="textarea w-" placeholder="Bio"></textarea>
                            <button className='btn w-fit mt-5 px-12 btn-secondary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;