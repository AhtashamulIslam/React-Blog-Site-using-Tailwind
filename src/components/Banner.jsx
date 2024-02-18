import React from 'react'
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Banner = () => {
  return (
    <div className='px-4 py-32 text-center bg-black mx-auto'>
        <div className='text-white '>
            <h1 className='text-5xl lg:text-7xl leading-$nug font-bold mb-5'>Welcome To Our Blogs</h1>
            <p className='text-gray-100 mb-5 font-primay'>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas.<br></br> We offer everything you need to get started, from helpful tips and tutorials.</p>
            <div>
                <Link to='/' className='font-medium hover:text-orange-500 inline-flex items-center'>Learn more <FaArrowRight className='mt-1.5 ml-2'/></Link>
            </div>
        </div>
      
    </div>
  )
}

export default Banner
