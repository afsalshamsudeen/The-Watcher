import React, { useState } from 'react'
import Logo from "../assets/pixelated-w.png"
import Notifications from "../assets/not.png"
import Avatar from "../assets/avatar.png"
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div className='flex flex-row items-center justify-between bg-white border-b border-white sticky top-0 z-50'>
      <div className='flex flex-row items-center justify-center gap-2 p-7 cursor-pointer'>
      <img className='h-8 pl-10' src={Logo} alt="logo" />
      <h1 onClick={()=>navigate('/home')} className='font-bold text-lg'>The Watcher</h1>
      </div>
      <div className='flex flex-row items-center justify-center gap-5 p-7'>
        <p className='cursor-pointer'>Home</p>
        <p className='cursor-pointer'>Incidents</p>
        <p className='cursor-pointer'>Map</p>
        <p className='cursor-pointer'>Dashboard</p>
        <p className='cursor-pointer'>Blog</p>
      </div>
      <div className='flex flex-row items-center justify-center gap-3 p-7'>
        <div className='reletive'>
        <img onClick={()=>setOpen(prev =>!prev)} className='h-6 cursor-pointer' src={Avatar} alt="profile" />
        {open && <Profile setOpen ={setOpen}/>}
        </div>
        <img className='h-6 cursor-pointer' src={Notifications} alt="notifications"/>
      </div>
    </div>
  )
}

export default NavBar
