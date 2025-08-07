import React, { useState } from 'react'
import Enter from "../assets/enter.png"
import Email from "../assets/email.png"
import Lock from "../assets/padlock.png"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../firebase.js"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSingin = async (e)=>{
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth,email,password)
      console.log("Sigin Successfully!");
      navigate("/home");
    } catch (error) {
        console.log(error.message);
        
    }
    
  }
    return (
    <div className='h-screen flex items-center justify-center'>
    <div className='flex flex-col items-center justify-center p-8 inset-shadow-2xs bg-white rounded shadow-md w-full max-w-md'>
      <img className='h-10' src={Enter} alt="login" />
      <h1 className='text-3xl font-bold text-black'>Welcome!</h1>
      <p className='text-sm font-light text-gray-500'>Sign in to your account</p>
      <div className='flex flex-col items-center justify-center gap-7 p-10'>
      
      <div className='flex flex-row items-center justify-center gap-2'>
        <img className='h-4' src={Email} alt="" />
      <input type="email"
          placeholder='Email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          className='w-full border-0 border-b border-gray-300 focus:outline-none focus:border-blue-300 placeholder-grey-500 bg-transparent'
      />
      </div>

      <div className='flex flex-row items-center justify-center gap-2'>
        <img className='h-4' src={Lock} alt="" />
        <input type="password"
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full border-0 border-b border-gray-300 focus:outline-none focus:border-blue-300 placeholder-grey-500 bg-transparent'
        />
      </div>
      </div>
        <div className='flex w-full pb-3'>
        <p className='ml-auto text-gray-400 font-light'>Create account? <Link to='/signup' className='text-blue-400'>Register</Link> </p>
        </div>
        <button onClick={handleSingin} className='bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-blue-600'>Sign In</button>
    </div>
    </div>
  )
}

export default Login