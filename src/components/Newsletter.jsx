import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full px-4 py-16 text-white'>
      <div className='mx-auto grid max-w-[1240px] lg:grid-cols-3'>
        <div className='my-4 lg:col-span-2'>
          <h1 className='py-2 text-2xl font-bold sm:text-3xl md:text-4xl'>
            Wants tips & tricks to optimize your flow?
          </h1>
          <p>Si gn up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col items-center justify-between md:flex-row '>
            <input
              className='flex w-full rounded-md py-3 text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='mx-2 my-6 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black'>
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our
            <span className='ml-1 text-[#00df9a]'>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
