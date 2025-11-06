import React from 'react';
import { motion } from 'framer-motion';

// SplitText: Animates each letter/word separately
const SplitText = ({ text, type = 'letters', ...motionProps }) => {
  const split = type === 'words' ? text.split(' ') : text.split('');
  return (
    <span style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}>
      {split.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', willChange: 'transform' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04, duration: 0.5, ...motionProps.transition }}
        >
          {type === 'words' ? char + ' ' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;
