import React from 'react'
import Fire from '../assets/fire.png'
import DummyFire from "../assets/fire-incident.jpg"

const AlertCard = () => {
  return (
    <div className='flex flex-col justify-evenly h-70 w-120 border bg-white border-gray-100 rounded-md p-7'>
    
        <div className='flex flex-row gap-2 items-center justify-between'>
        <div className='flex flex-row gap-2 items-center'>
            <img className='h-8' src={Fire} alt="alert symbol" />
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-sm text-black font-medium'>Fire Detected</h1>
                <p className='text-sm text-gray-500 font-medium'>644 Camden Ave</p>
            </div>
        </div>
                <p className='text-sm text-gray-500 font-medium'>10 min ago</p>
        </div>

        <div className='flex flex-row  justify-center gap-8 m-4'>
            <img className='h-26 rounded-md border border-gray-100' src={DummyFire} alt="" />

            <div className='flex flex-col items-center gap-3'>
                <p className='text-left line-clamp-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the iLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i</p>
                <div className='flex flex-row items-center gap-5'>

                <button className='bg-white hover:bg-gray-100 text-sm text-black px-6 py-2 rounded-md border border-gray-300 cursor-pointer'>View</button>
                <button className='bg-red-600 hover:bg-red-700 text-sm text-black px-6 py-2 rounded-md border border-gray-300 cursor-pointer'>Report</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AlertCard
