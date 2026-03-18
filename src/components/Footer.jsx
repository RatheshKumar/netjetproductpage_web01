import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--navy)', color: 'var(--white)', padding: '5rem 0 3rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
          <div className="footer-brand">
            <img src="/src/assets/logo.png" alt="NetJetGo Color Logo" style={{ height: '40px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', maxWidth: '300px' }}>
              The future of business management. Beyond & More. Empowering enterprises with unified ERP & CRM solutions.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Platform</h4>
            <ul style={{ listStyle: 'none', color: '#94A3B8', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Solutions</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>ERP Modules</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>CRM Features</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', color: '#94A3B8', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Press</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', color: '#94A3B8', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: '#64748B', fontSize: '0.8rem' }}>
          <div>© 2026 NetJetGo Inc. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
