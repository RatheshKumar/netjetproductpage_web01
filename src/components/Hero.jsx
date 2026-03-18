import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{ padding: '12rem 0 8rem', background: 'var(--white)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div className="hero-content">
          <span className="section-tag">Empowering Enterprise</span>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: 'var(--navy)' }}>
            Next-Gen <span className="gradient-text">ERP & CRM</span> <br /> 
            Beyond & More.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-medium)', marginBottom: '2.5rem', maxWidth: '600px' }}>
            Transform your business with NetJetGo. Seamlessly integrate your sales, operations, and finance into one powerful, intuitive platform.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <button className="btn-primary" style={{ fontSize: '1.1rem' }}>Pre-Register Now</button>
            <button className="btn-secondary" style={{ fontSize: '1.1rem' }}>View Solutions</button>
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', color: 'var(--text-medium)', fontSize: '0.9rem' }}>
            <span>✓ Cloud Native</span>
            <span>✓ AI-Driven Insights</span>
            <span>✓ Enterprise Secure</span>
          </div>
        </div>
        <div className="hero-asset" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            background: 'var(--primary)', 
            padding: '2rem', 
            borderRadius: '2rem', 
            boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="/src/assets/logo-square.png" alt="NetJetGo Branding" style={{ maxWidth: '100%', height: 'auto', borderRadius: '1rem' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
