"use client"
import { motion } from 'framer-motion';

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

const ImageCarousel = () => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = { duration: 1, delay: 1, repeat: Infinity };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      {images.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1, delay: item.delay, repeat: Infinity }}
        >
          <img src={item.source} alt={`Image ${index + 1}`}  height={item.height} />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageCarousel;
