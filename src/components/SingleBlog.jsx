import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SharedHeading from './SharedHeading'
import { FaClock, FaUser } from 'react-icons/fa6'
import SideBar from '../components/SideBar'

const SingleBlog = () => {
    const data=useLoaderData()
    const {title,image,category,author,published_date,reading_time,content}=data[0] //Loaded from clicking in Single blog and fetched from main.jsx dynamically.
    
  return (
    <div>
      <SharedHeading heading={'Single Blog Page'}/>
      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-8 px-10'>
       <div className='lg:w-3/5 mx-auto space-y-4'>
          <div>
            <img src={image} alt='Blog Image' className='w-full rounded mx-auto' />
          </div>
          <h2 className='text-2xl mb-4 text-blue-500 font-semibold cursor-pointer'>
            {title}
          </h2>
          <p className='text-gray-500 font-semibold'><FaUser className='inline-flex mr-2 items-center' /> {author} | {published_date}</p>
          <p className='text-gray-500 font-semibold'><FaClock className='inline-flex mr-2 items-center' /> {reading_time}</p>
          <p className='text-gray-500 text-base'>{content}</p>
          <div className='text-gray-500 text-base'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, laudantium consequuntur temporibus assumenda accusantium praesentium, mollitia esse ratione quia expedita nisi cumque magnam, at eos dolore quibusdam eum fuga harum.<br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum repudiandae quas neque porro aperiam in corporis ea harum id consequuntur!<br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eveniet aperiam cum nesciunt praesentium? Cum aperiam soluta esse voluptate blanditiis beatae fugiat quasi quidem delectus laboriosam officia eligendi placeat consequuntur tempora labore, illum, repudiandae necessitatibus nihil nulla alias vero. Maiores.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, laudantium consequuntur temporibus assumenda accusantium praesentium, mollitia esse ratione quia expedita nisi cumque magnam, at eos dolore quibusdam eum fuga harum.<br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum repudiandae quas neque porro aperiam in corporis ea harum id consequuntur!<br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eveniet aperiam cum nesciunt praesentium? Cum aperiam soluta esse voluptate blanditiis beatae fugiat quasi quidem delectus laboriosam officia eligendi placeat consequuntur tempora labore, illum, repudiandae necessitatibus nihil nulla alias vero. Maiores.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, laudantium consequuntur temporibus assumenda accusantium praesentium, mollitia esse ratione quia expedita nisi cumque magnam, at eos dolore quibusdam eum fuga harum.<br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum repudiandae quas neque porro aperiam in corporis ea harum id consequuntur!<br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eveniet aperiam cum nesciunt praesentium? Cum aperiam soluta esse voluptate blanditiis beatae fugiat quasi quidem delectus laboriosam officia eligendi placeat consequuntur tempora labore, illum, repudiandae necessitatibus nihil nulla alias vero. Maiores.
            </p>
          </div>
       </div>
       <div className='lg:w-1/3'>
       <SideBar />
       </div>
      </div>
    </div>
  )
}

export default SingleBlog
