import React from 'react'
import Laptop from '../assets/Laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white px-4 py-16'>
      <div className='mx-auto grid max-w-[1240px] md:grid-cols-2'>
        <img src={Laptop} alt='Laptop' className='mx-auto my-4 w-[5OOpx]' />
        <div className='flex flex-col items-center justify-center sm:items-center md:items-start'>
          <p className='font-bold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='sm:text-xl2 py-2 text-center text-2xl font-bold sm:text-left md:text-xl'>
            Manage Data Analytics Centrally
          </h1>
          <p className='text-center sm:text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus placeat deserunt exercitationem ducimus unde. Facilis
            dolor blanditiis saepe facere atque eligendi fugit temporibus, ea
            quo, accusantium nam veniam ipsam aliquam.
          </p>
          <button className='mx-auto my-6 w-[200px] rounded-md bg-black py-6 font-medium text-[#00df9a] md:mx-0'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
