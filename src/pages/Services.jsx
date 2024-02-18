import React from 'react'
import SharedHeading from '../components/SharedHeading'

const Services = () => {
  return (
    <div>
      <SharedHeading heading={'Our Services'} />
      <h1 className='text-4xl text-center mb-8 max-w-5xl mx-auto my-8 font-extrabold'>Services</h1>
        <hr></hr>
      <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-8 my-8'>
        
        <div className='bg-gray-400 text-black p-4 text-center rounded-md hover:shadow-xl hover:bg-orange-200 hover:transition-all duration-200'>
          <h1 className='font-bold'>Blog Posting</h1>
          <p className='font-'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse repellat voluptas mollitia, perspiciatis optio dolorem?</p>
        </div>
        <div className='bg-gray-400 text-black p-4 text-center rounded-md hover:shadow-xl hover:bg-orange-200 hover:transition-all duration-200'>
          <h1 className='font-bold'>Blog Posting</h1>
          <p className='font-'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse repellat voluptas mollitia, perspiciatis optio dolorem?</p>
        </div>
        <div className='bg-gray-400 text-black p-4 text-center rounded-md hover:shadow-xl hover:bg-orange-200 hover:transition-all duration-200'>
          <h1 className='font-bold'>Content Writing</h1>
          <p className='font-'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse repellat voluptas mollitia, perspiciatis optio dolorem?</p>
        </div>
        <div className='bg-gray-400 text-black p-4 text-center rounded-md hover:shadow-xl hover:bg-orange-200 hover:transition-all duration-200'>
          <h1 className='font-bold'>Cloud Computing</h1>
          <p className='font-'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse repellat voluptas mollitia, perspiciatis optio dolorem?</p>
        </div>
        <div className='bg-gray-400 text-black p-4 text-center rounded-md hover:shadow-xl hover:bg-orange-200 hover:transition-all duration-200'>
          <h1 className='font-bold'>Skill Development</h1>
          <p className='font-'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse repellat voluptas mollitia, perspiciatis optio dolorem?</p>
        </div>
        <div className='bg-gray-400 text-black p-4 text-center rounded-md hover:shadow-xl hover:bg-orange-200 hover:transition-all duration-200'>
          <h1 className='font-bold'>Tech Support</h1>
          <p className='font-'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse repellat voluptas mollitia, perspiciatis optio dolorem?</p>
        </div>
      </div>
    </div>
  )
}

export default Services
