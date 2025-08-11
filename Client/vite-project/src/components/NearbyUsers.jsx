import React from 'react'
import Avatar from "../assets/nearby_user.png"
const NearbyUsers = () => {
  return (
    <div className='flex flex-col items-start justify-center h-50 w-160 rounded-md bg-white border border-gray-100 ml-5 p-10'>
      <h1 className='text-lg font-bold'>Nearby Users</h1>
      
      <div className='flex flex-row items-start gap-5 mt-10'>
        <img className='h-14 rounded-lg' src={Avatar} alt="" />
        <img className='h-14 rounded-lg' src={Avatar} alt="" />
        <img className='h-14 rounded-lg' src={Avatar} alt="" />
        <img className='h-14 rounded-lg' src={Avatar} alt="" />
        <img className='h-14 rounded-lg' src={Avatar} alt="" />
        <img className='h-14 rounded-lg' src={Avatar} alt="" />
        <img className='h-14 rounded-lg' src={Avatar} alt="" />
      </div>

    </div>
  )
}

export default NearbyUsers
