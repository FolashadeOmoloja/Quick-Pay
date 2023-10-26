"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
  {
    source: 'cta-stroke2.svg',
    height: '427px',
  },
  {
    source: 'cta-stroke3.svg',
    height: '351px',
  },
];

const ImageCarousel = () => {


  return (
    <div className='h-full justify-end items-center flex'>
      <div className='absolute right-[200px] bottom-[20%]'>
        <img src={'cta-stroke1.svg'} alt={`Image1`} height={'10px'} />
      </div>
      <div className='absolute right-[200px] bottom-0 ellipsis'>
        <img src={images[0].source} alt={`Image1`} height={images[0].height} />
      </div>
      <div className='absolute top-[8%] ellipsis2 '>
        <img src={images[1].source} alt={`Image2`} height={images[1].height} />
      </div>
    </div>
  );
};

export default ImageCarousel;
