import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="glass-nav" style={{ 
      transition: 'var(--transition-smooth)',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      boxShadow: scrolled ? 'var(--card-shadow)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/src/assets/logo.png" alt="NetJetGo" style={{ height: '42px' }} />
        </div>
        
        <div className="nav-menu" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#solutions" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Solutions</a>
          <a href="#features" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Features</a>
          <a href="#about" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Company</a>
          <div style={{ width: '1px', height: '20px', background: 'var(--border)' }}></div>
          <a href="#" style={{ color: 'var(--primary-navy)', textDecoration: 'none', fontWeight: 700 }}>Sign In</a>
          <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
