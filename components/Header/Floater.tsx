'use client'
import React, { useEffect, useState } from 'react'

const Floater = () => {
    const [showIcon, setShowIcon] = useState(true);
    const [secondTitle, setSecondTitle] = useState(false);
  
    const showTitle = () => {
      setShowIcon(!showIcon);
      setSecondTitle(!secondTitle);
    };
  
    useEffect(() => {
      const interval = setInterval(showTitle, 5000); // Toggle titles every 5 seconds
  
      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(interval);
      };
    }, [showIcon]);
  return (
    <div className='relative h-[250px]'>
    <div>
        <img src="icon5.svg" alt="" className={`w-[70px] absolute right-0 bottom-0 box-5`}/>
        <img src="icon4.svg" alt="" className={`'w-[70px] absolute right-[100px] top-[50px] box-4'`}/>
        <img src="icon3.svg" alt="" className={`w-[70px] absolute right-[250px] top-[0px] box-3`}/>
        <img src="icon2.svg" alt="" className={`w-[70px] absolute left-[120px] top-[50px] box-2`}/>
        <img src="icon1.svg" alt="" className={`w-[70px] absolute left-[20px] bottom-[-10px] box-1`}/>
    </div>

</div>
  )
}

export default Floater