import React from 'react'

const Modal = ({isOpen,isClose}) => {
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-900/30 flex justify-center items-center ${isOpen ? '':'hidden'}`}>
        <div className='modal-container'>
          <div className='bg-indigo-700 text-center p-5 h-96 lg:w-[500px] transition-all duration-150 rounded shadow-md'>
            <h2 className='text-xl font-semibold mb-4 mt-6 uppercase space-x-1'>Please Log In Here</h2>
            <form className='px-4 space-y-6'>
               <div>
                <input type='email' name='email' id='email' placeholder='examole@gmail.com' className='w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium outline-none text-gray-600 focus:border-gray-600 focus:shadow-md' />
               </div>
               <div>
                <input type='password' name='password' id='password' placeholder='Enter your password' className='w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium outline-none text-gray-600 focus:border-gray-600 focus:shadow-md' />
               </div>
               <div className='flex justify-center flex-col gap-7 mx-auto lg:flex-row'>
                <button className='hover:shadow-md rounded-md bg-indigo-600 hover:bg-orange-600 px-8 py-3 text-base font-semibold outline-none text-white transition-all duration-200'>Login</button>
                <button className='hover:shadow-md rounded-md bg-gray-600 hover:bg-red-600 px-8 py-3 text-base font-semibold outline-none text-white transition-all duration-200' onClick={isClose}>Close</button>
               </div>
               
            </form>
          </div>
        </div>
      
    </div>
  )
}

export default Modal
