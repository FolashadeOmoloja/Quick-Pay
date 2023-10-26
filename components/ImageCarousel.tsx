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
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [delay, setDelay] = useState(0);
  const [display, setDisplay] = useState('hidden')

  useEffect(() => {
    const interval = setInterval(() => {
      setDelay((prevIndex) => (prevIndex + 1) % images.length);

    }, 1000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  
  useEffect(() => {
    console.log(delay)
    delay==1?setDisplay('block'):setDisplay('hidden')
  }, [delay]);


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div

        >
          <img src={'cta-stroke1.svg'} alt={`Image1`} height={"10px"} />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1, delay: delay, repeat: Infinity, repeatType: 'loop' }}

        >
          <img src={images[0].source} alt={`Image1`} height={images[0].height} />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 2, delay: delay+1, repeat: Infinity, repeatType: 'loop' }}
          className={`${display} `}
        >
          <img src={images[1].source} alt={`Image1`} height={images[1].height} />
        </motion.div>
    </div>
  );
};

export default ImageCarousel;
