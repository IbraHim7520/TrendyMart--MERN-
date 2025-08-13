import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const SellerForm = () => {
    const {handleSubmit, reset , register , watch} = useForm()
    const [isOnlineBase , setisOnlineBased] = useState(false);
  
    const onSubmit = (data) =>{
        data.Status = "Pending"
        axios.post(`${import.meta.env.VITE_API_URL}/seller-req`, {data});
    }
    

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full p-5 mt-8 space-y-3 '>
            <div className='flex gap-5 w-full flex-col lg:flex-row'>
                <div className='text-start w-full'>
                    <p>Name*</p>
                    <input {...register("SellerName", {required:true})} type='text' className='w-full input text-lg' placeholder='Seller Name'></input>
                </div>
                <div className='text-start w-full'>
                    <p>Email*</p>
                    <input {...register("SellerEmail", {required:true})} type='email' className='w-full input text-lg' placeholder='Seller Name'></input>
                </div>
            </div>
            <div className='text-start w-full'>
                <p>Business / Store Name*</p>
                <input {...register("BusinessName", {required:true})} type='text' className='w-full input text-lg' placeholder='business / store Name'></input>
            </div>

            <div className='text-start w-full'>
                <p>Seller NID*</p>
                <input {...register("SellerNid", {required:true, maxLength: 9})} type='number' className='w-full input text-lg' placeholder='e.g: 73462937'></input>
            </div>

            <div className='flex gap-5 w-full flex-col lg:flex-row'>
                <div className='text-start w-full'>
                    <p>Number*</p>
                    <input {...register("SellerNumber", {required:true, maxLength:11})} type='number' className='w-full input text-lg' placeholder='01xxxxxxxxx'></input>
                </div>



                <div className='text-start w-full'>
                    <p>Support email*</p>
                    <input {...register("SellerSupportEmail", {required:true})} type='email' className='w-full input text-lg' placeholder='example@mail.com'></input>
                </div>
            </div>

            <div className='flex gap-5 w-full flex-col lg:flex-row'>
                <div className='text-start w-full'>
                    <p>Business type*</p>
                    <select {...register("BusinessType", {required:true})} name="country_code" className='w-full select' required>
                        <option value="Individual">Individual</option>
                        <option value="Online Based">Online Based</option>
                        <option value="Organization">Organization</option>
                    </select>
                </div>
                <div className='text-start w-full'>
                    <p>Location*</p>
                    <input {...register("StoreLocation", {required:true})} type='text' className='w-full input text-lg' placeholder='e.g Dhaka, Bangladesh'></input>
                </div>
            </div>


            <div className='text-start w-full'>
                <p>Product Category*</p>
                <select {...register("ProductCategory", {required:true})} name="country_code" className='w-full select' required>
                    <option value="Food">Food</option>
                    <option value="Home appliense">Home appliense</option>
                    <option value="Skin care">Skin care</option>
                    <option value="Baby food and toys">Baby food and toys</option>
                    <option value="Gadget accesories">Gadget accesories</option>
                    <option value="Fashhion">Fashhion</option>
                </select>
            </div>
            <div className='text-start w-full'>
                <p>Business license no</p>
                <input {...("LicenseNo", {required:true, maxLength:10})} type='number'   className='w-full  input text-lg' placeholder='e.g: 73462937'></input>
            </div>
            <div className='flex gap-5 w-full flex-col lg:flex-row'>
                <div className='text-start w-full'>
                    <p>Bank Acc Name*</p>
                    <input {...register("BankAccName", {required:true})} type='text' className='w-full input text-lg' placeholder='account name'></input>
                </div>

                <div className='text-start w-full'>
                    <p>Account Number*</p>
                    <input {...register("AccNumber", {required:true, maxLength:10})} type='number' className='w-full input text-lg' placeholder='e.g 38463845454'></input>
                </div>
                <div className='text-start w-full'>
                    <p>Bank Name*</p>
                    <select {...register("BankName", {required:true})} name="country_code" className='w-full select' required>
                        <option value="Dutch Bangla Bank">Dutch Bangla Bank</option>
                        <option value="Brac Bank">Brac Bank</option>
                        <option value="Islami Bank">Islami Bank</option>
                        <option value="IFIC Bank">IFIC Bank</option>
                        <option value="Bank Asia">Bank Asia</option>
                        <option value="Sonali Bank">Sonali Bank</option>
                    </select>
                </div>
                <div className='flex  w-full'>
                    <div className='text-start w-full'>
                        <p>Mobile banking*</p>
                        <select {...register("MobileBankingName", {required:true})} name="country_code" className='w-full select' required>
                            <option value="Bkash">Bkash</option>
                            <option value="Nagad">Nagad</option>
                            <option value="Rocket">Rocket</option>
                        </select>
                    </div>
                    <div className='text-start w-full'>
                        <p>Number*</p>
                        <input {...register("MobileBankingNumber" , {required:true , maxLength:11 })} type='number' className='w-full input text-lg' placeholder='01xxxxxxxxx'></input>
                    </div>
                </div>
            </div>

            <button type='submit' className='mt-12 btn bg-orange-500 text-white w-full'>Submit</button>
        </form>
    );
};

export default SellerForm;