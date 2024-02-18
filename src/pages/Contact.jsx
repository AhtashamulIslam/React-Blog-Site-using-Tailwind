import React from 'react'
import SharedHeading from '../components/SharedHeading'

const Contact = () => {
  return (
    
    <div>
      <SharedHeading heading={'Contact Us'} />
      <div className='bg-gray-300 space-y-5'>
        <form className='max-w-xl mx-auto p-5 space-y-3'>
          <div className='space-y-2'>
            <label className='font-semibold text-md  text-gray-500'>Name </label>
            <input type='name' name='name' id='name' placeholder='John parker' className='w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium outline-none text-gray-600 focus:border-orange-600 focus:shadow-md'/>
          </div>
          <div className='space-y-2'>
            <label className='font-semibold text-md  text-gray-500'>Email </label>
            <input type='email' name='email' id='email' placeholder='example@gmail.com' className='w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium outline-none text-gray-600 focus:border-orange-600 focus:shadow-md'/>
          </div>
          <div className='space-y-2'>
            <label className='font-semibold text-md  text-gray-500'>Location </label>
            <input type='address' name='address' id='address' placeholder='Your location' className='w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium outline-none text-gray-600 focus:border-orange-600 focus:shadow-md' />
          </div>
          <div className='space-y-2'>
            <label className='font-semibold text-md  text-gray-500'>Comments </label>
            <textarea type='name' name='name' id='name' placeholder='Your comments here...'   className='w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium outline-none text-gray-600 focus:border-orange-600 focus:shadow-md' rows='6'></textarea>
          </div>
          <button className='hover:shadow-md rounded-md bg-indigo-600 hover:bg-orange-600 px-8 py-3 text-base font-semibold outline-none text-white transition-all duration-200 w-full'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
