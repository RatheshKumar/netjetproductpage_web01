import React from 'react';

const FeatureBlock = ({ title, subtitle, description, icon, reversed }) => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    gap: '6rem', 
    alignItems: 'center', 
    marginBottom: '8rem',
    direction: reversed ? 'rtl' : 'ltr'
  }}>
    <div style={{ direction: 'ltr' }}>
      <span className="section-eyebrow">{subtitle}</span>
      <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{title}</h3>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>{description}</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
          <span style={{ color: 'var(--accent-magenta)' }}>✓</span> Full lifecycle management
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
          <span style={{ color: 'var(--accent-magenta)' }}>✓</span> AI-driven predictive insights
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
          <span style={{ color: 'var(--accent-magenta)' }}>✓</span> 100% Secure data encryption
        </li>
      </ul>
      <button className="btn-primary" style={{ padding: '0.9rem 2rem' }}>Explore {title} →</button>
    </div>
    <div style={{ 
      background: 'var(--bg-corporate)', 
      height: '400px', 
      borderRadius: '1.5rem', 
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem'
    }}>
      {icon}
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <span className="section-eyebrow">The Enterprise Suite</span>
          <h2 style={{ fontSize: '3.5rem' }}>Comprehensive solutions for <br /><span className="gradient-text">every business need.</span></h2>
        </div>
        
        <FeatureBlock 
          title="Global ERP Core" 
          subtitle="Resource Planning" 
          description="Unify your finance, inventory, and supply chain into one high-performance hub. Designed for complex international operations."
          icon="📦"
        />
        
        <FeatureBlock 
          title="Intelligent CRM" 
          subtitle="Customer Success" 
          description="Turn leads into loyalty with AI-powered behavioral tracking and automated sales pipelines that never miss a beat."
          icon="🎯"
          reversed
        />
        
        <FeatureBlock 
          title="Security & Analytics" 
          subtitle="Data Integrity" 
          description="Monitor your entire IT ecosystem with real-time threat detection and gain actionable insights with executive dashboards."
          icon="🛡️"
        />
      </div>
    </section>
  );
};

export default Features;
