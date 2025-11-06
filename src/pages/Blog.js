import React from 'react';


const posts = [
  {
    title: 'The Wax and the Wane of the Web',
    date: 'February 14, 2025',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    image: '/images/sample1.jpg',
    link: '#',
  },
  {
    title: 'Opportunities for AI in Accessibility',
    date: 'January 10, 2025',
    excerpt: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    image: '/images/sample2.jpg',
    link: '#',
  },
  {
    title: 'Smart CRM Solutions for Modern Business',
    date: 'December 5, 2024',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    image: '/images/sample3.jpg',
    link: '#',
  },
];

const Blog = () => (
  <div className="blog" style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #fff 60%, #2563eb11 100%)', padding: '3rem 1rem' }}>
    <h2 className="glow-text" style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem', color: '#a21caf' }}>Latest Blog</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: 1100, margin: '0 auto' }}>
      {posts.map((post, i) => (
        <div key={i} style={{
          background: '#fff',
          borderRadius: '1.2rem',
          boxShadow: '0 2px 16px #2563eb22',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 420,
        }} className="fade-in">
          <img src={post.image} alt={post.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
          <div style={{ padding: '1.5rem' }}>
            <div style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.98rem', marginBottom: 8 }}>{post.date}</div>
            <h3 style={{ color: '#a21caf', fontWeight: 700, fontSize: '1.2rem', marginBottom: 10 }}>{post.title}</h3>
            <p style={{ color: '#444', fontSize: '1rem', marginBottom: 16 }}>{post.excerpt}</p>
            <a href={post.link} style={{ color: '#fff', background: 'linear-gradient(90deg, #2563eb 0%, #a21caf 100%)', padding: '0.5rem 1.5rem', borderRadius: '1rem', fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px #2563eb33', transition: 'background 0.2s' }}>Read Details</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;
