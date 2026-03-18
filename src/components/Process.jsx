import React from 'react';

const Process = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'Understanding your unique business architecture and roadblocks.' },
    { num: '02', title: 'Model Design', desc: 'Crafting a bespoke ERP/CRM configuration for your industry.' },
    { num: '03', title: 'Seamless Sync', desc: 'Zero-downtime data migration handled by our expert engineers.' },
    { num: '04', title: 'Global Growth', desc: 'Scaling your operations with our high-performance cloud core.' },
  ];

  return (
    <section id="process" className="bg-corporate">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <span className="section-eyebrow">Your Journey</span>
          <h2 style={{ fontSize: '3.5rem' }}>The <span className="gradient-text">NetJetGo Way.</span></h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
          {steps.map((step, i) => (
            <div key={i} className="premium-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <div style={{ 
                width: '3.5rem', 
                height: '3.5rem', 
                background: 'var(--primary-navy)', 
                color: 'white', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 2rem',
                fontWeight: 900,
                fontSize: '1rem'
              }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
