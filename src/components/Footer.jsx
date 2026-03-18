import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--nav-navy)', color: 'var(--white)', padding: '10rem 0 4rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '6rem', marginBottom: '8rem' }}>
          <div>
            <img src="/src/assets/logo.png" alt="NetJetGo Logo" style={{ height: '50px', marginBottom: '2.5rem', filter: 'brightness(0) invert(1)' }} />
            <p style={{ opacity: 0.6, fontSize: '1.1rem', maxWidth: '350px', lineHeight: 1.8 }}>
              Accelerating the digital transformation of global enterprises through the synergy of IT excellence and creative design.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Core Modules</h4>
            <ul style={{ listStyle: 'none', opacity: 0.7, fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Enterprise ERP</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Deep CRM</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Security Core</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Automation AI</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Network</h4>
            <ul style={{ listStyle: 'none', opacity: 0.7, fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Middle East Hub</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Western Connect</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Asian Operations</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Connect</h4>
            <ul style={{ listStyle: 'none', opacity: 0.7, fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Talk to Sales</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>HQ Office</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Global Support</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Partnership</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', opacity: 0.5, fontSize: '0.95rem' }}>
          <div>© 2026 NetJetGo International. Part of the Netjet Network.</div>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
