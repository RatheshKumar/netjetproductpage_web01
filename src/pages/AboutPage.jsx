import React from 'react';
import { Heart, Shield, Zap, Globe, MessageCircle, ArrowRight, Send, Share2, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const AboutPage = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div className="pt-20" ref={scrollRef}>
      {/* SECTION 1: HERO (INDIGO) */}
      <section className="section-indigo pt-24 pb-32 text-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 fade-in-up">
          <h1 className="text-white mb-6">Built for the Backbone of India</h1>
          <p className="text-white/75 text-xl max-w-3xl mx-auto leading-relaxed">
            NetJetGo was born out of frustration. Running a business shouldn't mean fighting with disconnected software. We're here to unify your sales and your people.
          </p>
        </div>
      </section>

      {/* SECTION 2: MISSION (WHITE) */}
      <section className="section-white py-24 border-b border-border-light">
        <div className="max-w-[900px] mx-auto px-6 fade-in-up">
          <div className="bg-page-bg/50 border border-border-light p-10 md:p-16 rounded-[24px] relative">
            <span className="text-brand-indigo text-6xl font-extrabold absolute top-8 left-8 opacity-10 font-display leading-none">“</span>
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display mb-10 leading-tight">
                "We're building the tool we wish we had. One platform that knows your entire business — your sales pipeline, your team, and your payroll. Built specifically for how Indian SMEs work."
              </h2>
              <div className="flex flex-col items-center">
                <div className="w-12 h-1 bg-gradient-to-r from-brand-indigo to-accent-pink mb-4" />
                <p className="text-brand-indigo font-extrabold text-[12px] uppercase tracking-widest">The NetJetGo Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STATS STRIP (ALT LIGHT) */}
      <section className="section-alt py-20 border-b border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 stagger-1">
            {[
              { stat: "6 hrs/wk", label: "Wasted on manual data entry" },
              { stat: "₹8,000/mo", label: "Average cost of fragmented tools" },
              { stat: "1,247+", label: "Businesses on the waitlist" }
            ].map((item, i) => (
              <div key={i} className="text-center fade-in-up">
                <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary font-display mb-3 tracking-tight">{item.stat}</h3>
                <p className="text-text-muted text-[13px] font-bold uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: VALUES (WHITE) */}
      <section className="section-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-text-muted">The principles driving the NetJetGo ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Built for India", 
                desc: "INR pricing, Mumbai-based servers, and DPDPA 2023 compliance from day one.", 
                icon: Globe 
              },
              { 
                title: "Radical Unity", 
                desc: "Why have 3 logins when you can have one? We focus on the points where modules connect.", 
                icon: Zap 
              },
              { 
                title: "Human Support", 
                desc: "No bots. Our founding members get direct access to the team via Slack and dedicated calls.", 
                icon: Heart 
              }
            ].map((val, i) => (
              <div key={i} className="text-center flex flex-col items-center fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 bg-brand-indigo/10 rounded-2xl flex items-center justify-center text-brand-indigo mb-8">
                  <val.icon size={32} />
                </div>
                <h3 className="text-xl mb-4">{val.title}</h3>
                <p className="text-text-muted leading-relaxed text-[15px]">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SOCIAL UPDATES (ALT LIGHT) */}
      <section className="section-alt py-24 border-y border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="mb-4">Follow the Journey</h2>
            <p className="text-text-muted">Real-time updates as we build the business OS of the future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-1">
            {[
              { 
                text: "Phase 2 is officially complete! Our AI assistant can now fetch data across both CRM and HRM modules seamlessly.", 
                date: "April 2026" 
              },
              { 
                text: "Just crossed 1,000 waitlist signups. Thank you for the trust. We're working double time for the launch.", 
                date: "March 2026" 
              },
              { 
                text: "Started integration tests for WhatsApp Business API. This will be a game changer for lead response times.", 
                date: "Feb 2026" 
              }
            ].map((post, i) => (
              <div key={i} className="bg-white border border-border-light p-8 rounded-[18px] fade-in-up hover:border-brand-indigo/30 transition-all">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-brand-indigo rounded-lg flex items-center justify-center text-white font-bold text-xs">NJ</div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">NetJetGo Team</h4>
                    <p className="text-text-subtle text-[11px]">{post.date}</p>
                  </div>
                </div>
                <p className="text-text-primary text-[15px] leading-relaxed italic mb-8">"{post.text}"</p>
                <div className="flex space-x-4">
                  <Send size={16} className="text-text-subtle hover:text-brand-indigo cursor-pointer transition-colors" />
                  <Share2 size={16} className="text-text-subtle hover:text-brand-indigo cursor-pointer transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA (INDIGO) */}
      <section className="section-indigo py-32 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 fade-in-up">
          <h2 className="text-white mb-8">Be part of the founding story</h2>
          <p className="text-white/75 text-lg mb-12">The first 200 businesses get exclusive perks and direct influence.</p>
          <Link to="/waitlist" className="btn-primary py-5 px-14 text-lg inline-flex items-center space-x-3 shadow-xl">
            <span>Join the Waitlist</span>
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
