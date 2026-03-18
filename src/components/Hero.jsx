import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" style={{ padding: '14rem 0 8rem', background: 'radial-gradient(50% 50% at 50% 50%, rgba(45, 48, 145, 0.03) 0%, rgba(255, 255, 255, 0) 100%)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="hero-text">
            <div className="tagline-pill">
              <span style={{ background: 'var(--accent-magenta)', padding: '0.2rem 0.6rem', borderRadius: '1rem', color: 'white', fontSize: '0.7rem' }}>NEW</span>
              Your goal, our code.
            </div>
            <h1 style={{ fontSize: '4.25rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Scale your <span className="gradient-text">Enterprise</span> <br /> 
              operations with ease.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
              NetJetGo is a high-performance ERP and CRM ecosystem designed to unify your data, automate your workflows, and accelerate global growth.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button className="btn-accent">Book a Demo</button>
              <button className="btn-primary" style={{ background: 'transparent', color: 'var(--primary-navy)', border: '1px solid var(--border)' }}>View Platform</button>
            </div>
            <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <img src="/src/assets/logo-square.png" alt="Trusted" style={{ height: '30px', opacity: 0.8 }} />
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                TRUSTED BY LEADING <br /> INTERNATIONAL ENTERPRISES
              </div>
            </div>
          </div>
          
          <div className="hero-visual" style={{ position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '-10%', 
              right: '-10%', 
              width: '120%', 
              height: '120%', 
              background: 'linear-gradient(135deg, rgba(45, 48, 145, 0.05) 0%, rgba(194, 24, 91, 0.05) 100%)',
              borderRadius: '3rem',
              zIndex: -1
            }}></div>
            <img 
              src="/src/assets/dashboard-mockup.png" 
              alt="NetJetGo Dashboard" 
              style={{ 
                width: '100%', 
                borderRadius: '1.5rem', 
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.2)',
                border: '1px solid var(--border)' 
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
