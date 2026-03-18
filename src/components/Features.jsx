import React from 'react';

const Card = ({ title, description, icon }) => (
  <div className="glass-card" style={{ padding: '2.5rem', transition: 'var(--transition)' }}>
    <div style={{ 
      width: '3rem', 
      height: '3rem', 
      borderRadius: '0.75rem', 
      background: 'rgba(99, 102, 241, 0.1)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      marginBottom: '1.5rem',
      fontSize: '1.5rem'
    }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{description}</p>
  </div>
);

const Features = () => {
  const features = [
    { title: 'Intelligent CRM', description: 'Manage leads, track deals, and nurture relationships with AI-powered insights.', icon: '🤝' },
    { title: 'Enterprise ERP', description: 'Complete control over your finances, inventory, and supply chain in one place.', icon: '🏗️' },
    { title: 'Real-time Analytics', description: 'Make data-driven decisions with powerful, live dashboards and reports.', icon: '📊' },
    { title: 'Seamless Integration', description: 'Connect all your favorite tools and automate workflows effortlessly.', icon: '🔌' },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem' }}>
          One Platform. <span className="gradient-text">Complete Control.</span>
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((f, i) => <Card key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};

export default Features;
