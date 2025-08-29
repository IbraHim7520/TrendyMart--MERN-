import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
 import useAuth from '../../../CustomHooks/useAuth.jsx';

const ProductManagement = () => {
   const {userInfo} = useAuth()
  const [imgurl, setImgurl] = useState(Array(2).fill(null))
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const { register, watch, handleSubmit, setValue, reset } = useForm()
  console.log(products)
  useEffect(()=>{
    const getSellerProducts = async()=>{
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/seller-products/${userInfo?.email}`);
      setProducts(response?.data);
    }
    getSellerProducts()
  },[userInfo])
  const mutation = useMutation({
    mutationFn: async (ProductData) => {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/post-product`, { ProductData })
      return response?.data?.message
    },
    onSuccess: (data, ProductData) => {
      toast.success("Product Uploaded")
      reset()
      setLoading(false)
      setProducts(
        (prev) => [...prev, ProductData]
      )
      setImgurl(Array(2).fill(''))

    },
    onError: (err) => {
      toast.error("Something went wrong!")
      setLoading(false)

    }
  })

  const handleImageSelect = (e, i) => {
    if (e.target.files && e.target.files[0]) {
      const newImgUrl = [...imgurl];
      newImgUrl[i] = URL.createObjectURL(e.target.files[0]);
      setImgurl(newImgUrl);
      setValue(`Images.${i}`, e.target.files[0])
    }
  };
  const uploadImageOnCloudinary = async (imgFile) => {
    const formData = new FormData();
    formData.append("file", imgFile);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDE_PRESET);

    const response = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDE_NAME}/image/upload`, formData)
    return response?.data?.secure_url
  }

  const onSubmit = async (data) => {
    setLoading(true)
    console.log("Form Data:", data);
    console.log("Selected Images:", data.Images); // Array of File objects
    const ImagesURL = await Promise.all(data.Images.map((img) => uploadImageOnCloudinary(img))) // uploded images file url from cloudinary
    data.inStock = true
    data.Reviews = [];
    data.Ratings = 0.0;
    data.Images = ImagesURL;
    data.Owner = userInfo?.email;
    mutation.mutate(data);
  };


  return (
    <div className='w-full min-h-screen items-center p-5 grid grid-cols-1 lg:grid-cols-2 justify-center justify-items-center'>

      <div className='w-full h-fit bg-white rounded-lg shadow '>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-full space-y-2 p-5 flex flex-col'>
          <h1 className='text-center text-xl lg:text-2xl 3xl:text-3xl font-medium text-gray-5060 '>Add new product</h1>

          <div className='w-full flex justify-center gap-5 items-center'>
            {imgurl.map((img, index) => (
              <div key={index} >
                <label htmlFor={`image${index}`}>
                  <input
                    {...register(`Images.${index}`)}
                    onChange={(e) => handleImageSelect(e, index)}
                    accept="image/*"
                    type="file"
                    id={`image${index}`}
                    hidden
                  />
                  <img
                    className="max-w-24 cursor-pointer"
                    src={img || "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"}
                    alt="uploadArea"
                    width={100}
                    height={100}
                  />
                </label>
              </div>
            ))}

          </div>
          <div className='w-full'>
            <label className='text-sm'>Name*</label>
            <input {...register("ProductName")} className='w-full input' type='text' placeholder='product name'></input>
          </div>

          <div className='w-full'>
            <label className='text-sm'>Description*</label>
            <textarea {...register("ProductDescription")} className='w-full textarea' type='text' placeholder='description'></textarea>
          </div>

          <div className='w-full gap-0 md:gap-5 flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full'>
              <label className='text-sm'>Offer Price*</label>
              <input {...register("OfferPrice")} className='w-full input' type='number' placeholder='offer price'></input>
            </div>
            <div className='w-full'>
              <label className='text-sm'>Price*</label>
              <input {...register("Price")} className='w-full input' type='number' placeholder='price'></input>
            </div>
          </div>

          <div className='w-full gap-0 md:gap-5 flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full'>
              <label className='text-sm'>Category*</label>
              <select {...register("Category")} className='w-full select'>
                <option>Man</option>
                <option>Woman</option>
                <option>Watch</option>
                <option>Skin Care</option>
                <option>Shoes</option>
                <option>Jwellary</option>
              </select>
            </div>
            <div className='w-full'>
              <label className='text-sm'>Size</label>
              <input  {...register("Size" || "N/A")} className='w-full input' type='text' placeholder='size (separate by coma (,) )'></input>
            </div>
          </div>

          <div className='flex flex-col md:flex-row  gap-0 md:gap-5'>
            <div className='w-full'>
              <label className='text-sm'>Avaibility*</label>
              <select {...register("Avaibility")} className='w-full select'>
                <option>In Stock</option>
                <option>Pre-Order</option>
                <option>Upcomming</option>
              </select>
            </div>

            <div className='w-full'>
              <label className='text-sm'>Quantity*</label>
              <input {...register("Quantity")} className='w-full input' type='number' placeholder='quantity'></input>
            </div>
          </div>







            <button className='btn btn-sm lg:btn btn-secondary text-white'>
              {
                loading ? <span className='loading loading-spinner text-center'></span> : "Add product"
              }
            </button>

        </form>
      </div>

     <div className="w-full">
  <div className="flex-1 py-10 flex flex-col justify-between">
    <div className="w-full md:p-10 p-4">
      <h2 className="pb-4 text-lg font-medium">All Products</h2>
      
      {/* Scroll wrapper for small screens */}
      <div className="w-full overflow-x-auto rounded-md bg-white border border-gray-500/20">
        <table className="table-auto w-full text-left">
          <thead className="text-gray-900 text-xs sm:text-sm">
            <tr>
              <th className="px-2 md:px-4 py-3 font-semibold truncate">Product</th>
              <th className="px-2 md:px-4 py-3 font-semibold truncate">Category</th>
              <th className="px-2 md:px-4 py-3 font-semibold truncate hidden md:table-cell">Selling Price</th>
              <th className="px-2 md:px-4 py-3 font-semibold truncate">In Stock</th>
            </tr>
          </thead>

          <tbody className="text-gray-500 text-xs sm:text-sm">
            {products.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-10">
                  No Products yet!
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={index} className="border-t border-gray-500/20">
                  {/* Product Image + Name */}
                  <td className="px-2 md:px-4 py-3 flex items-center gap-3">
                    <div className="border border-gray-300 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={product?.Images[0]}
                        alt="Product"
                        className="w-12 h-12 md:w-16 md:h-16 object-cover"
                      />
                    </div>
                    <span className="truncate">{product?.ProductName}</span>
                  </td>

                  {/* Category */}
                  <td className="px-2 md:px-4 py-3">{product?.Category}</td>

                  {/* Selling Price (hidden on mobile) */}
                  <td className="px-2 md:px-4 py-3 hidden md:table-cell">
                    ${product?.OfferPrice}
                  </td>

                  {/* In Stock Switch */}
                  <td className="px-2 md:px-4 py-3">
                    <label className="relative inline-flex items-center cursor-pointer text-gray-900">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={product.inStock}
                      />
                      <div className="w-11 h-6 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </label>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ProductManagement;







