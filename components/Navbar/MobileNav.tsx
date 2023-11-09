"use client"
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import {HiMiniBars3BottomLeft} from 'react-icons/hi2'

const MobileNav = () => {
    const [activeNav, setActiveNav] = useState ('#')
    const [navClassName, setNavClassName] = useState("nav");
    const [showMenu, setShowMenu] = useState("");
    const [showIcon, setShowIcon] = useState("hidden")
    const [navBarDisplay, setNavBarDisplay] = useState("hidden");
  
    const toggleMenu = () => {
      if (navClassName === "nav") {
        setNavClassName("nav new_height fixed");
        setShowMenu(" hidden");
        setShowIcon('block')
        setNavBarDisplay('flex');
      } else {
        setNavClassName("nav");
        setShowMenu("");
        setShowIcon('hidden')
        setNavBarDisplay('hidden');
      }
    };
  return (
    <section className={`xlg:hidden px-[72px] pt-[20px] max-xmd:p-[20px] h-[100px] xmd:h-[130px] ${navClassName} bg-gradient z-[150] `}>
            <section className='flex justify-between items-center'>
              <div className='max-xmd:w-[150px]'>
                <img src="footerlogo.svg" alt="" />
              </div>
             <div onClick={toggleMenu} className=" text-[#0045A5] text-[32px] max-xsm:text-[24px] xlg:hidden cursor-pointer ">
                 <HiMiniBars3BottomLeft className={`transition-all duration-400 ease-in ${showMenu}`} />
                 < FaPlus className={`transition-all duration-400 ease-in plus-icon ${showIcon}`} />
              </div>
            </section>
            <div className={`${navBarDisplay} flex-col justify-center items-center`}>
               <ul className="nav-bar flex flex-col gap-6 text-[#1D1C1C] font-semibold text-lg justify-center items-center">
                  <li><a href="#" onClick={()=> setActiveNav('#')} className= {activeNav === '#'? 'nav-active': 'nav-links'}>Home</a></li>
                  <li><a href="#features" onClick={()=> setActiveNav('#features')} className= {activeNav === '#features'? 'nav-active': 'nav-links'}>Features</a></li>
                  <li><a href="#about-us" onClick={()=> setActiveNav('#about-us')} className= {activeNav === '#about-us'? 'nav-active': 'nav-links'}>About Us</a></li>
                  <li><a href="#how-it-works" onClick={()=> setActiveNav('#how-it-works')} className= {activeNav === '#how-it-works'? 'nav-active': 'nav-links'}>How it works</a></li>
                  <li><a href="#contact-us" onClick={()=> setActiveNav('#contact-us')} className= {activeNav === '#contact-us'? 'nav-active': 'nav-links'}>Contact Us</a></li>        
             </ul>
             <div className='flex gap-6 mt-6'>
                <button className='w-[131px] h-[43px] font-bold  rounded-[40px] text-[#0045A5] border-2 border-[#0045A5] '>Login</button>
                <button className='w-[131px] h-[43px] font-bold rounded-[40px] text-white bg-[#0045A5] '>Register</button>
            </div>
         </div>

    </section>
  )
}

export default MobileNav