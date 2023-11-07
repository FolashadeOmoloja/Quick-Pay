"use client"
import React, { useEffect, useState } from 'react'
import Floater from './Floater'
import Floater2 from './Floater2'

const Floaters = () => {
    const [showBox1, setShowBox1] = useState(false);
    const [showBox2, setShowBox2] = useState(false);
    const [refresh, setRefresh] = useState(true)
    const [refresh2, setRefresh2] = useState(false)
  
  
    const showFloater = () => {

        if(refresh == true){
            setShowBox1(true);
        } else if (refresh == false){
            setShowBox1(false); 
        } else if (refresh2 == true){
            setShowBox2(true)
        } else if (refresh2 == false){
            setShowBox2(false)
        }
        

        const refreshTimeout = setTimeout(() => {
          setRefresh(!refresh);
          setRefresh2(!refresh2)
        }, 6000);
    
        return () => {
          clearTimeout(refreshTimeout);
        };
      };
    
      useEffect(() => {
        console.log(refresh, 'refresh')
        console.log(refresh, 'refresh2')
        const interval = setInterval(showFloater, 6000); // Adjust for the keyframe interval
    
        return () => {
          clearInterval(interval);
        };
      }, [refresh]);
   
  return (
    <div className='relative h-[500px] w-full'>
        <div className={`absolute w-full top-0 ${showBox1?'block':'hidden'}`}>
        <Floater refresh={refresh}/>
        </div>
        <div className={`relative top-0 ${showBox2?'block':'hidden'}`}>
        <Floater2 refresh2={refresh2}/>
        </div>



    </div>
  )
}

export default Floaters