import React from 'react';
import { motion } from 'framer-motion';

// MotionDevHeading: Animated heading inspired by motion.dev
const MotionDevHeading = ({ children }) => {
  // Split text into characters for staggered animation
  const chars = children.split("");
  return (
    <motion.h1
      style={{
        fontSize: '2.8rem',
        fontWeight: 800,
        marginBottom: '1rem',
        letterSpacing: '1px',
        display: 'inline-block',
        color: 'white',
      }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.035,
          },
        },
      }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', willChange: 'transform' }}
          variants={{
            hidden: { opacity: 0, y: 32, rotate: -8, scale: 0.9 },
            visible: {
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 24,
              },
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default MotionDevHeading;
