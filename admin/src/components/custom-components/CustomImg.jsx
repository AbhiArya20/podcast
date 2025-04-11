import { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { motion, AnimatePresence } from 'framer-motion';

const CustomImg = ({ src, alt, className, blurHash = 'LEHV6nWB2yk8pyo0adR*.7kCMdnj' }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className='relative select-none'>
      <AnimatePresence>
        {!imageLoaded && (
          <motion.div className={`${className} overflow-hidden absolute inset-0 z-auto`} initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Blurhash hash={blurHash} width='100%' height='100%' resolutionX={32} resolutionY={32} punch={1} />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ opacity: { duration: 0.5 } }}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default CustomImg;
