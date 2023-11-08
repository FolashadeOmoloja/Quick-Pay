"use client"
import { useEffect, useState } from 'react';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';



const Header = () => {
  const [showSlide1, setShowSlide1] = useState(false)
  const [showSlide2, setShowSlide2] = useState(false)
  const [refresh, setRefresh] = useState(false)
  useEffect(
    ()=>{
      setShowSlide1(true)
      setTimeout(() => {
        setShowSlide1(false)
        setShowSlide2(true);
      }, 6000);
      setTimeout(()=>{
         setRefresh(!refresh)
         setShowSlide1(true)
         setShowSlide2(false)
      },18000)
    }, [refresh]
  )


  return (
    <div  className='relative h-[830px] max-lg:h-[1300px]   max-xsm:h-[920px]'>
    <div className={`transition-div  absolute top-0 w-full ${showSlide1?'block':'hidden'}`}><FirstSlide/></div>
    <div className={`transition-div  absolute top-0 w-full ${showSlide2?'block':'hidden'} `}><SecondSlide/></div>
    </div>
  );
};

export default Header;
