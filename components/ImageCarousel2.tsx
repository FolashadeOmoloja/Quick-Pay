"use client"
import { useState, useEffect } from 'react';

const images = [{
    source:'cta-stroke1.svg',
    height: '10px',
    delay: 0
},{
    source:'cta-stroke2.svg',
    height: '427px',
    delay: 1
},{
    source:'cta-stroke3.svg',
    height: '351px',
    delay:2
}];
const displayTime = [0, 1000, 2000]; // Delay in milliseconds for each image

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      <img src={images[currentImageIndex].source} alt={`Image ${currentImageIndex + 1}`}height={images[currentImageIndex].height} />
    </div>
  );
};

export default ImageCarousel;
