import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Target, 
  Users, 
  Shield, 
  Search, 
  Bot, 
  BarChart, 
  Smartphone,
  Calendar,
  Clock,
  Briefcase,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const FeaturesPage = () => {
  const [activeModule, setActiveModule] = useState('crm');
  const scrollRef = useScrollAnimation();

  const crmFeatures = [
    { 
      title: "Unified Pipeline", 
      desc: "Manage leads with precision. Automated follow-ups and stage-based AI lead scoring.", 
      icon: Target,
      status: "beta"
    },
    { 
      title: "360° Contacts", 
      desc: "A complete history of every customer interaction, ticket, and deal in one place.", 
      icon: Users,
      status: "beta"
    },
    { 
      title: "Smart Support", 
      desc: "Ticketing system integrated with sales data. Solve problems before they churn.", 
      icon: Shield,
      status: "beta"
    },
    { 
      title: "Marketing Flow", 
      desc: "Launch multi-channel campaigns with automated attribution and ROI tracking.", 
      icon: Zap,
      status: "upcoming"
    }
  ];

  const hrmFeatures = [
    { 
      title: "Team Profiles", 
      desc: "Digital records for every employee including documents, payroll history, and performance.", 
      icon: Briefcase,
      status: "beta"
    },
    { 
      title: "Instant Payroll", 
      desc: "One-click payroll processing with automated tax calculations and bank-ready exports.", 
      icon: FileText,
      status: "beta"
    },
    { 
      title: "Leave Control", 
      desc: "Custom leave policies and automated approval workflows that sync with team calendars.", 
      icon: Calendar,
      status: "beta"
    },
    { 
      title: "Attendance Live", 
      desc: "Cloud attendance with geo-fencing and real-time visibility into your workforce.", 
      icon: Clock,
      status: "upcoming"
    }
  ];

  return (
    <div className="pt-20" ref={scrollRef}>
      {/* SECTION 1: HERO (INDIGO) */}
      <section className="section-indigo pt-24 pb-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 text-center fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-10">
            <span className="text-white text-[11px] font-bold uppercase tracking-widest">
              ✓ Unified OS · Replaces 3+ Tools
            </span>
          </div>
          <h1 className="text-white mb-6">Built for High-Growth Teams</h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto leading-relaxed">
            One login. Two modules. Zero friction. NetJetGo bridges the gap between your sales pipeline and your people.
          </p>
        </div>
      </section>

      {/* SECTION 2: MODULE TABS (ALT LIGHT) */}
      <section className="section-alt py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-center mb-20 fade-in-up">
            <div className="bg-white border border-border-light p-1.5 rounded-[18px] flex items-center shadow-sm">
              <button 
                onClick={() => setActiveModule('crm')}
                className={`px-10 py-4 rounded-[14px] font-bold font-display text-lg transition-all duration-300 ${
                  activeModule === 'crm' 
                    ? 'bg-brand-indigo text-white shadow-lg' 
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                CRM Module
              </button>
              <button 
                onClick={() => setActiveModule('hrm')}
                className={`px-10 py-4 rounded-[14px] font-bold font-display text-lg transition-all duration-300 ${
                  activeModule === 'hrm' 
                    ? 'bg-brand-indigo text-white shadow-lg' 
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                HRM Module
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-1">
            {(activeModule === 'crm' ? crmFeatures : hrmFeatures).map((feat, i) => (
              <div key={feat.title} className="card-standard group relative fade-in-up">
                <div className="absolute top-7 right-7">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                    feat.status === 'beta' 
                      ? 'bg-brand-indigo/10 text-brand-indigo border-brand-indigo/20' 
                      : 'bg-accent-orange/10 text-accent-orange border-accent-orange/20'
                  }`}>
                    {feat.status === 'beta' ? '✓ In Beta' : '🔜 At Launch'}
                  </span>
                </div>
                <div className="w-14 h-14 bg-brand-indigo/5 rounded-xl flex items-center justify-center text-brand-indigo mb-8 group-hover:scale-110 transition-transform">
                  <feat.icon size={28} />
                </div>
                <h3 className="mb-4">{feat.title}</h3>
                <p className="text-text-muted leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CROSS-MODULE MAGIC (WHITE) */}
      <section className="section-white py-24 border-b border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="mb-4">The Unified Advantage</h2>
            <p className="text-text-muted">Features that connect your sales to your operations.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "AI Context Engine", 
                desc: "An AI that understands both your revenue and your resources. Ask anything.", 
                icon: Bot 
              },
              { 
                title: "Cmd+K Command Bar", 
                desc: "Instantly jump between a lead profile and an employee record in one keystroke.", 
                icon: Search 
              },
              { 
                title: "Security & RBAC", 
                desc: "Enterprise-grade permissions for Admin, HR, Sales, and Staff. One bill.", 
                icon: Shield 
              }
            ].map((feat, i) => (
              <div key={i} className="p-8 border-l-4 border-brand-indigo bg-page-bg rounded-r-[14px] fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 bg-brand-indigo/10 rounded-lg flex items-center justify-center text-brand-indigo mb-6">
                  <feat.icon size={20} />
                </div>
                <h3 className="text-xl mb-3">{feat.title}</h3>
                <p className="text-text-muted text-[14px] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPARISON TABLE (LIGHT) */}
      <section className="section-alt py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="mb-4">Beyond Comparison</h2>
            <p className="text-text-muted">Why settle for fragmented software?</p>
          </div>

          <div className="bg-white border border-border-light rounded-[18px] overflow-hidden shadow-sm fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-page-bg border-b border-border-light">
                    <th className="px-10 py-6 text-text-muted font-bold uppercase tracking-widest text-[11px]">Core Capabilities</th>
                    <th className="px-10 py-6 bg-gradient-to-br from-brand-indigo to-accent-pink text-white font-extrabold font-display">NetJetGo</th>
                    <th className="px-10 py-6 text-text-muted font-bold text-[11px] uppercase tracking-widest">Zoho CRM</th>
                    <th className="px-10 py-6 text-text-muted font-bold text-[11px] uppercase tracking-widest">Keka HRM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light">
                  {[
                    { f: "Unified CRM + HRM Database", nj: true, zo: false, ke: false },
                    { f: "Cross-Module AI Insights", nj: true, zo: false, ke: false },
                    { f: "One-Click Payroll Automation", nj: true, zo: false, ke: true },
                    { f: "WhatsApp Lead Management", nj: true, zo: "Partial", ke: false },
                    { f: "India Compliance (DPDPA)", nj: true, zo: true, ke: true },
                    { f: "Implementation Cost", nj: "Free", zo: "₹15,000+", ke: "₹12,000+" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-page-bg/50 transition-colors">
                      <td className="px-10 py-6 text-text-primary font-semibold">{row.f}</td>
                      <td className="px-10 py-6 bg-brand-indigo/5 border-x border-border-medium">
                        {typeof row.nj === 'boolean' ? <CheckCircle2 className="text-brand-indigo" size={22} /> : <span className="text-brand-indigo font-bold">{row.nj}</span>}
                      </td>
                      <td className="px-10 py-6 text-text-subtle font-medium">{typeof row.zo === 'boolean' ? (row.zo ? '✓' : '✗') : row.zo}</td>
                      <td className="px-10 py-6 text-text-subtle font-medium">{typeof row.ke === 'boolean' ? (row.ke ? '✓' : '✗') : row.ke}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA (INDIGO) */}
      <section className="section-indigo py-32 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 fade-in-up">
          <h2 className="text-white mb-6">Ready to see it in action?</h2>
          <p className="text-white/75 text-lg mb-12">Join the first 200 businesses and lock in your founding member status.</p>
          <Link to="/waitlist" className="btn-primary py-5 px-14 text-lg inline-flex items-center space-x-3 shadow-xl">
            <span>Join the Waitlist</span>
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
