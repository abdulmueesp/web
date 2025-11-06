import React from 'react';


const testimonials = [
  {
    name: 'Murali Nair',
    logo: '/images/client1.png',
    feedback: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 5,
  },
  {
    name: 'Abrar Al Jannah',
    logo: '/images/client2.png',
    feedback: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.',
    rating: 5,
  },
  {
    name: 'SeafordIT',
    logo: '/images/client3.png',
    feedback: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 5,
  },
];

const Clients = () => (
  <div className="clients" style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #fff 60%, #2563eb11 100%)', padding: '3rem 1rem' }}>
    <h2 className="glow-text" style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem', color: '#a21caf' }}>Our Clients & Testimonials</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center', maxWidth: 1100, margin: '0 auto' }}>
      {testimonials.map((t, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 16px #2563eb22', padding: '2rem 1.5rem', minWidth: 280, maxWidth: 340, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="fade-in">
          <img src={t.logo} alt={t.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '3px solid #a21caf', marginBottom: 12 }} />
          <div style={{ fontWeight: 700, color: '#2563eb', marginBottom: 8 }}>{t.name}</div>
          <div style={{ color: '#444', fontSize: '1rem', marginBottom: 12 }}>{t.feedback}</div>
          <div style={{ color: '#facc15', fontSize: '1.1rem' }}>{'★'.repeat(t.rating)}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Clients;
