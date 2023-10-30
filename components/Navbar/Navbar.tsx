import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white h-[144px] flex justify-between items-center px-[72px] max-xmd:p-[20px]'>
         <div>
             <img src="footerlogo.svg" alt="" />
         </div>
         <ul className="nav-bar flex gap-8 text-[#1D1C1C] ">
            <li><a href="#" className="home nav-active">Home</a></li>
            <li><a href="#" className='nav-links'>Features</a></li>
            <li><a href="#" className='nav-links'>About Us</a></li>
            <li><a href="#" className='nav-links'>How it works</a></li>
            <li><a href="#" className='nav-links'>Contact Us</a></li>        
        </ul>
        <div className='flex gap-6'>
            <button className='w-[131px] h-[43px] font-bold  rounded-[40px] text-[#0045A5] border-2 border-[#0045A5] '>Login</button>
            <button className='w-[131px] h-[43px] font-bold rounded-[40px] text-white bg-[#0045A5] '>Register</button>
        </div>
    </nav>
  )
}

export default Navbar