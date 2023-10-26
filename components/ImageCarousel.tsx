"use client"
import { motion } from 'framer-motion';

const images = ['cta-stroke1.svg', 'cta-stroke2.svg', 'cta-stroke3.svg'];

const ImageCarousel = () => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = { duration: 1, delay: 1, repeat: Infinity };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='h-[272px]'>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={transition}
        >
          <img src={image} alt={`Image ${index + 1}`} width="300" height="200" />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageCarousel;
