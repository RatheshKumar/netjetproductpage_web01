import React from 'react';

const Process = () => {
  const steps = [
    { number: '01', title: 'Consultation', description: 'Our experts analyze your current business workflows and identify bottlenecks.' },
    { number: '02', title: 'Configuration', description: 'We tailor the NetJetGo modules to fit your specific industry requirements.' },
    { number: '03', title: 'Migration', description: 'Seamlessly transition your data with Zero-Downtime migration protocols.' },
    { number: '04', title: 'Go Live', description: 'Your team starts operating on a unified, high-performance platform.' },
  ];

  return (
    <section id="process" className="bg-navy">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-tag" style={{ color: 'var(--accent)' }}>Implementation</span>
          <h2 style={{ fontSize: '3rem' }}>The Journey to <span className="gradient-text">Digital Excellence.</span></h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', position: 'relative' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{ 
                fontSize: '4rem', 
                fontWeight: 900, 
                color: 'rgba(255,255,255,0.05)', 
                position: 'absolute', 
                top: '-2rem', 
                left: '0' 
              }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', position: 'relative' }}>{step.title}</h3>
              <p style={{ position: 'relative' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
