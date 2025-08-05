import React from 'react'
import Alert from "../assets/alert.png"
import Map from "../assets/map.png"
import Community from "../assets/comm.png"

const Details = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-10 -mt-20 z-10 relative'>

      <div className='flex flex-col items-center justify-center gap-4 h-70 w-70 bg-white p-10 rounded-lg shadow-xl/20'>
            <img className='h-16' src={Alert} alt="" />
            <h1 className='font-bold'>Real-Time Alerts</h1>
            <p className='text-center font-thin'>Get notified instantly when danger is detected</p>
      </div>

      <div className='flex flex-col items-center justify-center gap-4 h-70 w-70 bg-white p-10 rounded-lg shadow-xl/20'>
            <img className='h-16' src={Map} alt="" />
            <h1 className='font-bold'>Map Tracking</h1>
            <p className='text-center font-thin'>See incidents and safe zoned nearby</p>
      </div>

      <div className='flex flex-col items-center justify-center gap-4 h-70 w-70 bg-white p-10 rounded-lg shadow-xl/20'>
            <img className='h-16' src={Community} alt="" />
            <h1 className='font-bold'>Community Safety</h1>
            <p className='text-center font-thin'>Check on loved ones during emergencies</p>
      </div>

    </div>
  )
}

export default Details
