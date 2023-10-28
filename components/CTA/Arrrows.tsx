"use client"
import { useState, useEffect } from 'react';

const images = ['Arrow3.svg', 'Arrow2.svg'];
const Arrrows = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500); // Change image every 3 seconds
   
    
        return () => {
          clearInterval(interval);
        };
      }, []);
  return (
    <div>
        <div className='mx-5'>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`}  />
        </div>
    </div>
  )
}

export default Arrrows