import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AnnouncementBanner from './components/AnnouncementBanner.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import RoadmapPage from './pages/RoadmapPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import WaitlistPage from './pages/WaitlistPage.jsx';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [spotsRemaining, setSpotsRemaining] = useState(47);

  const decrementSpots = () => {
    setSpotsRemaining(prev => Math.max(0, prev - 1));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-dark-base text-text-primary">
        <AnnouncementBanner />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  spotsRemaining={spotsRemaining} 
                  decrementSpots={decrementSpots} 
                />
              } 
            />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route 
              path="/waitlist" 
              element={
                <WaitlistPage 
                  spotsRemaining={spotsRemaining} 
                  decrementSpots={decrementSpots} 
                />
              } 
            />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
