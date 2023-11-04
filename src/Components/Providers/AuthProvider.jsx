import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/Firebase/firebase.config";


export const AuthContext = createContext();

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

}


    return <AuthContext.Provider value={providerInfo}> {children} </AuthContext.Provider>
};

export default AuthProvider;