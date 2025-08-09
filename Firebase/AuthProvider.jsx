import React, { useEffect, useState } from 'react';
import AuthenticationContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from './firebase.config';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [userInfo , setUserInfo] = useState(null);
    const [UserRole , setuserRole] = useState(null);

    useEffect( ()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUserInfo(user)
            }else{
                setUserInfo(null)
            }
        })
    }, [] )
    useEffect( ()=>{
        const fetchUserRole = async () =>{
        if(userInfo){
        const roleData =  await axios.get(`${import.meta.env.VITE_API_URL}/get-role/${userInfo?.email}`)
        setuserRole(roleData?.data)
        }
        }
        fetchUserRole()
    }, [userInfo] )
    const googleLogin = () =>{
        return signInWithPopup(auth, provider)
    }

    const UserLogin = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password)
    }

    const userSignUp = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const userLogout = ()=>{
        return signOut(auth);
    }

    const AuthInfo  = {
        UserLogin,
        userInfo,
        googleLogin,
        userSignUp,
        userLogout,
        UserRole

    }

    return (
       <AuthenticationContext value={AuthInfo}>
        {children}
       </AuthenticationContext>
    );
};

export default AuthProvider;