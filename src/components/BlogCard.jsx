import React from 'react'
import {Link} from 'react-router-dom'
import { FaUser } from 'react-icons/fa6'

const BlogCard = ({blogs,currentPage,selectedCategory,blogNumber}) => {
    const filterBlogs=blogs.filter((blogs)=>!selectedCategory || blogs.category===selectedCategory).slice((currentPage-1)*blogNumber,currentPage*blogNumber)
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
        filterBlogs.map((blog)=>
          <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg cursor-pointer'>
            <div>
                <img src={blog.image} className='w-full' />
            </div>
            <h3 className='mt-4 mb-2 font-bold cursor-pointer hover:text-blue-600'>{blog.title}</h3>
            <p className='mb-2 text-gray-500'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
            <p className='mb-2 text-sm text-gray-600'>Published : {blog.published_date}</p>
          </Link>
        )
      }
    </div>
  )
}

export default BlogCard
