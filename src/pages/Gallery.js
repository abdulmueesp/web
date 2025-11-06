import React from 'react';


const galleryItems = [
  { image: '/images/sample1.jpg', caption: 'Lorem Ipsum Dolor' },
  { image: '/images/sample2.jpg', caption: 'Consectetur Adipiscing' },
  { image: '/images/sample3.jpg', caption: 'Sed Do Eiusmod' },
];

const Gallery = () => (
  <div className="gallery" style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #fff 60%, #a21caf11 100%)', padding: '3rem 1rem' }}>
    <h2 className="glow-text" style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem', color: '#2563eb' }}>Our Portfolio</h2>
    <div className="gallery-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
      {galleryItems.map((item, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 16px #a21caf22', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 0 1.5rem 0' }} className="fade-in">
          <img src={item.image} alt={item.caption} style={{ width: '100%', height: 200, objectFit: 'cover', marginBottom: 12 }} />
          <div style={{ color: '#a21caf', fontWeight: 600, fontSize: '1.1rem', textAlign: 'center' }}>{item.caption}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
