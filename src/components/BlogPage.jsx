import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import Pagination from './Pagination'
import CategoryNavbar from './CategoryNavbar'
import SideBar from './SideBar'

const BlogPage = () => {
   const [blogs,setBlogs]=useState([])
   const [currentPage,setCurrentPage]=useState(1)
   const blogNumber=12 //Number of Blogs per page.
   const [selectedCategory,setSelectedCategory]=useState(null)
   const [activeCategory,setActiveCategory]=useState(null)

   useEffect(()=>{
       async function fetchBlogs(){
          let url=`https://blog-server-side-ten.vercel.app/blogs?page=${currentPage}?&limit=${blogNumber}`
          //Filter by Category
          if(selectedCategory){
            url+=`&category=${selectedCategory}`
          }
          const response=await fetch(url)
          const data=await response.json()
          setBlogs(data)
       }
       fetchBlogs()
   },[currentPage,blogNumber,selectedCategory])
   //Handle the pagination with page changing Button.
     const handlePageChange=(pageNumber)=>{
           setCurrentPage(pageNumber)
     }
     //Handle Category from Category Navbar.
     const handleCategoryChange=(category)=>{
         setSelectedCategory(category)
         setCurrentPage(1)
         setActiveCategory(category)
     }
    return (
    <div>
      {/* Category Navigation of Blogs */}
      <div>
        <CategoryNavbar onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>
      {/* Blogs Render Area and Sidebar Also */}
      <div className='flex flex-col lg:flex-row gap-5'>
        <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} blogNumber={blogNumber}/>
        {/* Sidebar component */}
      <div>
        <SideBar />
      </div>
      </div>
      
      {/* Pagination */}
      <div>
        <Pagination onPageChange={handlePageChange} blogs={blogs} currentPage={currentPage} blogNumber={blogNumber} />
      </div>
    </div>
  )
}

export default BlogPage

