import React from 'react';

const Hero = () => {
  return (
    <section style={{ 
      padding: '16rem 0 10rem', 
      background: 'radial-gradient(circle at top right, rgba(45, 48, 145, 0.05), transparent), radial-gradient(circle at bottom left, rgba(194, 24, 91, 0.05), transparent)' 
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <span className="section-label">Your Goal, Our Code.</span>
          <h1 style={{ fontSize: '5.5rem', lineHeight: 1, marginBottom: '2.5rem', fontWeight: 900 }}>
            Unified <span className="gradient-text">ERP & CRM</span> <br /> 
            for the Modern Enterprise.
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '3.5rem', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            Elevate your operational efficiency with NetJetGo—the elite software ecosystem designed to simplify complexity and drive global growth.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <button className="btn-premium">Get Exclusive Access</button>
            <button className="btn-outline">Explore the Model</button>
          </div>
        </div>

        <div style={{ 
          marginTop: '6rem', 
          display: 'flex', 
          justifyContent: 'center', 
          padding: '4rem',
          background: 'rgba(255,255,255,0.8)',
          borderRadius: '3rem',
          border: '1px solid var(--border)',
          boxShadow: '0 40px 100px -20px rgba(0,0,0,0.1)'
        }}>
          <img 
            src="/src/assets/logo-square.png" 
            alt="NetJetGo Identity" 
            style={{ width: '250px', height: '250px', objectFit: 'contain' }} 
            className="logo-vignette"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
