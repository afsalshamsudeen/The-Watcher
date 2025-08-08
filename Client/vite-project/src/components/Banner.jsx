import React from 'react'
import Logo from "../assets/pixelated-w.png"
import BG from "../assets/home_bg.jpg"
import {useNavigate} from "react-router-dom"

const Banner = () => {

  const navigate = useNavigate();

  const handleGetStarted = () =>{
    navigate('/login')
  }
  return (
    <div className="bg-cover bg-center h-[350px] relative z-0"
            style={{ backgroundImage: `url(${BG})` }}>
      <div className='flex flex-col items-center justify-center gap-4 pt-20'>
            <div className='flex flex-row items-center gap-3'>
                <img className='w-16' src={Logo} alt="" />
                <h1 className='text-3xl font-bold text-white'>The Watcher</h1>
            </div>
            
            <p className='text-white'>AI-powered safety at your finger tips.</p>
            <button onClick={handleGetStarted} className='bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-blue-600'>Start Detecting</button>
            <p className='text-white cursor-pointer'>Learn more</p>
        </div>
        </div>
  )
}
//font-family: "Roboto", sans-serif;
export default Banner
