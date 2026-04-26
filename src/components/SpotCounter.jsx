import React from 'react';

const SpotCounter = ({ spotsRemaining, variant = "light" }) => {
  const totalSpots = 200;
  const percentage = ((totalSpots - spotsRemaining) / totalSpots) * 100;
  const isUrgent = spotsRemaining < 50;

  return (
    <div className={`${variant === 'indigo' ? 'bg-white/10 border-white/20' : 'bg-white border-border-light'} border p-7 rounded-[14px] transition-all duration-300`}>
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className={`${variant === 'indigo' ? 'text-white' : 'text-text-primary'} font-bold text-[17px] flex items-center space-x-2`}>
            <span>{isUrgent ? '🔥' : '⚡'}</span>
            <span>{spotsRemaining} of {totalSpots} spots remaining</span>
          </p>
        </div>
        <span className={`${variant === 'indigo' ? 'text-white/50' : 'text-text-muted'} text-[11px] font-mono font-bold uppercase tracking-widest`}>
          {percentage.toFixed(1)}% Capacity
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-border-light rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-brand-indigo to-accent-pink rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className={`mt-4 ${variant === 'indigo' ? 'text-white/60' : 'text-text-muted'} text-[13px] flex items-center space-x-2`}>
        <span className="flex h-1.5 w-1.5 rounded-full bg-accent-orange pulse-dot"></span>
        <span>12 businesses joined in the last 24 hours</span>
      </p>
    </div>
  );
};

export default SpotCounter;
