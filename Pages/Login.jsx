import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import useAuth from '../CustomHooks/useAuth';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
const Login = () => {
    const [loginLoading , setLoginLoading] = useState(false)
    const [ggleLoading , setggleLoading] = useState(false);
    const {UserLogin , googleLogin} = useAuth();
    const navigate = useNavigate()
    const {register, handleSubmit } = useForm()
    
    const handleGoogleLogin = () =>{
        setggleLoading(true)
                googleLogin()
        .then(res=>{
            setggleLoading(false)
            navigate('/', {
                replace: true
            })
            toast.success("Log in successfull!")
        }).catch(err=>{
            console.log(err)
            setggleLoading(false)
            toast.error("Failed to Login! Please try again.")
        })
    }
    const onSubmit = (data) =>{
        setLoginLoading(true)
        const {Email , Password} = data;
        UserLogin(Email , Password)
        .then(res =>{
            if(res?.user){
               setLoginLoading(false)
                    toast.success("Login Success.");
                    navigate("/", {replace: true})
            }
           
        }).catch(err=>{
            setLoginLoading(false)
            console.log(err);
        })
    }
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>
            <div className='p-5 container mx-auto flex flex-col items-center space-y-5 bg-orange-50 rounded-lg'>
                <h1 className='text-center font-bold text-3xl md:text-4xl lg:text-5xl'>Login</h1>
                <p className='text-sm md:text-lg lg:text-xl font-semibold text-gray-700 text-center'>Welcome back with us, Start your journy with a new experience</p>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white mt-12  text-gray-500 w-full md:w-2/4  mx-4 md:p-6 p-5 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
                    
                    <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                        <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                        <input {...register("Email", {required:true} )} className="w-full outline-none bg-transparent py-2.5" type="email" placeholder="Email" required />
                    </div>
                    <div className="flex items-center mt-2 mb-8 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                        <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                        <input {...register("Password", {required:true})} className="w-full outline-none bg-transparent py-2.5" type="password" placeholder="Password" required />
                    </div>
                    <button  className="w-full mb-3 bg-orange-500  hover:bg-orange-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">
                        {
                            loginLoading ? <spa className="loading loading-spinner text-white text-center"></spa>
                            :
                            "Login"
                        }
                    </button>
                    <hr className='my-5'></hr>
                    <p className='text-center text-xl text-black'>----------Or----------</p>

                    <button onClick={handleGoogleLogin} className="btn bg-white w-full text-black border-[#e5e5e5]">
                        {
                            ggleLoading ? 
                            <span className='loading loading-spinner text-center text-orange-400'></span>
                            :
                            <div className='flex justify-center items-center gap-1'>
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                <p>Login with Google</p>
                            </div>
                        }
                    </button>
                    <p className="text-center mt-4">Don't have an account? <Link to={"/user-signup"} href="#" className="text-blue-500 underline">Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;