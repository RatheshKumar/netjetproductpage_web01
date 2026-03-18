import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1.5rem 0',
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
          NetJet<span className="gradient-text">Go</span>
        </div>
        <div className="nav-links">
          <a href="#features" style={{ color: 'var(--text-main)', textDecoration: 'none', marginLeft: '2rem', fontWeight: 500 }}>Features</a>
          <button className="btn-primary" style={{ marginLeft: '2rem' }}>Notify Me</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
