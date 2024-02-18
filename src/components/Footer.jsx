import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-900 pb-8'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-16'>
        <div className='grid lg:grid-cols-6'>
            <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                <div><p className='font-medium tracking-wide text-gray-300'>Category</p>
                <ul className='space-y-2 mt-2'>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>International</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Sports</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
                    </li>
                </ul>
                </div>
                <div><p className='font-medium tracking-wide text-gray-300'>Apples</p>
                <ul className='space-y-2 mt-2'>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>eCommerce</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                    </li>
                </ul>
                </div>
                <div><p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                <ul className='space-y-2 mt-2'>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Nonprofit</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                    </li>
                </ul>
                </div>
                <div><p className='font-medium tracking-wide text-gray-300'>Business</p>
                <ul className='space-y-2 mt-2'>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Infopreneur</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personnel</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5 '><p className='font-medium tracking-wide text-gray-300'>Subscribe for Updates</p>
                <form className='mt-4 flex flex-col md:flex-row gap-2'>
                    <input type='email' placeholder='Enter your email' name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none focus:bg-slate-600 focus:text-white'/>
                    <button type='submit' className='px-6 h-12 border text-white hover:bg-orange-500 rounded font-medium transition duration-150 hover:border-none'>Subscribe</button>
                </form>
                <p className='mt-4 text-sm text-gray-500'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aut quaerat unde soluta? Necessitatibus nam, fugiat, velit nobis porro quos ab non modi rem libero consectetur dolorum, ut labore corporis.
                </p>
                </div>
        </div>
        <div className='flex flex-col justify-between mt-8 pt-5 pb-10 border-t border-gray-800 lg:flex-row'>
            <p className='text-gray-500 text-sm'>© Copyright 2023 | All rights reserved.</p>
            <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                <a href='' className='text-gray-500 hover:text-teal-400 transition-all duration-300'><FaTwitter className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 hover:text-teal-400 transition-all duration-300'><FaInstagram className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 hover:text-teal-400 transition-all duration-300'><FaFacebook className='h-6 w-6'/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
