"use client"
import React, { useEffect, useState } from 'react'
import Floater from './Floater'
import Floater2 from './Floater2'

const Floaters = () => {
    const [showBox1, setShowBox1] = useState(true);
    const [showBox2, setShowBox2] = useState(false);
    const [refresh, setRefresh] = useState(false)
  
  
    const showBoxes = () => {
        // Initially hide both boxes
        setShowBox1(false);
        setShowBox2(false);
    
        // Show the first box for 5 seconds
        setShowBox1(true);
        setTimeout(() => {
          setShowBox1(false);
          setShowBox2(true);
        }, 5000);
    
        // Refresh after 10 seconds (twice the keyframe interval)
        const refreshTimeout = setTimeout(() => {
          setRefresh(!refresh);
        }, 15000);
    
        return () => {
          clearTimeout(refreshTimeout);
        };
      };
    
      useEffect(() => {
        const interval = setInterval(showBoxes, 15000); // Adjust for the keyframe interval
    
        return () => {
          clearInterval(interval);
        };
      }, [refresh]);
   
  return (
    <div className='relative h-[500px] w-full'>
        <div className={`absolute w-full top-0 ${showBox1?'block':'hidden'}`}>
        <Floater/>
        </div>
        <div className={`relative top-0 ${showBox2?'block':'hidden'}`}>
        <Floater2/>
        </div>



    </div>
  )
}

export default Floaters