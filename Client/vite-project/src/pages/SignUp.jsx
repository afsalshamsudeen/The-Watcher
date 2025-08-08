import React, { useEffect, useState } from 'react'
import Email from "../assets/email.png"
import Lock from "../assets/padlock.png"
import Person from "../assets/user.png"
import Profile_User from "../assets/profile-user.png"
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth,db } from "../firebase.js"
import {setDoc, doc} from "firebase/firestore"
import Location from "../assets/location.png"
import axios from "axios";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [currentLocation, setCurrentLocation] = useState("");
    const [inputLocation, setInputLocation] = useState("");

    //const navigate = useNavigate();

    const userCity = currentLocation.city;

    const getLocation = async () =>{
        // const location = await axios.get('https://ipwho.is/');
        // setCurrentLocation(location.data);
        // console.log("Location got");
        try {
          const location = await axios.get('https://ipwho.is/');
          if(location.data.success){
            setCurrentLocation(location.data);
          }else{
            console.error("failed to fetch location");
            
          }
        } catch (error) {
          
          console.error("Error fetching location: ",error);
          
        }
        
    }

    const handleSignUp = async (e) =>{
        e.preventDefault();
        const locationToSend =  inputLocation?.trim() ? inputLocation.trim() : userCity?.trim();

        if(!name.trim() || !email.trim() || !password.trim() || !locationToSend){
          alert("Please fill in all fields before signing up!");
          return;
        }

        try {
            await createUserWithEmailAndPassword(auth,email,password);
            const user = auth.currentUser;

            if(user){
              
              await setDoc(doc(db, "Users", user.uid),{
                email:user.email,
                userName: name,
                location: locationToSend,

              })
            }
            console.log("user account created successfully");
            //navigate("/login")
            
            
        } catch (error) {
            console.log(error.message);
            
            
        }
        
    }
    useEffect(()=>{
      if(currentLocation && currentLocation.city && !inputLocation){
        setInputLocation(currentLocation.city)
      }
    },[currentLocation])
    
  return (
    <div className='h-screen flex items-center justify-center'>
    <div className='flex flex-col items-center justify-center p-8 inset-shadow-2xs bg-white rounded shadow-md w-full max-w-md'>
      <img className='h-10' src={Person} alt="SignUp" />
      <h1 className='text-3xl font-bold text-black'>Sign Up</h1>
      <p className='text-sm font-light text-gray-500'>Create an account</p>
      <div className='flex flex-col items-center justify-center gap-7 p-10'>
      
      <div className='flex flex-row items-center justify-center gap-2'>
            <img className='h-4' src={Profile_User} alt="" />
            <input type="text"
                placeholder='Name'
                onChange={(e)=>setName(e.target.value)}
                required
                className='w-full border-0 border-b border-gray-300 focus:outline-none focus:border-blue-300 placeholder-grey-500 bg-transparent'
                />
      </div>

      <div className='flex flex-row items-center justify-center gap-2'>
            <img className='h-4' src={Email} alt="" />
            <input type="email"
                placeholder='Email'
                onChange={(e)=> setEmail(e.target.value)}
                required
                className='w-full border-0 border-b border-gray-300 focus:outline-none focus:border-blue-300 placeholder-grey-500 bg-transparent'
                />
      </div>

      <div className='flex flex-row items-center justify-center gap-2'>
        <img className='h-4' src={Lock} alt="" />
        <input type="password"
            placeholder='Password'
            onChange={(e)=> setPassword(e.target.value)}
            className='w-full border-0 border-b border-gray-300 focus:outline-none focus:border-blue-300 placeholder-grey-500 bg-transparent'
        />
      </div>
      </div>


      {/**Location input */}
      <div className='inline-flex justify-center items-center p-3 h-10 w-full m-4 border border-gray-300 rounded-md bg-white '>
      <input type="text"
                value={inputLocation}
                placeholder='Enter you current location'
                onChange={(e)=>setInputLocation(e.target.value)}
                required
                className='w-full border-0  focus:outline-none placeholder-grey-500 bg-transparent'
                />
      </div>

      <div className='flex flex-col items-start justify-center pb-7'>
      <div onClick={getLocation} className='flex flex-row items-center gap-2 cursor-pointer'>
        <img className='h-6' src={Location} alt="location" />
        <p>Detect my location</p>
      </div>
      </div>

        <button onClick={handleSignUp} className='bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-blue-600'>Sign Up</button>
        <p className='text-gray-400 font-light pt-2'>Already have an account? <Link to='/login' className='text-blue-400'>Sign in</Link> </p>
     
    </div>
    </div>
  )
}

export default SignUp