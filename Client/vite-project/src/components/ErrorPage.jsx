import React from 'react'
import { useNavigate } from 'react-router-dom'
import Error from "../assets/web.png"
const ErrorPage = () => {
    const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center gap-6 p-10'>
        <img className='' src={Error} alt="" />
      <h1 className='text-6xl font-bold text-blue-300'>Opps! Page not found buddy</h1>
      <button onClick={()=> navigate('/')} className='bg-blue-500 text-white px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-blue-600'>Go Home</button>
    </div>
  )
}

export default ErrorPage
