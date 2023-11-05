"use client"
import React, { useEffect, useState } from 'react';

const Floater = () => {
  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox4, setShowBox4] = useState(false);
  const [showBox5, setShowBox5] = useState(false);
  const [refresh, setRefresh] = useState(false)


   const showBoxes: any = () => {
    // Function to show the boxes sequentially
    const showSequentially = () => {
          // Initially hide all boxes
  setShowBox1(false);
  setShowBox2(false);
  setShowBox3(false);
  setShowBox4(false);
  setShowBox5(false);

       setTimeout(() => {
    setShowBox1(true);
  }, 1000);
  
        const timeout1 = setTimeout(() => {
          setShowBox2(true);
       
        }, 2000);
  
        const timeout2 = setTimeout(() => {
          setShowBox3(true);
        }, 3000);
  
        const timeout3 = setTimeout(() => {
          setShowBox4(true);
        }, 4000);
  
        const timeout4 = setTimeout(() => {
          setShowBox5(true);
        }, 5000);
  
        const refresh = setTimeout(() => {
          setRefresh(!refresh);
        }, 6000);
  
        return () => {
          // Clean up the timeouts when the component unmounts
          clearTimeout(timeout1);
          clearTimeout(timeout2);
          clearTimeout(timeout3);
          clearTimeout(timeout4);
        };
      };
  
      const clearAllTimeouts = showSequentially();
  
      return () => {
        // Clean up any remaining timeout when the component unmounts
        clearAllTimeouts();
      };

   }


  useEffect(() => {
    const interval = setInterval(showBoxes, 6000); 
  

    return () => {
      clearInterval(interval);

    };
  }, [refresh]);

  console.log('box 1', showBox2)
  return (
    <div className="relative h-[250px]">
      <div>
        <img
          src="icon5.svg"
          alt=""
          className={`w-[70px] absolute right-0 bottom-0 ${showBox5 ? 'box-5' : 'opacity-0'}`}
        />
        <img
          src="icon4.svg"
          alt=""
          className={`w-[70px] absolute right-[100px] top-[50px] ${showBox4 ? 'box-4' : 'opacity-0'}`}
        />
        <img
          src="icon3.svg"
          alt=""
          className={`w-[70px] absolute right-[250px] top-[0px] ${showBox3 ? 'box-3' : 'opacity-0'}`}
        />
        <img
          src="icon2.svg"
          alt=""
          className={`w-[70px] absolute left-[120px] top-[50px] ${showBox2 ? 'box-2' : 'opacity-0'}`}
        />
        <img
          src="icon1.svg"
          alt=""
          className={`w-[70px] absolute left-[20px] bottom-[-10px] ${showBox1 ? 'box-1' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
};

export default Floater;
