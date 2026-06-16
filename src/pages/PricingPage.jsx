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
  const scrollRef = useScrollAnimation();

  const pricingData = [
    {
      name: "Essential",
      desc: "For small businesses starting to digitize operations.",
      features: [
<<<<<<< HEAD
        "Up to 5 Users",
        "Employee Profile Directory",
        "Attendance & Time Tracking",
        "Basic Onboarding Checklists",
        "Email Support",
        "2GB Document Storage"
=======
        "Best for: 5–25 employees"
>>>>>>> 69835818a2a2ee6c04d5b69fb79d722936fac76a
      ],
      cta: "Schedule a Demo",
      highlight: false
    },
    {
<<<<<<< HEAD
      name: "Growth",
      price: billingCycle === 'annual' ? 1499 : 2499,
      origPrice: billingCycle === 'annual' ? 2499 : 3999,
      desc: "Perfect for scaling SMEs needing advanced HR automation.",
      features: [
        "Up to 25 Users",
        "Automated Payroll Engine",
        "Leave & Offboarding Workflows",
        "Asset Allocation Logs",
        "WhatsApp Alerts Integration",
        "10GB Document Storage",
        "Priority Support"
      ],
      cta: "Join Growth",
=======
      name: "Professional",
      desc: "For growing teams that need automation.",
      features: [
        "Everything in Essential, plus",
        "Best for: 25–100 employees"
      ],
      cta: "Talk to Sales",
>>>>>>> 69835818a2a2ee6c04d5b69fb79d722936fac76a
      highlight: true,
      badge: "MOST POPULAR"
    },
    {
      name: "Enterprise",
      desc: "For organizations requiring customization.",
      features: [
<<<<<<< HEAD
        "Unlimited Users",
        "Everything in Growth",
        "Custom RBAC & Approvals",
        "Advanced Workforce Analytics",
        "API & Custom Integrations",
        "Dedicated Success Lead",
        "Custom Data Migration"
=======
        "Everything in Professional, plus",
        "Best for: 100+ employees"
>>>>>>> 69835818a2a2ee6c04d5b69fb79d722936fac76a
      ],
      cta: "Request a Proposal",
      highlight: false
    }
  ];

  return (
    <div ref={scrollRef}>
      {/* SECTION 1: HERO (INDIGO) */}
      <section className="section-indigo pt-32 lg:pt-40 pb-32 overflow-hidden text-center">
        <div className="max-w-[1200px] mx-auto px-6 fade-in-up">
          <h1 className="text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            No hidden fees. One subscription for your whole business. Start your 14-day free trial today.
          </p>
<<<<<<< HEAD

          <div className="max-w-2xl mx-auto bg-white/10 border border-white/20 rounded-[18px] p-4 text-white font-bold flex items-center justify-center space-x-3 shadow-xl">
            <span className="text-accent-orange">🔥 Launch Special:</span>
            <span className="text-[15px]">Get a 14-day free trial on any premium plan.</span>
          </div>
=======
>>>>>>> 69835818a2a2ee6c04d5b69fb79d722936fac76a
        </div>
      </section>

      {/* SECTION 2: PRICING CARDS (ALT LIGHT) */}
      <section className="section-alt py-24">
        <div className="max-w-[1200px] mx-auto px-6">
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
<<<<<<< HEAD
            <p className="text-text-muted">Everything you need to know about our plans and features.</p>
=======
            <p className="text-text-muted">Everything you need to know about NetJetGo's pricing and onboarding.</p>
>>>>>>> 69835818a2a2ee6c04d5b69fb79d722936fac76a
          </div>

          <div className="bg-white border border-border-light rounded-[18px] overflow-hidden fade-in-up">
            {[
              {
<<<<<<< HEAD
                q: "Can I change my plan later?",
                a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your organization settings dashboard."
=======
                q: "How can I evaluate NetJetGo?",
                a: "You can schedule a demo or request a proposal. We also offer a 14-day free trial following a brief consultation to tailor the platform for your organization."
>>>>>>> 69835818a2a2ee6c04d5b69fb79d722936fac76a
              },
              {
                q: "How is pricing calculated?",
                a: "We offer flexible pricing tiers designed around the size of your workforce. Contact our sales team to receive a quote matching your specific headcount and requirements."
              },
              {
<<<<<<< HEAD
                q: "Do you offer migration support?",
                a: "Yes. Founding members get 'White Glove Migration'. We'll handle the data export and import from Keka, Zoho People, or Excel for you."
=======
                q: "Do you assist with data migration?",
                a: "Yes, our team handles the export and import of your existing employee records, payroll logs, and documents from legacy systems at no extra cost."
>>>>>>> 69835818a2a2ee6c04d5b69fb79d722936fac76a
              },
              {
                q: "Is NetJetGo compliant with data residency regulations?",
                a: "Yes, we support enterprise-grade security compliance and offer flexible cloud deployment options to satisfy local data residency requirements."
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
              <span>Start Free Trial</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
