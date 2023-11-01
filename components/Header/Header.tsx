"use client"
import React, { useState, useEffect } from 'react';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
const displayTime = [0, 1000, 2000]; // Delay in milliseconds for each image

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSlide, setShowSlide] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div  className='relative'>
    <div className={`transition-div  absolute top-0 w-full`}><FirstSlide/></div>
    <div className={`transition-div  absolute top-0 w-full hidden`}><SecondSlide/></div>
    </div>
  );
};

export default Header;
