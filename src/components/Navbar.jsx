import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-header ${scrolled ? 'scrolled' : ''}`} style={{ transition: 'var(--transition)', padding: scrolled ? '0.75rem 0' : '1.25rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/src/assets/logo.png" alt="NetJetGo Logo" style={{ height: '40px', width: 'auto' }} />
        </div>
        
        <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <div className="dropdown" style={{ position: 'relative', cursor: 'pointer', fontWeight: 500 }}>
            Solutions <span style={{ fontSize: '0.8rem' }}>▼</span>
          </div>
          <a href="#features" style={{ color: 'var(--text-dark)', textDecoration: 'none', fontWeight: 500 }}>Features</a>
          <a href="#about" style={{ color: 'var(--text-dark)', textDecoration: 'none', fontWeight: 500 }}>About</a>
          <a href="#process" style={{ color: 'var(--text-dark)', textDecoration: 'none', fontWeight: 500 }}>How it Works</a>
        </div>

        <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Login</a>
          <button className="btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Join Waitlist</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
