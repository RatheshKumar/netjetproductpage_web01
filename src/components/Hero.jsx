import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{ paddingTop: '10rem', textAlign: 'center' }}>
      <div className="container">
        <div style={{ marginBottom: '1rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>
          Coming Soon
        </div>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          The Future of <span className="gradient-text">CRM & ERP</span> <br /> 
          Tailored for Growth.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
          Streamline your operations, automate your sales, and grow your business with the most intuitive CRM & ERP tool ever built.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            style={{ 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.5rem', 
              border: '1px solid var(--glass-border)',
              background: 'var(--glass)',
              color: 'white',
              width: '300px'
            }} 
          />
          <button className="btn-primary">Notify Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
