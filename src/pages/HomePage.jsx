import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Users, 
  Briefcase, 
  BarChart, 
  Search, 
  Bell, 
  Zap,
  LayoutDashboard,
  Target,
  FileText,
  Rocket,
  Globe
} from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm.jsx';
import navbarLogo from '../assets/navbarlogo.png';
import mainLogo from '../assets/MainLogo.jpg';
import ScrollFeatureShowcase from '../components/ScrollFeatureShowcase.jsx';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const HomePage = ({ spotsRemaining, decrementSpots }) => {

  const scrollRef = useScrollAnimation();

  return (
    <div className="w-full overflow-x-clip" ref={scrollRef}>
      {/* SECTION 1: HERO (INDIGO) */}
      <section className="section-indigo relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-pink/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-orange/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column */}
            <div className="space-y-10 fade-in-up">
              <h1 className="text-white font-display">
                Explore Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-orange">Workspace</span>
              </h1>
              
              <p className="text-[17px] text-white/75 leading-relaxed max-w-xl font-medium">
                Stop switching between Zoho, HubSpot, and Excel. NetJetGo unifies your lead tracking, pipelines, and sales automation into one intelligent platform. Everything your sales runs on — one login.
              </p>
              
              <div className="space-y-8 pt-4">
                <WaitlistForm size="hero" variant="indigo" decrementSpots={decrementSpots} />
                
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {[
                    "Trusted by 1,247+ active teams",
                    "No credit card required",
                    "14-day free trial"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center space-x-2 text-white/60 text-[14px] font-medium">
                      <CheckCircle2 size={18} className="text-accent-pink" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Main Logo Premium 3D Presentation Frame */}
            <div className="relative flex justify-center items-center fade-in-up lg:translate-x-10 w-full [perspective:1000px]" style={{ animationDelay: '0.1s' }}>
              {/* Vibrant Ambient Glow behind */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-brand-indigo via-accent-pink to-accent-orange rounded-full blur-[120px] opacity-30 animate-pulse" />
              
              {/* 3D Tilted Card Container */}
              <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/20 p-3 shadow-[0_50px_100px_rgba(0,0,0,0.6)] max-w-lg w-full aspect-[4/3] flex items-center justify-center transform lg:[transform:rotateX(10deg)_rotateY(-18deg)_rotateZ(5deg)] transition-all duration-700 hover:[transform:rotateX(5deg)_rotateY(-8deg)_rotateZ(2deg)] hover:shadow-[0_60px_120px_rgba(232,25,122,0.25)]">
                
                {/* Outward Glass Highlight Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

                {/* Main Logo Image */}
                <img src={mainLogo} alt="NetJetGo Main Logo" className="w-full h-full object-cover rounded-xl" />

                {/* Floating Glassmorphic Overlay Badge 1 (Top Left) */}
                <div className="absolute -left-6 -top-6 bg-slate-900/80 backdrop-blur-xl border border-white/15 rounded-xl px-4 py-2.5 shadow-2xl flex items-center space-x-2.5 transition-all duration-500 hover:translate-y-[-2px] pointer-events-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-pink animate-ping" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">✦ Platform Hub</span>
                </div>

                {/* Floating Glassmorphic Overlay Badge 2 (Bottom Right) */}
                <div className="absolute -right-6 -bottom-6 bg-slate-900/80 backdrop-blur-xl border border-white/15 rounded-xl px-4 py-2.5 shadow-2xl flex items-center space-x-2.5 transition-all duration-500 hover:translate-y-[-2px] pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">Status: Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LOGOS BAR (ALT LIGHT) */}
      <section className="section-alt py-16 border-y border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <span className="text-text-muted font-bold text-[13px] uppercase tracking-widest font-display">
              Teams currently switching from:
            </span>
            <div className="flex flex-wrap justify-center gap-6">
              {["Zoho", "Keka", "HubSpot", "Salesforce", "Excel", "Sheets"].map((brand) => (
                <div key={brand} className="bg-white border border-border-light px-6 py-2.5 rounded-full shadow-sm hover:border-brand-indigo transition-all group">
                  <span className="text-text-muted text-[13px] font-bold group-hover:text-brand-indigo transition-colors">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SCROLL-DRIVEN FEATURE SHOWCASE */}
      <ScrollFeatureShowcase />

      {/* SECTION 4: PROBLEM (LIGHT) */}
      <section className="section-white py-24 border-b border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-text-primary mb-6">The old way is <span className="text-accent-pink">costly</span></h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Managing sales and pipelines on disconnected tools leads to data silos, expensive subscriptions, and lost deals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-8 lg:gap-12">
            {/* Problems */}
            <div className="space-y-6 fade-in-up">
              {[
                "Paying ₹8,000+/mo for separate lead, pipeline, and email tools",
                "Your sales reps have no idea which lead to follow up with first",
                "Endless manual data entry between multiple sales spreadsheets"
              ].map((text, i) => (
                <div key={i} className="bg-page-bg border border-border-light rounded-[14px] p-8 flex items-start space-x-5 group hover:border-accent-pink/30 transition-all">
                  <div className="bg-accent-pink/10 p-2.5 rounded-lg text-accent-pink group-hover:scale-110 transition-transform">
                    <XCircle size={22} />
                  </div>
                  <p className="text-text-primary font-semibold leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Vertical Divider */}
            <div className="flex lg:flex-col items-center justify-center space-x-6 lg:space-x-0 py-8 lg:py-0">
              <div className="h-px lg:w-px lg:h-32 bg-border-medium flex-grow" />
              <div className="w-12 h-12 rounded-full border-2 border-brand-indigo flex items-center justify-center bg-white shadow-lg">
                <span className="text-[14px] font-extrabold text-brand-indigo">VS</span>
              </div>
              <div className="h-px lg:w-px lg:h-32 bg-border-medium flex-grow" />
            </div>

            {/* Solutions */}
            <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
              {[
                "One simple subscription for all your sales operations",
                "Unified CRM: Real-time visibility across your entire pipeline",
                "AI-powered automation: Say goodbye to manual follow-ups"
              ].map((text, i) => (
                <div key={i} className="bg-brand-indigo/5 border-2 border-brand-indigo/20 rounded-[14px] p-8 flex items-start space-x-5 group hover:bg-brand-indigo/10 transition-all">
                  <div className="bg-brand-indigo/10 p-2.5 rounded-lg text-brand-indigo group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={22} />
                  </div>
                  <p className="text-text-primary font-bold leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ABOUT (LIGHT / WHITE with soft accents) */}
      <section className="section-white py-24 relative overflow-hidden border-b border-border-light">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-indigo/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and Sub-point badge */}
            <div className="lg:col-span-5 space-y-6 fade-in-up">
              <span className="text-[12px] font-bold text-brand-indigo uppercase tracking-widest bg-brand-indigo/5 px-4 py-1.5 rounded-full inline-block">
                About NetJetGo
              </span>
              <h2 className="text-text-primary mb-6">
                Built for Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-accent-pink">Everywhere</span>
              </h2>
              <div className="bg-page-bg border border-border-light rounded-2xl p-6 shadow-sm hover:border-brand-indigo/35 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-indigo/10 p-3 rounded-xl text-brand-indigo shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-text-primary mb-1">Built for Worldwide</h4>
                    <p className="text-[13px] text-text-muted leading-relaxed font-medium">
                      Flexible pricing, secure cloud infrastructure, and enterprise-grade data protection designed to support organizations across the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Paragraph Body text in a premium card */}
            <div className="lg:col-span-7 fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-white to-page-bg border border-border-light p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent-pink rounded-full blur-[20px] opacity-20 group-hover:opacity-40 transition-opacity" />
                <p className="text-text-primary text-[17px] leading-relaxed font-medium">
                  Growing a business is challenging enough without juggling multiple systems. NetJetGo unifies CRM and workflow management into a single platform, giving teams around the world the visibility, efficiency, and control they need to drive growth.
                </p>
                <p className="text-text-muted text-[15px] leading-relaxed font-medium mt-6 border-t border-border-light pt-6">
                  We're building the platform we always wished existed—one place that understands your entire business workflow. Manage leads, visual sales pipelines, customer relationships, and team operations seamlessly from a single platform designed to help businesses scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURES TEASER (ALT LIGHT) */}
      <section className="section-alt py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="fade-in-up">
              <h2 className="mb-4">Unified from Day One</h2>
              <p className="text-text-muted text-lg max-w-lg">Designed to give you full visibility over your sales and people.</p>
            </div>
            <Link to="/features" className="btn-brand inline-flex items-center space-x-3 fade-in-up">
              <span>Explore All Modules</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-1">
            {[
              { 
                title: "Unified Pipeline", 
                desc: "Every deal tracked with AI lead scoring. See exactly where your revenue is coming from.", 
                icon: TrendingUp,
                color: "accent-pink"
              },
              { 
                title: "Deal Automation", 
                desc: "Automate follow-ups, lead assignment, and notifications to accelerate sales velocity.", 
                icon: Briefcase,
                color: "accent-orange"
              },
              { 
                title: "AI Assistant", 
                desc: "Get instant answers about your business. 'Which rep has the highest close rate?'", 
                icon: Zap,
                color: "brand-indigo"
              }
            ].map((feat, i) => (
              <div key={i} className="card-standard group fade-in-up">
                <div className="w-14 h-14 bg-brand-indigo/10 rounded-xl flex items-center justify-center text-brand-indigo mb-8 group-hover:scale-110 transition-transform">
                  <feat.icon size={28} />
                </div>
                <h3 className="mb-4">{feat.title}</h3>
                <p className="text-text-muted leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA (INDIGO) */}
      <section className="section-indigo py-32 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-pink/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 fade-in-up">
          <h2 className="text-white mb-8">Start your free trial today</h2>
          <p className="text-white/75 text-lg mb-16 max-w-xl mx-auto font-medium">
            Join 1,247+ businesses already running their workflow on the unified OS. Try it risk-free today.
          </p>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-14 rounded-3xl shadow-2xl">
            <WaitlistForm size="inline" variant="indigo" decrementSpots={decrementSpots} />
            <p className="mt-8 text-white/50 text-[12px] font-bold uppercase tracking-widest">
              Instant setup · Cancel anytime · No credit card required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
