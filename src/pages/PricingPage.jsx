import React, { useState } from 'react';
import { Check, ArrowRight, Minus, Plus, HelpCircle, ChevronDown, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border-light transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 px-6 text-left hover:bg-page-bg transition-colors"
      >
        <span className="text-[17px] font-bold text-text-primary font-display">{question}</span>
        <div className={`text-brand-indigo transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={22} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-8 bg-page-bg">
          <p className="text-text-muted leading-relaxed text-[15px]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('annual');
  const scrollRef = useScrollAnimation();

  const pricingData = [
    {
      name: "Starter",
      price: billingCycle === 'annual' ? 999 : 1499,
      origPrice: billingCycle === 'annual' ? 1999 : 2499,
      desc: "For solopreneurs and tiny teams starting their journey.",
      features: [
        "Up to 5 Users",
        "CRM Core Module",
        "Pipeline Management",
        "Basic Lead Scoring",
        "Email Support",
        "2GB Document Storage"
      ],
      cta: "Join Starter",
      highlight: false
    },
    {
      name: "Growth",
      price: billingCycle === 'annual' ? 1499 : 2499,
      origPrice: billingCycle === 'annual' ? 2499 : 3999,
      desc: "Perfect for scaling SMEs needing CRM + HRM power.",
      features: [
        "Up to 25 Users",
        "Unified CRM + HRM",
        "Full AI Assistant",
        "Payroll Automation",
        "WhatsApp Integration",
        "10GB Document Storage",
        "Priority Support"
      ],
      cta: "Lock Growth Price",
      highlight: true,
      badge: "MOST POPULAR"
    },
    {
      name: "Enterprise",
      price: billingCycle === 'annual' ? 4199 : 6999,
      origPrice: billingCycle === 'annual' ? 6999 : 9999,
      desc: "Unlimited power for established companies with complex ops.",
      features: [
        "Unlimited Users",
        "Everything in Growth",
        "Custom RBAC Roles",
        "Advanced Analytics",
        "API & Zapier Access",
        "Dedicated Success Lead",
        "Custom Data Migration"
      ],
      cta: "Join Enterprise",
      highlight: false
    }
  ];

  return (
    <div className="pt-20" ref={scrollRef}>
      {/* SECTION 1: HERO (INDIGO) */}
      <section className="section-indigo pt-24 pb-32 overflow-hidden text-center">
        <div className="max-w-[1200px] mx-auto px-6 fade-in-up">
          <h1 className="text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto mb-12">
            No hidden fees. One subscription for your whole business. Join the first 200 and lock in early bird rates forever.
          </p>

          <div className="max-w-2xl mx-auto bg-white/10 border border-white/20 rounded-[18px] p-4 text-white font-bold flex items-center justify-center space-x-3 shadow-xl">
            <span className="text-accent-orange">🔥 Early Bird Special:</span>
            <span className="text-[15px]">Prices locked for the lifetime of your account.</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRICING CARDS (ALT LIGHT) */}
      <section className="section-alt py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-6 mb-20 fade-in-up">
            <span className={`text-[15px] font-bold ${billingCycle === 'monthly' ? 'text-text-primary' : 'text-text-muted'}`}>Monthly Billing</span>
            <button 
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
              className="w-16 h-8 bg-white border border-border-medium rounded-full p-1 relative transition-all hover:border-brand-indigo"
            >
              <div className={`w-6 h-6 bg-brand-indigo rounded-full transition-transform duration-300 ${billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center space-x-2">
              <span className={`text-[15px] font-bold ${billingCycle === 'annual' ? 'text-text-primary' : 'text-text-muted'}`}>Annual Billing</span>
              <span className="bg-brand-indigo/10 text-brand-indigo text-[11px] font-bold px-2 py-0.5 rounded-full border border-brand-indigo/20">SAVE 40%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch stagger-1">
            {pricingData.map((plan, i) => (
              <div 
                key={plan.name} 
                className={`relative flex flex-col h-full fade-in-up ${
                  plan.highlight 
                    ? 'bg-white border-2 border-brand-indigo rounded-[18px] p-10 shadow-[0_16px_48px_rgba(61,59,175,0.15)] lg:scale-105 z-10' 
                    : 'card-standard p-10'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-indigo to-accent-pink text-white text-[11px] font-extrabold px-5 py-2 rounded-full shadow-lg">
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className="text-2xl font-extrabold mb-3 font-display">{plan.name}</h3>
                  <p className="text-text-muted text-[14px] leading-relaxed">{plan.desc}</p>
                </div>

                <div className="mb-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-text-subtle line-through text-lg">₹{plan.origPrice}</span>
                    <span className="text-accent-pink text-[12px] font-extrabold tracking-widest uppercase">Early Bird</span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-extrabold text-text-primary font-display tracking-tight">₹{plan.price}</span>
                    <span className="text-text-muted font-medium">/mo</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-text-muted text-[15px]">
                      <Check size={20} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/waitlist" 
                  className={`w-full py-4 rounded-[12px] font-bold font-display transition-all duration-300 text-center ${
                    plan.highlight 
                      ? 'btn-primary shadow-xl' 
                      : 'bg-page-bg border border-border-light text-brand-indigo hover:bg-brand-indigo/5'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ (WHITE) */}
      <section className="section-white py-24 border-y border-border-light">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="mb-4">Common Questions</h2>
            <p className="text-text-muted">Everything you need to know about the founding cohort.</p>
          </div>

          <div className="bg-white border border-border-light rounded-[18px] overflow-hidden fade-in-up">
            {[
              {
                q: "What does 'Price Locked Forever' mean?",
                a: "If you join as a founding member at ₹1,499, that is your price for life. Even if we increase our public pricing to ₹5,000 in two years, your bill will never change."
              },
              {
                q: "Is there a per-user fee?",
                a: "No. Unlike Zoho or Salesforce, NetJetGo uses simple flat-rate tiers. A single 'Growth' plan covers your entire team up to 25 users."
              },
              {
                q: "Do you offer migration support?",
                a: "Yes. Founding members get 'White Glove Migration'. We'll handle the data export and import from Zoho CRM, Keka, or Excel for you."
              },
              {
                q: "Is NetJetGo compliant with Indian laws?",
                a: "Absolutely. We are fully compliant with the DPDPA 2023 and our servers are located in Mumbai to ensure data residency."
              }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: GUARANTEE (ALT LIGHT) */}
      <section className="section-alt py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white border border-border-light p-10 rounded-[24px] flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 fade-in-up shadow-sm">
            <div className="flex items-center space-x-6">
              <div className="bg-brand-indigo/10 p-4 rounded-full text-brand-indigo">
                <Shield size={40} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl mb-1">30-Day Money-Back Guarantee</h3>
                <p className="text-text-muted text-[15px]">Zero risk. If it's not the right fit, we'll refund you instantly.</p>
              </div>
            </div>
            <Link to="/waitlist" className="btn-brand px-10 py-4 flex items-center space-x-3">
              <span>Secure My Spot</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
