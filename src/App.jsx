import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import About from './components/About';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trust Banner */}
        <div style={{ background: '#F8FAFC', padding: '3rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.4, filter: 'grayscale(1)' }}>
            <span style={{ fontWeight: 800 }}>MITSUBISHI</span>
            <span style={{ fontWeight: 800 }}>SIEMENS</span>
            <span style={{ fontWeight: 800 }}>ERICSSON</span>
            <span style={{ fontWeight: 800 }}>NESTLE</span>
            <span style={{ fontWeight: 800 }}>SAMSUNG</span>
          </div>
        </div>

        <Features />
        <Process />
        <About />
        
        {/* Final CTA */}
        <section style={{ textAlign: 'center', padding: '12rem 0', background: 'white' }}>
          <div className="container">
            <span className="section-eyebrow">Ready to begin?</span>
            <h2 style={{ fontSize: '4.5rem', marginBottom: '2.5rem', lineHeight: 1.1 }}>
              Secure your <span className="gradient-text">Elite Access</span> <br /> 
              to NetJetGo today.
            </h2>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem' }}>
              Join the international network of enterprises that have simplified their complexity.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <button className="btn-accent" style={{ padding: '1.25rem 3.5rem' }}>Join the Waitlist</button>
              <button className="btn-primary" style={{ padding: '1.25rem 3.5rem', background: 'transparent', color: 'var(--primary-navy)', border: '1px solid var(--border)' }}>Speak with an Expert</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
