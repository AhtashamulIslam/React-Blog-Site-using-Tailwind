import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark } from "react-icons/fa6";
import Modal from './Modal';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)

    const openModal=()=>{
             setIsModalOpen(true)
        }
        const closeModal=()=>{
            setIsModalOpen(false)
       }
    
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    const navItem=[
        {path:'/',link:'Home'},
        {path:'/services',link:'Services'},
        {path:'/blogs',link:'Blogs'},
        {path:'/contact',link:'Contact'},
        {path:'/about',link:'About'}
    ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-5xl mx-auto flex justify-between items-center'>
            <a href='/' className='text-xl font-bold text-white'>Design<span className='text-orange-500'>DK</span></a>
            {/* navItems for lg device */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItem.map(({path,link})=><li className='text-white' key={path}>
                        <NavLink className={({isActive,isPending})=>
                            isActive ? 'active'
                            : ''
                        } to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
            {/* menu Icons */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
            <a href='/' className='hover:text-orange-500'><FaFacebook /></a>
            <a href='/' className='hover:text-orange-500'><FaDribbble /></a>
            <a href='/' className='hover:text-orange-500'><FaTwitter /></a>
            <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in-out'>Log in</button>
        </div>
        {/* Modal Component Will render Here. */}
        
        <Modal isOpen={isModalOpen} isClose={closeModal}/>
        
        {/* Mobile Menu */}
        <div className='md:hidden'>
            <button onClick={toggleMenu} className='cursor-pointer'>
                {
                isMenuOpen ? <FaXmark className='w-5 h-5'/> :<FaBars className='w-5 h-5'/>
                }
                </button>
        </div>
    </nav>
    {/* Menu Items For Small Devices */}
    <div>
    
    <ul className={`md:hidden gap-12 bg-white text-lg space-y-4 block px-4 py-6 mt-14 
                    ${isMenuOpen ? `fixed top-0 w-full transition-all duration-200` : `hidden`}`}>
                {
                    navItem.map(({path,link})=><li className='text-black' key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>)
                }
    </ul>

    </div>
        
</header>
      
    
  )
}

export default Navbar
