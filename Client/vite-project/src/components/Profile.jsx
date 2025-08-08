import React, { useEffect, useState } from 'react'
import { auth, db } from "../firebase.js"
import { doc, getDoc } from "firebase/firestore"

import Avatar from "../assets/cat.png"
import Google from "../assets/google.png"
import SwitchUser from "../assets/user-account.png"
import Exit from "../assets/exit.png"

const Profile = () => {
    const [userDetails, setUserDetails] = useState(null);
  

    const fetchUserDetails = async () =>{
        auth.onAuthStateChanged(async (user) =>{
            const fetchUser = doc(db, "Users", user.uid);
            const docSnap = await getDoc(fetchUser);
            if(docSnap.exists()){
                setUserDetails(docSnap.data())
                
            }
            
        })
    }

    useEffect(()=>{
        fetchUserDetails();
    },[])

    const handleLogOut = async ()=>{
        await auth.signOut();
    }
  return (
    
        
    <div className='absolute right-24 top-10 h-150 w-110 rounded-md bg-[#DCDCDC] flex flex-col  gap-5 p-5 z-50 shadow-md'>

        {/*** mail profile */}
        { userDetails ? (
            <>

<div className='flex flex-row items-start gap-6 p-6'>
            <img className='h-16' src={Avatar} alt="avatar" />
            <div className='flex flex-col'>
                <h1>{userDetails.userName}</h1>
                <p>{userDetails.email}</p>
                <p>Location: <span className='text-blue-600'>{userDetails.location}</span></p>
            </div>
            

        </div>
        <hr className='my-4 border-gray-400' />


        

         {/*** sign out */}
        <div className='-mx-5'>
        <div onClick={()=> window.open('https://myaccount.google.com/', '_blank')} className='flex flex-row items-center gap-5 cursor-pointer hover:bg-gray-100 px-5 py-3'>
            <img className='h-10' src={Google} alt="google" />
            <p className='text-sm font-medium'>Google Account</p>
        </div>
        </div>

        <div className='-mx-5'>
        <div className='flex flex-row items-center gap-5 cursor-pointer hover:bg-gray-100 px-5 py-3'>
            <img className='h-10' src={SwitchUser} alt="switch" />
            <p className='text-sm font-medium'>Switch Account</p>
        </div>
        </div>

        <div className='-mx-5'>
        <div onClick={handleLogOut} className='flex flex-row items-center gap-5 cursor-pointer hover:bg-gray-100 px-5 py-3'>
            <img className='h-10' src={Exit} alt="signout" />
            <p className='text-sm font-medium'>Sign Out</p>
        </div>
        </div>

            </>
        ) : (
            <p>Loading....</p>
        ) }
    </div>
  )
}

export default Profile
