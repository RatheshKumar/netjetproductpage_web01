import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section className="cta" style={{ textAlign: 'center', background: 'rgba(99, 102, 241, 0.03)', padding: '8rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to <span className="gradient-text">Accelerate?</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Join the beta waitlist today and be the first to experience the next evolution of business management.
            </p>
            <button className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>Join the Waitlist</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
