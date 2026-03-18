import React from 'react';

const Process = () => {
  const steps = [
    { id: 'I', title: 'Operational Audit', desc: 'Detailed analysis of your current ecosystem architecture.' },
    { id: 'II', title: 'Strategic Blueprint', desc: 'Custom transition roadmap ensuring zero business friction.' },
    { id: 'III', title: 'Precision Migration', desc: 'Safe data translation into the NetJetGo secure core.' },
    { id: 'IV', title: 'Scaling Success', desc: 'Continuous expansion on our high-performance infrastructure.' },
  ];

  return (
    <section id="process" className="bg-deep">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
          <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>Mission Execution</span>
          <h2 style={{ fontSize: '3.5rem' }}>The NetJetGo <span className="gradient-text">Success Model.</span></h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{ 
                fontSize: '6rem', 
                fontWeight: 900, 
                background: 'var(--rocket-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: 0.2,
                position: 'absolute',
                top: '-3rem',
                left: '-1rem'
              }}>
                {step.id}
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{step.title}</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
