import React from 'react'
import PlaceHolder from "../assets/image_placeholder.png"
import AlertCard from './AlertCard'
import NearbyUsers from './NearbyUsers'

const HomeHero = () => {
  return (
    <div className='flex flex-row  justify-between gap-10 m-10'>

        <div className='flex flex-col  justify-center gap-10'>
        
        {/** Left side :Incident Detection */}
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl text-black font-bold'>Smart Incident Detection</h1>
            <div className='flex flex-col items-center justify-center rounded-md h-100 w-160 bg-white border border-gray-100 m-5'>
            <img className='h-40' src={PlaceHolder} alt="" />
            </div>
            <p>Upload or take a picture to begine detection</p>
            <div className='flex flex-row items-center justify-center gap-6 m-5'>

                <button className='bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-blue-600'>Take a Picture</button>
                <button className='bg-white border border-gray-200 textt-black px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-gray-100'>Upload a Picture</button>

            </div>
        </div>
            <NearbyUsers/>
        </div>
        {/**Right Side: Recent Alert */}
        <div className='flex flex-col items-center  gap-5 min-h-screen'>
            <h1 className='text-2xl text-black font-bold'>Recent Alerts</h1>
            <AlertCard/>
            <AlertCard/>
            <AlertCard/>


        </div>
    </div>
  )
}

export default HomeHero
