import React from 'react'

const Footer = () => {
  return (

    <div className='flex flex-col justify-center items-center gap-2'>

    <div className='flex flex-row items-center justify-center gap-10 pt-20'>
      <p className='text-sm font-light'>Privacy</p>
      <p className='text-sm font-light'>Terms</p>
      <p className='text-sm font-light'>Contact</p>
    </div>

    <div className='flex justify-center items-center'>

        <p className='text-sm font-light'>© 2025 Watcher - For a Better Tomorrow</p>

    </div>
        <div className='h-8 w-full bg-[#DCDCDC]' ></div>
    </div>
  )
}

export default Footer
