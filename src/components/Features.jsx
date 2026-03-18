import React from 'react';

const FeatureCard = ({ title, subtitle, description, icon }) => (
  <div className="card">
    <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{icon}</div>
    <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{subtitle}</div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-medium)' }}>{description}</p>
    <a href="#" style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Learn more →</a>
  </div>
);

const Features = () => {
  const features = [
    { title: 'Unified CRM', subtitle: 'Sales & Marketing', description: 'Centralize lead management and sales pipelines with real-time tracking.', icon: '🏢' },
    { title: 'Operations ERP', subtitle: 'Global Logistics', description: 'Manage inventory, supply chains, and warehousing with precision.', icon: '⚡' },
    { title: 'Finance Hub', subtitle: 'Enterprise Accounting', description: 'Automate billing, invoicing, and financial reporting across regions.', icon: '💰' },
    { title: 'Data Analytics', subtitle: 'Intelligence', description: 'Gain actionable insights with AI-powered reporting and dashboards.', icon: '📈' },
    { title: 'Human Capital', subtitle: 'Team Management', description: 'Streamline payroll, recruitment, and employee performance.', icon: '👥' },
    { title: 'API Ecosystem', subtitle: 'Connectivity', description: 'Connect with 1000+ third-party tools seamlessly via our open API.', icon: '🔌' },
  ];

  return (
    <section id="features" style={{ background: 'var(--light-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-tag">Core Capabilities</span>
          <h2 style={{ fontSize: '3rem' }}>Everything your business needs <br /> in <span className="gradient-text">one unified suite.</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {features.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};

export default Features;
