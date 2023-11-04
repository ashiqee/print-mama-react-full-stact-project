import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/Firebase/firebase.config";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setCurrentUser]= useState(null);
    const [loading,setLoading]= useState(true);


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);

    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setCurrentUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })

        return ()=>{
            return unSubcribe();
        }

    },[])





const providerInfo={
    user,
    createUser,
    signInUser,
    loading,
    logOut,
    googleLogin,

}


    return <AuthContext.Provider value={providerInfo}> {children} </AuthContext.Provider>
};

export default AuthProvider;