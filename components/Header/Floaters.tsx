'use client'
import React, { useEffect, useState } from 'react'
import Floater from './Floater';
import Floater2 from './Floater2';


const Floaters = () => {
    const [firstFloat, setFirstFloat] = useState(true);
    const [secondFloat, setSecondFloat] = useState(false);
  
    const showTitle = () => {
      setFirstFloat(!firstFloat);
      setSecondFloat(!secondFloat);
    };
  
    useEffect(() => {
      const interval = setInterval(showTitle, 8000); 
  
      return () => {
        clearInterval(interval);
      };
    }, [firstFloat, secondFloat]);
  return (
    <div className='relative'>
           {
            firstFloat && <Floater/>
           }
           {
            secondFloat && <Floater2/>
           }
    </div>
  )
}

export default Floaters