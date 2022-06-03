import { createContext,useContext,useEffect,useState } from "react";
import {auth} from '../firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
const AuthContext=createContext();
export function AuthContextProvide({children}){
    const [user,setUser]=useState({})
    return(
        
        <AuthContext.Provide>
        {children}
        </AuthContext.Provide>
    )
}
export function UserAuth(){
    return useContext(AuthContext)
}