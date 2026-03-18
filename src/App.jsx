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
        <section style={{ 
          textAlign: 'center', 
          background: 'var(--navy-gradient)', 
          padding: '12rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background decoration */}
          <div style={{ 
            position: 'absolute', 
            top: '-50px', 
            right: '-50px', 
            width: '300px', 
            height: '300px', 
            background: 'var(--rocket-gradient)', 
            filter: 'blur(150px)',
            opacity: 0.2
          }}></div>

          <div className="container">
            <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>Final Step</span>
            <h2 style={{ fontSize: '4.5rem', color: 'white', marginBottom: '2.5rem', fontWeight: 900 }}>
              Build Your <br /> <span className="gradient-text">Future-Ready</span> Enterprise.
            </h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem', opacity: 0.8, color: 'white' }}>
              Join the elite circle of businesses transforming their operations with our high-performance model.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem' }}>
              <button className="btn-premium" style={{ border: 'none' }}>Get Early Access</button>
              <button className="btn-outline" style={{ borderColor: 'white', color: 'white' }}>Talk to an Expert</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
