import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        <div className="about-image">
          <div style={{ 
            background: 'linear-gradient(135deg, var(--navy), var(--primary))', 
            height: '500px', 
            borderRadius: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '2rem' }}>Beyond & More</h4>
              <p style={{ opacity: 0.8 }}>The NetJetGo Philosophy</p>
            </div>
          </div>
        </div>
        <div className="about-content">
          <span className="section-tag">Our Vision</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Building the backbone of <span className="gradient-text">modern industry.</span></h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-medium)', marginBottom: '2rem' }}>
            NetJetGo was founded with a single mission: to provide businesses of all sizes with the high-performance tools they need to scale without limits. We believe that technology should be an accelerator, not a barrier.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Our Mission</h4>
              <p style={{ fontSize: '0.9rem' }}>To simplify complexity through elegant engineering and intuitive design.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Global Reach</h4>
              <p style={{ fontSize: '0.9rem' }}>Supporting enterprises across 40+ countries with local expertise.</p>
            </div>
          </div>
          <button className="btn-secondary" style={{ marginTop: '2.5rem' }}>Learn More About Us</button>
        </div>
      </div>
    </section>
  );
};

export default About;
