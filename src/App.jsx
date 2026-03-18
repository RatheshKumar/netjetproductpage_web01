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
        <Features />
        <Process />
        <About />
        <section className="cta" style={{ textAlign: 'center', background: 'var(--primary)', color: 'white', padding: '10rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem' }}>Accelerate your business <br /> <span style={{ opacity: 0.8 }}>with NetJetGo.</span></h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9 }}>
              Join thousands of enterprises already optimizing their operations with our unified suite.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <button className="btn-secondary" style={{ padding: '1rem 3rem', background: 'white', color: 'var(--primary)', border: 'none' }}>Pre-Register Today</button>
              <button className="btn-primary" style={{ padding: '1rem 3rem', background: 'rgba(255,255,255,0.1)', border: '1px solid white' }}>Talk to Sales</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
