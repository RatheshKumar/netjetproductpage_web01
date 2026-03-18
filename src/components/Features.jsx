import React from 'react';

const Card = ({ title, subtitle, description, icon }) => (
  <div className="premium-card">
    <div style={{ width: '4rem', height: '4rem', background: 'rgba(45, 48, 145, 0.05)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
      {icon}
    </div>
    <div style={{ color: 'var(--accent-purple)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{subtitle}</div>
    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>{description}</p>
    <a href="#" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>Explore Solution →</a>
  </div>
);

const Features = () => {
  const features = [
    { title: 'Global ERP', subtitle: 'Resource Planning', description: 'Real-time inventory, finance, and supply chain management for international scale.', icon: '🌐' },
    { title: 'Dynamic CRM', subtitle: 'Customer Sync', description: 'Nurture relationships with AI-driven pipelines and deep-behavioral analytics.', icon: '🤝' },
    { title: 'Financial Core', subtitle: 'Global Compliance', description: 'Unified accounting and multi-currency billing with enterprise security.', icon: '🛡️' },
    { title: 'Asset Insight', subtitle: 'IT Management', description: 'Monitor and optimize your infrastructure with predictive maintenance.', icon: '💻' },
    { title: 'Cyber Shield', subtitle: 'Automation', description: 'Protect your operations with integrated proactive security and threat intelligence.', icon: '🔒' },
    { title: 'Intelli-Workflow', subtitle: 'Connectivity', description: 'Automate complex cross-functional processes with our low-code engine.', icon: '⚙️' },
  ];

  return (
    <section id="features" className="bg-light">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span className="section-label">Enterprise Modules</span>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Sophisticated Solutions for <br /><span className="gradient-text">Unrivaled Growth.</span></h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.2rem' }}>
            Empowering your organization with the technological precision required to lead in the digital era.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          {features.map((f, i) => <Card key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};

export default Features;
