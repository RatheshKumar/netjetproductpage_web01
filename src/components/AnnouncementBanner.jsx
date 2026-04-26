import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('njg_announcement_dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('njg_announcement_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="relative z-[60] bg-gradient-to-r from-brand-indigo to-accent-pink py-2.5 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-3 text-white text-[13px] md:text-[14px] font-medium">
          <span className="flex h-1.5 w-1.5 rounded-full bg-white pulse-dot"></span>
          <p className="tracking-wide">
            🚀 Launching Q3 2026 — Only 47 spots left. Join 1,247 businesses on the waitlist →
          </p>
        </div>
        <button 
          onClick={handleDismiss}
          className="absolute right-6 text-white/80 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
