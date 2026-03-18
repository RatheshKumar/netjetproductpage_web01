import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="glass-nav" style={{ 
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'var(--transition)',
      padding: scrolled ? '1rem 0' : '2rem 0',
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo">
          <img src="/src/assets/logo.png" alt="NetJetGo Logo" style={{ height: scrolled ? '45px' : '55px', transition: 'var(--transition)' }} className="logo-vignette" />
        </div>
        
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            <a href="#features" style={{ color: 'var(--nav-navy)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>Solutions</a>
            <a href="#about" style={{ color: 'var(--nav-navy)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>Innovation</a>
            <a href="#process" style={{ color: 'var(--nav-navy)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>Success Model</a>
          </div>
          <button className="btn-premium" style={{ padding: '0.8rem 2rem', fontSize: '0.95rem' }}>Join the Future</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
