import React from 'react'
import AI from "../assets/ai.png"
import Alert from "../assets/notification.png"
import Sheild from "../assets/guard.png"

const Cards = () => {
  return (
    <div className='flex flex-col items-center justify-center p-10 gap-8'>
      <h1 className='text-black text-3xl font-bold'>How It Works</h1>

      <div className='flex flex-row items-center justify-center p-10 gap-18'>

            <div className='flex flex-col items-center justify-center gap-3'>
                <img className='h-26' src={AI} alt="" />
                <h1 className='font-medium text-center'> Ai detects an incident</h1>
            </div>

            <div className='flex flex-col items-center justify-center gap-3'>
                <img className='h-26' src={Alert} alt="" />
                <h1 className='font-medium text-center'> Users nearby gets alerts</h1>
            </div>

            <div className='flex flex-col items-center justify-center gap-3'>
                <img className='h-26' src={Sheild} alt="" />
                <h1 className='font-medium text-center'> Authorities notified instantly</h1>
            </div>
      </div>
    </div>
  )
}

export default Cards
