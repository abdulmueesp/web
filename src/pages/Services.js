import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '📝',
    title: 'Question Paper Generator',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    color: '#ff6b6b'
  },
  {
    icon: '🗺️',
    title: 'Virtual Tour Guide',
    desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    color: '#4ecdc4'
  },
  {
    icon: '📚',
    title: 'Books Classes 1-8',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    color: '#45b7d1'
  },
  {
    icon: '🎨',
    title: 'Kindergarten Resources',
    desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.',
    color: '#f9ca24'
  },
  {
    icon: '🎬',
    title: 'Educational Animations',
    desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    color: '#f0932b'
  },
  {
    icon: '📄',
    title: 'Interactive Worksheets',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
    color: '#eb4d4b'
  },
  {
    icon: '🃏',
    title: 'Digital Flash Cards',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
    color: '#6c5ce7'
  },
  {
    icon: '🎯',
    title: 'Learning Workshops',
    desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    color: '#a29bfe'
  },
  {
    icon: '📋',
    title: 'Custom Order Forms',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.',
    color: '#fd79a8'
  },
  {
    icon: '🎓',
    title: 'Academic Assessment',
    desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.',
    color: '#00b894'
  },
  {
    icon: '📖',
    title: 'Digital Library',
    desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    color: '#e17055'
  },
  {
    icon: '🎪',
    title: 'Learning Games',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
    color: '#74b9ff'
  },
];

const Services = () => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '8rem 2rem 4rem 2rem',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Background Elements */}
    <motion.div
      style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      style={{
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        width: '60px',
        height: '60px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
      }}
      animate={{
        y: [15, -15, 15],
        x: [8, -8, 8],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        style={{
          fontSize: '3rem',
          fontWeight: 800,
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}
      >
        ChildCraft Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.9)',
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '600px',
          margin: '0 auto 4rem auto',
        }}
      >
        Comprehensive educational solutions designed to enhance learning experiences for children
      </motion.p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        perspective: '1000px',
      }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: -90, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            style={{
              padding: '2.5rem 2rem',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: `3px solid ${service.color}`,
              position: 'relative',
              transformStyle: 'preserve-3d',
              backdropFilter: 'blur(10px)',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
              transition: { duration: 0.3 }
            }}
          >
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", bounce: 0.6 }}
                style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  background: service.color,
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: `0 10px 20px ${service.color}40`,
                }}
              >
                {service.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: service.color,
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {service.title}
              </motion.h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.7 }}
              style={{
                color: '#4a5568',
                lineHeight: 1.6,
                fontSize: '1rem'
              }}
            >
              {service.desc}
            </motion.p>

            <motion.div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                background: `linear-gradient(45deg, ${service.color}, ${service.color}80)`,
                borderRadius: '50%',
                opacity: 0.2,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;