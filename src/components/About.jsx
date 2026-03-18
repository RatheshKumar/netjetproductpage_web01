import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'center' }}>
          <div className="about-content">
            <span className="section-label">Beyond & More</span>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>A Legacy of <br /><span className="gradient-text">IT & Design Innovation.</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
              Part of the Netjet International network, NetJetGo is the pinnacle of IT excellence. We don't just provide software; we provide the creative and technological synergy that turns visions into global reality.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
              <div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Creative Synergy</h4>
                <p>Award-winning UI/UX deeply integrated with enterprise-grade logic.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Global Network</h4>
                <p>Support centers across Middle East, Asia, and the West.</p>
              </div>
            </div>
          </div>
          <div className="about-branding">
            <div style={{ 
              background: 'var(--navy-gradient)', 
              padding: '5rem', 
              borderRadius: '4rem',
              boxShadow: '0 50px 100px -20px rgba(45, 48, 145, 0.3)'
            }}>
              <img src="/src/assets/logo-square.png" alt="Netjet Branding" style={{ width: '100%', filter: 'brightness(1.5)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
