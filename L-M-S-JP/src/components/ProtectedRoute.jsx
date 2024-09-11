import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/Firebase-config';

function ProtectedRoute({Components}) {
    let navigate = useNavigate();
    let [loading,setLoading] = useState(true);
    useEffect(()=>{
        const logincheck = onAuthStateChanged(auth,(user)=>{
          if(!user){
            navigate("/login");
          }else{
            setLoading(false);
          }
        });

        return ()=> logincheck();
      },[navigate]);

  return (
    <>
    {
        loading ? <></> :  <Components/> 
    }
    </>
  )
}

export default ProtectedRoute