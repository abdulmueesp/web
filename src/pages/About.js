import React from 'react';


const About = () => (
  <div
    className="about"
    
    style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at 60% 40%, #f3f4f6 60%, #a21caf11 100%)',
      padding: '3rem 1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat, Poppins, Arial, sans-serif',
    }}
  >
    <div
      style={{
        background: '#fff',
        borderRadius: '2rem',
        boxShadow: '0 4px 24px #2563eb22',
        maxWidth: 700,
        margin: '0 auto',
        padding: '3rem 2rem',
        textAlign: 'center',
      }}
  // ...no animation class
    >
      <h2
        className="glow-text"
        style={{
          fontWeight: 900,
          fontSize: '2.4rem',
          marginBottom: 24,
          background: 'linear-gradient(90deg, #2563eb 10%, #a21caf 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          letterSpacing: '1.2px',
          textShadow: '0 2px 16px #a21caf22',
        }}
      >
        About ChildCraft Publishers
      </h2>
      <p
        style={{
          color: '#374151',
          fontSize: '1.18rem',
          lineHeight: 1.8,
          fontWeight: 500,
          letterSpacing: '0.2px',
          textShadow: '0 1px 8px #2563eb11',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. At <span style={{ color: '#a21caf', fontWeight: 700 }}>ChildCraft Publishers</span>, we believe in <span style={{ color: '#2563eb', fontWeight: 700 }}>creativity</span>, <span style={{ color: '#ffe066', fontWeight: 700 }}>excellence</span>, and building educational resources that inspire learning. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  </div>
);

export default About;
