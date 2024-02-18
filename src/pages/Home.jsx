import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='max-w-7xl mx-auto px-16'>
        <BlogPage />
      </div>
    </div>
  )
}

export default Home
