import React from 'react'
import SharedHeading from '../components/SharedHeading'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <div>
    <SharedHeading heading={'Blog Page'} />
    <div className='px-16'>
     <BlogPage />
    </div>
    </div>
  )
}

export default Blogs
