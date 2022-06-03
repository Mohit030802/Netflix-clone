import { createContext,useContext,useEffect,useState } from "react";
import {aut} from '../firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
const AuthContext=createContext();
export function AuthContextProvide({children}){
    return(
        <AuthContext.Provide>
        {children}
        </AuthContext.Provide>
    )
}
export function UserAuth(){
    return useContext(AuthContext)
}