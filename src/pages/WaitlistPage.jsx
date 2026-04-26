import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Loader2, 
  Share2, 
  Send, 
  ShieldCheck, 
  Check,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SpotCounter from '../components/SpotCounter.jsx';
import useCountdown from '../hooks/useCountdown.js';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const TestimonialCard = ({ quote, author, city }) => (
  <div className="card-standard p-10 relative">
    <span className="text-brand-indigo text-5xl font-extrabold absolute top-6 left-6 opacity-10 font-display leading-none">“</span>
    <p className="text-text-primary text-[15px] italic leading-relaxed relative z-10 mb-8">"{quote}"</p>
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo font-bold text-xs">
        {author[0]}
      </div>
      <div>
        <p className="text-text-primary font-bold text-sm">{author}</p>
        <p className="text-text-subtle text-[11px] font-bold uppercase tracking-widest">{city}</p>
      </div>
    </div>
  </div>
);

const WaitlistPage = ({ spotsRemaining, decrementSpots }) => {
  const timeLeft = useCountdown('2026-09-01T00:00:00');
  const scrollRef = useScrollAnimation();

  const [formData, setFormData] = useState({ fullName: '', email: '', companyName: '', teamSize: '', tools: [], interest: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleToolChange = (tool) => {
    setFormData(prev => ({
      ...prev,
      tools: prev.tools.includes(tool) ? prev.tools.filter(t => t !== tool) : [...prev.tools, tool]
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid work email required';
    }
    if (!formData.companyName) newErrors.companyName = 'Company is required';
    if (!formData.teamSize) newErrors.teamSize = 'Please select a team size';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      if (decrementSpots) decrementSpots();
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="pt-40 pb-32 min-h-screen bg-page-bg flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-brand-indigo rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl animate-in zoom-in duration-500">
            <Check size={40} strokeWidth={3} className="text-white" />
          </div>
          <h2 className="text-4xl font-extrabold text-text-primary font-display mb-4">Welcome to the Founding Cohort!</h2>
          <p className="text-text-muted text-lg mb-12">Member #0049 — watch your inbox for the official launch link.</p>
          
          <div className="bg-white border border-border-light p-10 rounded-[24px] shadow-sm mb-12">
            <p className="text-text-subtle font-bold uppercase tracking-widest text-[11px] mb-4">Assigned Member Number</p>
            <p className="text-6xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-accent-pink tracking-tighter">#0049</p>
          </div>

          <div className="space-y-6">
            <p className="text-text-primary font-bold">Help us spread the word:</p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center space-x-3 px-8 py-3.5 rounded-full border border-border-medium text-text-muted font-bold hover:text-brand-indigo hover:border-brand-indigo transition-all">
                <Send size={20} />
                <span>Share on X</span>
              </button>
              <button className="flex items-center space-x-3 px-8 py-3.5 rounded-full border border-border-medium text-text-muted font-bold hover:text-brand-indigo hover:border-brand-indigo transition-all">
                <Share2 size={20} />
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20" ref={scrollRef}>
      {/* SECTION 1: HERO (INDIGO) */}
      <section className="section-indigo pt-24 pb-32 text-center">
        <div className="max-w-[1200px] mx-auto px-6 fade-in-up">
          <h1 className="text-white mb-6">Claim your Founding Spot</h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto mb-12">Join 1,247+ businesses locking in the unified OS and a lifetime 40% discount.</p>
          <div className="max-w-md mx-auto">
            <SpotCounter spotsRemaining={spotsRemaining} variant="indigo" />
          </div>
        </div>
      </section>

      {/* SECTION 2: FORM + BENEFITS (ALT LIGHT) */}
      <section className="section-alt py-24 border-b border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: Benefits + Card */}
            <div className="space-y-16 fade-in-up">
              <div className="space-y-6">
                {[
                  "Access 4 weeks before public launch",
                  "40% lifetime discount — locked forever",
                  "Direct Slack access to the product team",
                  "White-glove onboarding & data migration",
                  "Your name on the Founding Members wall",
                  "Vote on our Q4 feature roadmap"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-brand-indigo/10 rounded-full flex items-center justify-center text-brand-indigo">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-text-primary font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Founding Member Card */}
              <div className="perspective-[1000px] flex justify-center lg:justify-start">
                <div className="w-[340px] h-[200px] rounded-[18px] p-8 flex flex-col justify-between overflow-hidden group hover:rotate-y-12 transition-transform duration-500 bg-gradient-to-br from-brand-indigo via-brand-indigo-hover to-accent-pink shadow-[0_20px_60px_rgba(61,59,175,0.35)] shimmer-card">
                  <div className="flex justify-between items-start relative z-10 text-white font-mono font-bold text-[14px] uppercase tracking-tighter">
                    <span>NETJETGO</span>
                    <Rocket size={20} />
                  </div>
                  <div className="relative z-10 text-center">
                    <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-white/70">FOUNDING MEMBER</span>
                  </div>
                  <div className="flex justify-between items-end relative z-10 font-mono">
                    <span className="text-white text-[15px] italic truncate max-w-[200px]">
                      {formData.companyName || 'Your Company Name'}
                    </span>
                    <span className="text-[14px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-orange">
                      #0048
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Signup Form */}
            <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white border border-border-light p-8 md:p-12 rounded-[24px] shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-text-muted uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Jane Doe" className="input-standard w-full" />
                      {errors.fullName && <p className="text-accent-pink text-[11px] font-bold ml-1">{errors.fullName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-text-muted uppercase tracking-widest ml-1">Work Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane@company.com" className="input-standard w-full" />
                      {errors.email && <p className="text-accent-pink text-[11px] font-bold ml-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-text-muted uppercase tracking-widest ml-1">Company</label>
                      <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Startup Inc." className="input-standard w-full" />
                      {errors.companyName && <p className="text-accent-pink text-[11px] font-bold ml-1">{errors.companyName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-text-muted uppercase tracking-widest ml-1">Team Size</label>
                      <select name="teamSize" value={formData.teamSize} onChange={handleInputChange} className="input-standard w-full cursor-pointer appearance-none">
                        <option value="">Select size</option>
                        <option value="1-10">1–10 employees</option>
                        <option value="11-50">11–50 employees</option>
                        <option value="51-200">51–200 employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[11px] font-bold text-text-muted uppercase tracking-widest ml-1">Current Tools</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Zoho', 'Keka', 'HubSpot', 'Salesforce', 'Excel', 'Other'].map(tool => (
                        <button key={tool} type="button" onClick={() => handleToolChange(tool)} className={`py-3 px-4 rounded-[10px] border text-[11px] font-bold transition-all ${formData.tools.includes(tool) ? 'bg-brand-indigo/10 border-brand-indigo text-brand-indigo' : 'bg-white border-border-light text-text-muted hover:border-text-subtle'}`}>
                          {tool}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-5 text-lg flex items-center justify-center space-x-3 shadow-xl">
                    {status === 'loading' ? <Loader2 size={24} className="animate-spin" /> : <><span>Claim My Founder Spot</span><ArrowRight size={22} /></>}
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[11px] font-bold text-text-subtle uppercase tracking-widest">
                    <ShieldCheck size={16} className="text-brand-indigo" />
                    <span>Secure & Private · DPDPA Compliant</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TESTIMONIALS (WHITE) */}
      <section className="section-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="mb-4">Founders are Excited</h2>
            <p className="text-text-muted">Join the growing community of forward-thinking SMEs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-1">
            {[
              { q: "Finally, one tool for sales AND staff. This changes everything for our 40-person team.", a: "Priya", c: "Bangalore" },
              { q: "Replaced two expensive tools in the beta. The AI assistant alone is worth the subscription.", a: "Arjun", c: "Chennai" },
              { q: "Payroll is exactly what we needed. Simple, accurate, and saves us days of work.", a: "Meera", c: "Hyderabad" }
            ].map((item, i) => (
              <div key={i} className="fade-in-up">
                <TestimonialCard quote={item.q} author={item.a} city={item.c} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FINAL CTA (INDIGO) */}
      <section className="section-indigo py-32 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 fade-in-up">
          <h2 className="text-white mb-8">Ready to unify your business?</h2>
          <p className="text-white/75 text-lg mb-12">The first 200 businesses get exclusive perks and direct influence.</p>
          <Link to="/" className="btn-ghost px-14 py-5 text-lg inline-flex items-center space-x-3">
            <span>Back to Home</span>
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WaitlistPage;
