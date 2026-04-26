import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowUpCircle, 
  Code,
  Smartphone,
  MessageCircle,
  Database,
  BarChart,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const RoadmapPage = () => {
  const scrollRef = useScrollAnimation();
  
  const [votes, setVotes] = useState({ mobile: 234, whatsapp: 189, tally: 156, reports: 143 });
  const [voted, setVoted] = useState({ mobile: false, whatsapp: false, tally: false, reports: false });

  const handleVote = (id) => {
    if (!voted[id]) {
      setVotes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setVoted(prev => ({ ...prev, [id]: true }));
    }
  };

  const phases = [
    {
      id: 1,
      title: "Core Foundation",
      status: "complete",
      date: "Q1 2026",
      desc: "Building the engine that powers NetJetGo.",
      items: ["CRM Core (Leads, Contacts)", "HRM Core (Payroll, Leaves)", "JWT Auth & RBAC", "Unified Dashboard v1"]
    },
    {
      id: 2,
      title: "Intelligence Layer",
      status: "complete",
      date: "Q2 2026",
      desc: "Adding AI and discovery tools.",
      items: ["AI Assistant Beta", "Global Cmd+K Search", "Real-time Lead Scoring", "Automation Engine"]
    },
    {
      id: 3,
      title: "Automation & Expansion",
      status: "in-progress",
      date: "Q3 2026 (Launch)",
      desc: "Enhancing connectivity and scale.",
      items: ["WhatsApp API Sync", "Payroll Bulk processing", "Mobile PWA Experience", "Recruitment Module"]
    },
    {
      id: 4,
      title: "Public Ecosystem",
      status: "upcoming",
      date: "Late 2026",
      desc: "Opening up the platform.",
      items: ["Public API Access", "Zapier Integration", "Advanced Analytics", "Custom Workflow Builder"]
    }
  ];

  return (
    <div className="pt-20" ref={scrollRef}>
      {/* SECTION 1: HERO (INDIGO) */}
      <section className="section-indigo pt-24 pb-32 text-center">
        <div className="max-w-[1200px] mx-auto px-6 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-10">
            <Code size={14} className="text-accent-pink" />
            <span className="text-white text-[11px] font-bold uppercase tracking-widest">Building in Public</span>
          </div>
          <h1 className="text-white mb-6">Our Path to Unity</h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">Transparency is our core value. See what we've shipped and what's coming next.</p>
        </div>
      </section>

      {/* SECTION 2: TIMELINE (WHITE) */}
      <section className="section-white py-24 border-b border-border-light relative overflow-hidden">
        <div className="max-w-[800px] mx-auto px-6 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-indigo to-accent-pink md:-translate-x-1/2" />

          <div className="space-y-16">
            {phases.map((phase, i) => (
              <div key={phase.id} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} fade-in-up`}>
                {/* Dot */}
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 border-4 border-white ${
                  phase.status === 'complete' ? 'bg-gradient-to-br from-brand-indigo to-accent-pink shadow-[0_0_0_4px_rgba(61,59,175,0.15)]' : 
                  phase.status === 'in-progress' ? 'bg-accent-orange pulse-ring' : 'bg-white border-2 border-border-medium border-dashed'
                }`} />

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`bg-white border border-border-light rounded-[18px] p-8 shadow-sm ${
                    phase.status === 'complete' ? 'border-l-4 border-l-brand-indigo' : 
                    phase.status === 'in-progress' ? 'border-l-4 border-l-accent-orange shadow-[0_0_20px_rgba(245,166,35,0.1)]' : 'border-l-4 border-l-border-medium opacity-70'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                        phase.status === 'complete' ? 'bg-brand-indigo/5 text-brand-indigo border-brand-indigo/10' : 
                        phase.status === 'in-progress' ? 'bg-accent-orange/10 text-accent-orange border-accent-orange/10' : 'bg-page-bg text-text-subtle border-border-light'
                      }`}>
                        {phase.status}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-text-subtle">{phase.date}</span>
                    </div>
                    <h3 className="text-xl font-extrabold mb-4 font-display">{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-[14px] text-text-muted">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${phase.status === 'complete' ? 'bg-brand-indigo' : 'bg-border-medium'}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VOTING (ALT LIGHT) */}
      <section className="section-alt py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="mb-4">Shape our Future</h2>
            <p className="text-text-muted">What should we prioritize next? You decide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-1">
            {[
              { id: 'mobile', title: "Mobile Apps", icon: Smartphone },
              { id: 'whatsapp', title: "WhatsApp v2", icon: MessageCircle },
              { id: 'tally', title: "Tally Sync", icon: Database },
              { id: 'reports', title: "Custom Reports", icon: BarChart }
            ].map((item, i) => (
              <div key={item.id} className="bg-white border border-border-light p-8 rounded-[18px] text-center flex flex-col items-center fade-in-up transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-brand-indigo/5 rounded-2xl flex items-center justify-center text-brand-indigo mb-6">
                  <item.icon size={28} />
                </div>
                <h4 className="font-bold text-lg mb-2 font-display">{item.title}</h4>
                <p className="text-[11px] font-bold text-text-subtle uppercase tracking-widest mb-8">{votes[item.id]} Votes</p>
                
                <button
                  onClick={() => handleVote(item.id)}
                  className={`w-full py-3.5 rounded-[12px] font-bold text-[14px] transition-all duration-300 flex items-center justify-center space-x-2 ${
                    voted[item.id] 
                      ? 'bg-gradient-to-br from-brand-indigo to-accent-pink text-white border-transparent' 
                      : 'bg-white border-[1.5px] border-border-light text-text-muted hover:border-brand-indigo hover:text-brand-indigo'
                  }`}
                >
                  <ArrowUpCircle size={18} />
                  <span>{voted[item.id] ? 'Voted' : 'Upvote'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA (INDIGO) */}
      <section className="section-indigo py-32 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 fade-in-up">
          <h2 className="text-white mb-6">Join the Journey</h2>
          <p className="text-white/75 text-lg mb-12">Influence the product direction as a founding member.</p>
          <Link to="/waitlist" className="btn-primary py-5 px-14 text-lg inline-flex items-center space-x-3 shadow-xl">
            <span>Join the Waitlist</span>
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoadmapPage;
