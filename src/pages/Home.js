import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Add shine animation CSS and responsive styles
const shineStyles = `
  @keyframes shine {
    0% {
      left: -100%;
    }
    100% {
      left: 120%;
    }
  }
  
  .animate-shine {
    animation: shine 2s infinite;
  }
  
  /* Enhanced Responsive styles for better mobile experience */
  
  /* Tablet styles */
  @media (max-width: 1024px) {
    .hero-title {
      font-size: 3.5rem !important;
      line-height: 1.1 !important;
    }
    .hero-subtitle {
      font-size: 1.5rem !important;
    }
    .section-padding {
      padding: 4rem 2rem !important;
    }
    .about-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
      gap: 2rem !important;
    }
    .solutions-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
      gap: 2rem !important;
    }
    .stats-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
      gap: 1.5rem !important;
    }
  }
  
  /* Mobile styles */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.8rem !important;
      line-height: 1.2 !important;
      letter-spacing: 0.05em !important;
    }
    .hero-subtitle {
      font-size: 1.3rem !important;
      line-height: 1.3 !important;
    }
    .hero-star {
      font-size: 1.2rem !important;
      margin: 0 0.3rem !important;
    }
    .section-padding {
      padding: 3rem 1.5rem !important;
    }
    .about-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }
    .solutions-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    .stats-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 1rem !important;
    }
    .contact-form {
      max-width: 100% !important;
    }
    .map-container {
      height: 250px !important;
    }
  }
  
  /* Small mobile styles */
  @media (max-width: 480px) {
    .hero-title {
      font-size: 2.2rem !important;
      letter-spacing: 0.02em !important;
      line-height: 1.1 !important;
    }
    .hero-subtitle {
      font-size: 1.1rem !important;
      line-height: 1.2 !important;
    }
    .hero-star {
      font-size: 1rem !important;
      margin: 0 0.2rem !important;
    }
    .section-padding {
      padding: 2rem 1rem !important;
    }
    .solutions-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }
    .stats-grid {
      grid-template-columns: 1fr !important;
      gap: 1rem !important;
    }
    .contact-info {
      padding: 1.5rem !important;
    }
    .map-container {
      height: 200px !important;
    }
  }
  
  /* Extra small devices */
  @media (max-width: 360px) {
    .hero-title {
      font-size: 1.8rem !important;
      letter-spacing: 0.01em !important;
    }
    .hero-subtitle {
      font-size: 1rem !important;
    }
    .section-padding {
      padding: 1.5rem 0.8rem !important;
    }
    .solutions-card {
      padding: 1.5rem 1rem !important;
    }
    .hero-inspiring {
      font-size: 2.2rem !important;
    }
    .hero-to {
      font-size: 1.2rem !important;
    }
    .hero-dream {
      font-size: 1.8rem !important;
    }
  }
  
  /* Responsive heading parts */
  @media (max-width: 768px) {
    .hero-inspiring {
      font-size: 3.5rem !important;
    }
    .hero-to {
      font-size: 1.5rem !important;
    }
    .hero-dream {
      font-size: 2.5rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .hero-inspiring {
      font-size: 2.8rem !important;
    }
    .hero-to {
      font-size: 1.3rem !important;
    }
    .hero-dream {
      font-size: 2rem !important;
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
  <div style={{ fontFamily: 'Arial, sans-serif' }}>
    {/* Add CSS styles */}
    <style>{shineStyles}</style>
    
    {/* Hero Section */}
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/images/home.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        textAlign: 'center',
        padding: '2rem 1rem',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      {/* Overlay for better text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
      {/* Creative Inspiring heading with multiple effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
        style={{ position: 'relative', marginBottom: '1rem' }}
      >
        <motion.h1
          className="hero-title"
          style={{
            fontSize: '4.5rem',
            fontWeight: 900,
            fontFamily: '"Lucida Handwriting", "Brush Script MT", cursive',
            fontStyle: 'italic',
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #f0932b)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.1em',
            textAlign: 'center',
            position: 'relative',
            textShadow: 'none',
            lineHeight: 1.2,
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="hero-inspiring" style={{ fontSize: '5.5rem' }}>Inspiring</div>
          <div className="hero-to" style={{ fontSize: '2rem', margin: '0.2rem 0' }}>to</div>
          <div className="hero-dream" style={{ fontSize: '3.5rem' }}>Dream, Learn And Grow</div>
        </motion.h1>
        
        {/* Glowing border effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120%',
            height: '120%',
            borderRadius: '20px',
            filter: 'blur(20px)',
            opacity: 0.3,
            zIndex: -1,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              background: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b'][i],
              borderRadius: '50%',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Creative Publishers subtitle with typewriter effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ position: 'relative', marginBottom: '3rem' }}
      >
        <motion.p
          className="hero-subtitle"
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            position: 'relative',
            textShadow: '0 0 20px rgba(255, 230, 102, 0.5)',
            letterSpacing: '0.15em',
          }}
        >
          <span style={{ 
            background: 'linear-gradient(90deg, #ffe066, #ffffff, #ffe066)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
          </span>
          <span 
            style={{ 
              color: '#4ecdc4',
              margin: '0 0.5rem',
              fontSize: '1.8rem',
            }}
          >
          </span>
       
        </motion.p>
        
        {/* Animated underline */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '3px',
            background: 'linear-gradient(90deg, #ffe066, #4ecdc4, #45b7d1)',
            borderRadius: '2px',
          }}
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </motion.div>
      </div>
    </section>

    {/* About Us Section */}
    <section
    id="about-section"
      className="section-padding"
      style={{
        padding: '5rem 2rem',
        background: '#ffffff',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#1a202c',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        ABOUT US
      </motion.h2>
      
      <div 
        className="about-grid"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          marginBottom: '3rem' 
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '1rem' }}>
            OUR VISION
          </h4>
          <img 
            src="/images/mdviss.jpeg" 
            alt="Our Vision" 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '1rem' 
            }} 
          />
          <p style={{ color: '#4a5568', lineHeight: 1.6 }}>
To nurture young minds with knowledge, creativity and values through innovative educational resources. We aspire to empower teachers, inspire learners and contribute to build a brighter tomorrow.
Childcraft Hallmark Publishers          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '1rem' }}>
            OUR MISSION
          </h4>
          <img 
            src="/images/mdmiss.jpeg" 
            alt="Our Mission" 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '1rem' 
            }} 
          />
          <p style={{ color: '#4a5568', lineHeight: 1.6 }}>
To touch every classroom with creativity, care and inspiration. We strive to empower teachers with effective tools and guide students on a joyful journey of discovery — making learning not just a task, but a lifelong adventure.          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '1rem' }}>
            OUR SERVICES
          </h4>
          <img 
            src="/images/mdsvss.jpeg" 
            alt="Our Services" 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '1rem' 
            }} 
          />
          <p style={{ color: '#4a5568', lineHeight: 1.6 }}>
We are dedicated to supporting schools, educators, and learners through a range of solutions. These include textbook publishing with support materials for teachers, as well as workshops and training programs to empower educators.</p>
        </motion.div>
      </div>
    </section>

    {/* Services Grid */}
    <section
      className="section-padding"
      style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.h3
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '4rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
OUR PORTFOLIO        </motion.h3>
        
        <div 
          className="solutions-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '3rem',
            perspective: '1000px',
          }}
        >
          {[
            { title: 'KINDERGARTEN SERIES', desc: 'Our Kindergarten Series is thoughtfully designed to make early learning a joyful, meaningful, and holistic experience.', icon: '👶', color: '#ff6b6b' },
            { title: 'COMPUTER SERIES', desc: 'Our Computer Series is designed to build digital literacy from the ground up, combining conceptual clarity with hands-on learning.', icon: '🖥️', color: '#4ecdc4' },
            { title: 'HINDI SERIES', desc: 'Our Hindi Series is designed to make language learning engaging, culturally rich, and conceptually strong.', icon: 'अ', color: '#45b7d1' },
            { title: 'MALAYALAM SERIES', desc: 'Our Malayalam Series is crafted to nurture a love for mother tongue and literature while strengthening the linguistic foundation in young learners..', icon: 'അ', color: '#fd79a8' },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
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
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              className="solutions-card"
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring", bounce: 0.6 }}
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
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 + 0.5 }}
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
              </motion.h4>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 + 0.7 }}
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
      
      {/* Floating background elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
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
          bottom: '30%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
        }}
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>

    {/* Statistics Section */}
    <section
      className="section-padding"
      style={{
        padding: '5rem 2rem',
        background: '#2563eb',
        color: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div 
          className="stats-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {[
            { number: '250+', label: 'TITLES' },
            { number: '1200+', label: 'SCHOOLS' },
            { number: '10+', label: 'YEARS OF SERVICE' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {stat.number}
              </h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, opacity: 0.9 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section
      id="contact-section"
      className="section-padding"
      style={{
        padding: '5rem 2rem',
        background: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#1a202c',
            marginBottom: '2rem',
          }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-info"
          style={{
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '12px',
            marginBottom: '2rem',
          }}
        >
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
            <strong>Location:</strong> KRL Road, Kundanur Jn , Kochi
          </p>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
            <strong>Email:</strong> Info@childcraftbooks.com
          </p>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
            <strong>Phone:</strong> +91 95392 72059
          </p>
          <p style={{ color: '#4a5568' }}>
            <strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 5:30 PM
          </p>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="map-container"
          style={{
            marginBottom: '2rem',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.4!2d76.3150973!3d9.9364236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08733c0cbe5baf:0xd4532aeb9b4db2a4!2sChildcraft%20Hallmark%20Publishers!5e0!3m2!1sen!2sin!4v1699190825123!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CHILDCRAFT HALLMARKPUBLISHERS Location - Kundanoor"
          ></iframe>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => navigate('/contact')}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#ffffff',
            background: '#2563eb',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  </div>
  );
};

export default Home;
