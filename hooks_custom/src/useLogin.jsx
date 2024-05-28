import { useState } from "react";
import Cookies from 'js-cookie';
export const useLogin=()=>{
    const [isLog,setislog]=useState()
    const handlelogin=()=>{
        Cookies.set('login','true');
        setislog(true);
    }
    const handlelogout=()=>{
        Cookies.remove('login');
        setislog(false);
    }
    return{
        isLog,handlelogin,handlelogout,
    }
}