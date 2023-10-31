'use client'
import {useState} from 'react'


const Navbar = () => {
    const [activeNav, setActiveNav] = useState ('#')
  
  return (
    <nav className='bg-white h-[144px] flex justify-between items-center px-[72px] max-xmd:p-[20px] max-xlg:hidden'>
         <div className=''>
             <img src="footerlogo.svg" alt="" />
         </div>
         <ul className="nav-bar flex gap-8 text-[#1D1C1C] font-semibold text-lg">
            <li><a href="#" onClick={()=> setActiveNav('#')} className= {activeNav === '#'? 'nav-active': 'nav-links'}>Home</a></li>
            <li><a href="#features" onClick={()=> setActiveNav('#features')} className= {activeNav === '#features'? 'nav-active': 'nav-links'}>Features</a></li>
            <li><a href="#about-us" onClick={()=> setActiveNav('#about-us')} className= {activeNav === '#about-us'? 'nav-active': 'nav-links'}>About Us</a></li>
            <li><a href="#how-it-works" onClick={()=> setActiveNav('#how-it-works')} className= {activeNav === '#how-it-works'? 'nav-active': 'nav-links'}>How it works</a></li>
            <li><a href="#contact-us" onClick={()=> setActiveNav('#contact-us')} className= {activeNav === '#contact-us'? 'nav-active': 'nav-links'}>Contact Us</a></li>        
        </ul>
        <div className='flex gap-6 '>
            <button className='w-[131px] h-[43px] font-bold  rounded-[40px] text-[#0045A5] border-2 border-[#0045A5] '>Login</button>
            <button className='w-[131px] h-[43px] font-bold rounded-[40px] text-white bg-[#0045A5] '>Register</button>
        </div>

    </nav>
  )
}

export default Navbar