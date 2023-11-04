"use client"
import React, { useEffect, useState } from 'react';

const Floater = () => {
  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox4, setShowBox4] = useState(false);
  const [showBox5, setShowBox5] = useState(false);

  useEffect(() => {
    // Function to show the boxes sequentially
    const showSequentially = () => {
      setShowBox1(true);

      const timeout1 = setTimeout(() => {
        setShowBox2(true);
      }, 2000);

      const timeout2 = setTimeout(() => {
        setShowBox3(true);
      }, 4000);

      const timeout3 = setTimeout(() => {
        setShowBox4(true);
      }, 6000);

      const timeout4 = setTimeout(() => {
        setShowBox5(true);
      }, 8000);

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
  }, []);

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
