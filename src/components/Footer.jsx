import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--glass-border)', marginTop: '5rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="footer-logo" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
          NetJet<span className="gradient-text">Go</span>
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          © 2026 NetJetGo Inc. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Twitter</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
