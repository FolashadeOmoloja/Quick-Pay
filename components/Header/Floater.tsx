"use client"
import React, { useEffect, useState } from 'react';

const Floater = ({refresh}:any) => {
  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox4, setShowBox4] = useState(false);
  const [showBox5, setShowBox5] = useState(false);
  useEffect(() => {
    if (refresh) {
      // Initially hide all boxes when refresh is triggered
      setShowBox1(false);
      setShowBox2(false);
      setShowBox3(false);
      setShowBox4(false);
      setShowBox5(false);

      // Show the first box for 1 second
      setTimeout(() => {
        setShowBox1(true);
      }, 1000);

      // Show the second box for 1 second
      setTimeout(() => {
        setShowBox2(true);
      }, 2000);

      // Show the third box for 1 second
      setTimeout(() => {
        setShowBox3(true);
      }, 3000);

      // Show the fourth box for 1 second
      setTimeout(() => {
        setShowBox4(true);
      }, 4000);

      // Show the fifth box for 1 second
      setTimeout(() => {
        setShowBox5(true);
      }, 5000);
      setTimeout(() => {
        setShowBox1(false);
        setShowBox2(false);
        setShowBox3(false);
        setShowBox4(false);
        setShowBox5(false);
      }, 6000);
    }
  }, [refresh]);


  return (
    <div className="relative h-[250px]">
      <div>
        <img
          src="icon5.svg"
          alt=""
          className={`floater-icons right-0 bottom-0 ${showBox5 ? 'box-5' : 'opacity-0'}`}
        />
        <img
          src="icon4.svg"
          alt=""
          className={`floater-icons right-[100px] top-[50px] max-sm:right-[70px] max-sm:top-[80px] ${showBox4 ? 'box-4' : 'opacity-0'}`}
        />
        <img
          src="icon3.svg"
          alt=""
          className={`floater-icons right-[250px] max-xslg:right-[200px] max-lg:right-[250px] top-[0px] ${showBox3 ? 'box-3' : 'opacity-0'}`}
        />
        <img
          src="icon2.svg"
          alt=""
          className={`floater-icons left-[120px] top-[50px] max-sm:left-[70px] max-sm:top-[80px] ${showBox2 ? 'box-2' : 'opacity-0'}`}
        />
        <img
          src="icon1.svg"
          alt=""
          className={`floater-icons left-[20px] bottom-[-10px] ${showBox1 ? 'box-1' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
};

export default Floater;
