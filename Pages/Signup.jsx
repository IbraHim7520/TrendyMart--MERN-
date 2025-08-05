import React from 'react';
import RocketImg from "../assets/signup_side_img.jpg"
import { Link } from 'react-router';
const Signup = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>
            <div className='container p-5  mx-auto flex flex-col lg:flex-row justify-center  items-center space-y-5  rounded-lg'>
                <div className='w-full lg:w-2/4 h-fit'>
                    <img className='h-full' src={RocketImg}></img>
                </div>

                <div className='w-full flex justify-center items-center lg:w-2/4 h-full'>
                    <form className="bg-white text-gray-500  w-full mx-4 md:p-6 p-4 py-8 flex flex-col items-center text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
                       <h1 className='text-center font-bold text-3xl mb-8 md:text-4xl lg:text-5xl'>Signup</h1>
                        
                        <label htmlFor="fileInput" className="border bg-white text-center mb-5 rounded-full text-sm w-52 border-indigo-600/60 p-8 flex flex-col items-center gap-4  cursor-pointer hover:border-indigo-500 transition">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.665 3.667H11a3.667 3.667 0 0 0-3.667 3.666v29.334A3.667 3.667 0 0 0 11 40.333h22a3.667 3.667 0 0 0 3.666-3.666v-22m-11-11 11 11m-11-11v11h11m-7.333 9.166H14.665m14.667 7.334H14.665M18.332 16.5h-3.667" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-gray-500">Drag & drop your files here</p>
                            <p className="text-gray-400">Or <span className="text-indigo-500 underline">click</span> to upload</p>
                            <input id="fileInput" type="file" className="hidden" />
                        </label>
                        
                        <div className="flex items-center w-full my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.125 13.125a4.375 4.375 0 0 1 8.75 0M10 4.375a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input className="w-full outline-none bg-transparent py-2.5" type="text" placeholder="Username" required />
                        </div>
                        <div className="flex w-full items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" />
                            </svg>
                            <input className="w-full outline-none bg-transparent py-2.5" type="email" placeholder="Email" required />
                        </div>
                        <div className="flex w-full items-center mt-2 mb-8 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" />
                            </svg>
                            <input className="w-full outline-none bg-transparent py-2.5" type="password" placeholder="Password" required />
                        </div>
                            <div className="flex w-full items-center mt-2 mb-8 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" />
                            </svg>
                            <input className="w-full outline-none bg-transparent py-2.5" type="password" placeholder="Confirm Password" required />
                        </div>
                        <button className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">Create Account</button>
                        
                        <hr className=''></hr>
                        <p className='text-center my-3 text-xl text-black'>----------Or----------</p>
                        <button class="btn bg-white w-full text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        
                        <p className="text-center mt-4">Already have an account? <Link to={"/user-login"}  className="text-blue-500 underline">Log In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;