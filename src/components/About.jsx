import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div style={{ 
          background: 'var(--primary-navy)', 
          color: 'white', 
          borderRadius: '3rem', 
          padding: '8rem', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative mesh */}
          <div style={{ 
            position: 'absolute', 
            top: 0, left: 0, 
            width: '100%', height: '100%', 
            background: 'radial-gradient(circle at 80% 20%, rgba(194, 24, 91, 0.2) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>International Network</span>
            <h2 style={{ fontSize: '4rem', color: 'white', marginBottom: '2rem' }}>Beyond & More.</h2>
            <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto 4rem', opacity: 0.8 }}>
              Part of Netjet International, we provide the backbone for modern enterprises. Our mission is to simplify complexity through elegant engineering and user-centric design.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
              <div>
                <h4 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '0.5rem' }}>40+</h4>
                <p style={{ opacity: 0.6 }}>Countries Supported</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '0.5rem' }}>99.9%</h4>
                <p style={{ opacity: 0.6 }}>System Uptime</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '0.5rem' }}>24/7</h4>
                <p style={{ opacity: 0.6 }}>Global Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
