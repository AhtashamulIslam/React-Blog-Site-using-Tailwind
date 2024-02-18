import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const [popularBlogs,setPopularBlogs]=useState([])
    useEffect(()=>{
        fetch('https://blog-server-side-ten.vercel.app/blogs')
        .then(res=>res.json())
        .then(data=>setPopularBlogs(data.slice(0,15)))
    },[])

  return (
    <div>
      <div className='ml-7'>
        <h3 className='text-2xl font-semibold px-10 mb-4'>Latest Blogs</h3>
        <hr></hr>
        {
          popularBlogs.slice(0,5).map(blog=><div key={blog.id} className='px-4 my-4 border-b-2 border-spacing-2'>
               <h4 className='font-medium mb-2'>{blog.title}</h4>
               <Link to='/' className='text-base pb-2 hover:text-orange-500 inline-flex items-center'>Read more <FaArrowRight className='mt-1.5 ml-2'/></Link>
            </div>)
        }

      </div>
      {/* Popular Blogs */}
      <div className='ml-7'>
        <h3 className='text-2xl font-semibold px-10 mb-4'>Popular Blogs</h3>
        <hr></hr>
        {
          popularBlogs.slice(6,10).map(blog=><div key={blog.id} className='px-4 my-4 border-b-2 border-spacing-2'>
               <h4 className='font-medium mb-2'>{blog.title}</h4>
               <Link to='/' className='text-base pb-2 hover:text-orange-500 inline-flex items-center'>Read more <FaArrowRight className='mt-1.5 ml-2'/></Link>
            </div>)
        }
      </div>
    </div>
  )
}

export default SideBar
