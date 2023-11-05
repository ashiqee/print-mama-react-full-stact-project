import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/Firebase/firebase.config";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setCurrentUser]= useState(null);
    const [loading,setLoading]= useState(true);
    const axiosSecure = useAxiosSecure()


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

            const userEmail = currentUser?.email || user?.email;
            const loggedUser ={email: userEmail};

            setCurrentUser(currentUser)

            console.log(currentUser);
            setLoading(false)

            //if user exits then a token
            if(currentUser){
                axiosSecure.post("/jwt",loggedUser)
            }else{
                axiosSecure.post('/logout',loggedUser)

                .then(res=>{console.log(res.data)})
            }
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