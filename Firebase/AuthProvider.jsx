import React, { useEffect, useState } from 'react';
import AuthenticationContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from './firebase.config';

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [userInfo , setUserInfo] = useState(null);

    useEffect( ()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUserInfo(user)
            }else{
                setUserInfo(null)
            }
        })
    }, [] )

    
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
        userLogout

    }

    return (
       <AuthenticationContext value={AuthInfo}>
        {children}
       </AuthenticationContext>
    );
};

export default AuthProvider;