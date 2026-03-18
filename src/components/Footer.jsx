import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#F9FBFE', padding: '10rem 0 5rem', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '6rem', marginBottom: '8rem' }}>
          <div>
            <img src="/src/assets/logo.png" alt="NetJetGo" style={{ height: '42px', marginBottom: '2.5rem' }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '350px', lineHeight: 1.8 }}>
              Part of Netjet International. We orchestrate digital transformation through unified enterprise intelligence.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Platform</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Solutions</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Governance</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Integrations</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Global Support</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Our Mission</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Expertise</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Network</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Use</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '3rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          <div>© 2026 NetJetGo International. Your Goal, Our Code.</div>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <span>LinkedIn</span>
            <span>Twitter</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
