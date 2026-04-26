import React, { useState } from 'react';
import { Check, Loader2, ArrowRight } from 'lucide-react';

const WaitlistForm = ({ size = "hero", variant = "light", decrementSpots }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [error, setError] = useState('');

  const validateEmail = (e) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid work email');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      if (decrementSpots) decrementSpots();
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center space-x-3 ${variant === 'indigo' ? 'bg-white/10 border-white/20' : 'bg-brand-indigo/5 border-brand-indigo/10'} border rounded-[14px] p-4 animate-in fade-in zoom-in duration-500`}>
        <div className="w-10 h-10 bg-brand-indigo rounded-full flex items-center justify-center text-white flex-shrink-0">
          <Check size={22} strokeWidth={3} />
        </div>
        <div>
          <h4 className={`font-bold text-sm ${variant === 'indigo' ? 'text-white' : 'text-text-primary'}`}>🎉 You're on the list!</h4>
          <p className={variant === 'indigo' ? 'text-white/60 text-xs' : 'text-text-muted text-xs'}>Watch your inbox for early access updates.</p>
        </div>
      </div>
    );
  }

  const isHero = size === 'hero';
  const isInline = size === 'inline';

  return (
    <div className="w-full">
      <form 
        onSubmit={handleSubmit}
        className={`flex flex-col ${isInline ? 'md:flex-row' : ''} gap-3`}
      >
        <div className="flex-grow relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter your work email"
            className={`w-full ${variant === 'indigo' ? 'input-indigo' : 'input-standard'} ${
              error ? 'border-accent-pink/50' : ''
            }`}
            disabled={status === 'loading'}
          />
          {error && (
            <p className="absolute -bottom-6 left-2 text-accent-pink text-[11px] font-bold uppercase tracking-wider">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`${variant === 'indigo' ? 'btn-primary' : 'btn-primary'} whitespace-nowrap flex items-center justify-center space-x-2 ${
            isHero ? 'px-10 py-4 text-[16px]' : 'px-8 py-4'
          }`}
        >
          {status === 'loading' ? (
            <Loader2 size={24} className="animate-spin" />
          ) : (
            <>
              <span>{isHero ? 'Claim My Spot' : 'Join Waitlist'}</span>
              <ArrowRight size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
