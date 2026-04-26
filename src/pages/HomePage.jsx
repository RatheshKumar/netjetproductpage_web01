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
  Rocket
} from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm.jsx';
import SpotCounter from '../components/SpotCounter.jsx';
import useCountdown from '../hooks/useCountdown.js';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const HomePage = ({ spotsRemaining, decrementSpots }) => {
  const timeLeft = useCountdown('2026-09-01T00:00:00');
  const scrollRef = useScrollAnimation();

  return (
    <div className="overflow-hidden" ref={scrollRef}>
      {/* SECTION 1: HERO (INDIGO) */}
      <section className="section-indigo relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-pink/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-orange/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column */}
            <div className="space-y-10 fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                <span className="text-white text-[11px] font-bold uppercase tracking-widest">
                  ⚡ Launching Q3 2026 · Limited Early Access
                </span>
              </div>
              
              <h1 className="text-white font-display">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-orange">Last</span> Business Tool Your Team Will Ever Need
              </h1>
              
              <p className="text-[17px] text-white/75 leading-relaxed max-w-xl font-medium">
                Stop switching between Zoho, Keka, and Excel. NetJetGo unifies your CRM and HRM into one intelligent platform. Everything your business runs on — one login.
              </p>
              
              <div className="space-y-8 pt-4">
                <WaitlistForm size="hero" variant="indigo" decrementSpots={decrementSpots} />
                
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {[
                    "1,247 businesses on waitlist",
                    "No credit card required",
                    "40% lifetime discount"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center space-x-2 text-white/60 text-[14px] font-medium">
                      <CheckCircle2 size={18} className="text-accent-pink" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 max-w-md">
                <SpotCounter spotsRemaining={spotsRemaining} variant="indigo" />
              </div>
            </div>

            {/* Right Column: Dashboard Mockup */}
            <div className="relative fade-in-up lg:translate-x-10" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -inset-4 bg-white/10 rounded-[2.5rem] blur-3xl opacity-30" />
              <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(61,59,175,0.25)] overflow-hidden aspect-[4/3] flex border border-border-light">
                
                {/* Mockup Sidebar */}
                <div className="w-16 lg:w-48 border-r border-border-light bg-page-bg/50 flex flex-col p-4">
                  <div className="flex items-center space-x-2 mb-10 px-2 group">
                    <Rocket className="text-brand-indigo" size={20} />
                    <span className="hidden lg:block font-extrabold text-[12px] text-brand-indigo tracking-tight">NetJetGo</span>
                  </div>
                  <div className="space-y-5">
                    {[
                      { icon: LayoutDashboard, label: "Dashboard", active: true },
                      { icon: Target, label: "Leads" },
                      { icon: Users, label: "Contacts" },
                      { icon: Briefcase, label: "Employees" },
                      { icon: FileText, label: "Payroll" }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                        item.active ? 'bg-brand-indigo/10 text-brand-indigo font-semibold' : 'text-text-muted hover:text-text-primary'
                      }`}>
                        <item.icon size={18} />
                        <span className="hidden lg:block text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mockup Main Content */}
                <div className="flex-grow flex flex-col h-full bg-white">
                  {/* Topbar */}
                  <div className="h-16 border-b border-border-light flex items-center justify-between px-6">
                    <h3 className="text-[13px] font-bold text-text-primary font-display">Good morning 👋</h3>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 lg:w-48 h-9 bg-page-bg rounded-lg border border-border-light flex items-center px-3">
                        <Search size={14} className="text-text-subtle mr-2" />
                        <div className="w-full h-1.5 bg-border-light rounded-full" />
                      </div>
                      <Bell size={18} className="text-text-muted" />
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 space-y-6 overflow-hidden">
                    {/* Stat Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Total Leads", val: "142", sub: "+12%", accent: "brand-indigo" },
                        { label: "Active Staff", val: "38", sub: "2 on leave", accent: "accent-orange" },
                        { label: "Monthly Payroll", val: "₹4.2L", sub: "3 pending", accent: "accent-pink" },
                        { label: "Leave Requests", val: "7", sub: "4 pending", accent: "brand-indigo" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-white border border-border-light rounded-xl p-4 border-l-4" style={{ borderColor: `var(--color-${stat.accent})` }}>
                          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">{stat.label}</p>
                          <div className="flex items-baseline justify-between">
                            <span className="text-[20px] font-extrabold text-text-primary font-mono">{stat.val}</span>
                            <span className="text-[9px] font-bold text-accent-pink">{stat.sub}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart & Table Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="bg-page-bg/50 border border-border-light rounded-xl p-4 h-32 flex flex-col">
                        <p className="text-[9px] font-bold text-text-muted uppercase mb-4">Lead Growth</p>
                        <div className="flex-grow flex items-end justify-between px-1 gap-2">
                          {[35, 60, 45, 80, 55, 90].map((h, i) => (
                            <div key={i} className="flex-grow bg-brand-indigo/20 rounded-t-sm relative group">
                              <div 
                                className="absolute bottom-0 left-0 w-full bg-brand-indigo rounded-t-sm transition-all duration-500"
                                style={{ height: `${h}%` }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-page-bg/50 border border-border-light rounded-xl p-4 hidden lg:block">
                        <p className="text-[9px] font-bold text-text-muted uppercase mb-3">Priority Leads</p>
                        <div className="space-y-2">
                          {[
                            { n: "Arjun S.", s: "HOT" },
                            { n: "Priya M.", s: "WARM" }
                          ].map((row, i) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-white rounded border border-border-light text-[10px]">
                              <span className="font-bold text-text-primary">{row.n}</span>
                              <span className={row.s === 'HOT' ? 'text-accent-pink font-bold' : 'text-accent-orange font-bold'}>{row.s}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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

      {/* SECTION 3: COUNTDOWN (DARK INDIGO) */}
      <section className="section-dark-indigo py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10 fade-in-up">
          <h2 className="text-white mb-4">Official Launch Countdown</h2>
          <p className="text-white/55 font-bold tracking-[0.2em] uppercase text-[12px] mb-16">beyond & more</p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 mb-16">
            {[
              { val: timeLeft.days, label: "Days" },
              { val: timeLeft.hours, label: "Hours" },
              { val: timeLeft.minutes, label: "Minutes" },
              { val: timeLeft.seconds, label: "Seconds" }
            ].map((unit, i) => (
              <React.Fragment key={i}>
                <div className="bg-white/10 border border-white/15 p-6 md:p-10 min-w-[140px] md:min-w-[180px] rounded-[14px] backdrop-blur-xl">
                  <span className="block text-[56px] md:text-[64px] font-extrabold text-white font-mono mb-2 leading-none">
                    {unit.val}
                  </span>
                  <span className="text-[11px] text-white/50 font-bold uppercase tracking-[0.12em]">
                    {unit.label}
                  </span>
                </div>
                {i < 3 && (
                  <span className="hidden md:block text-[40px] text-accent-pink font-extrabold pb-8">:</span>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="space-y-10">
            <p className="text-white/75 text-lg font-medium">
              Early bird members get <span className="text-white font-bold underline underline-offset-4 decoration-accent-pink">40% lifetime discount</span>. 
            </p>
            <Link 
              to="/waitlist" 
              className="btn-primary py-5 px-14 text-lg inline-flex items-center space-x-3"
            >
              <span>Join the Launch Cohort</span>
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROBLEM (LIGHT) */}
      <section className="section-white py-24 border-b border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-text-primary mb-6">The old way is <span className="text-accent-pink">costly</span></h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Managing sales and staff on disconnected tools leads to data silos, expensive subscriptions, and human error.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-8 lg:gap-12">
            {/* Problems */}
            <div className="space-y-6 fade-in-up">
              {[
                "Paying ₹8,000+/mo for separate CRM and HR tools",
                "Your sales team has no idea who's on leave today",
                "Endless manual data entry between Zoho and Excel"
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
                "One simple subscription for your whole business",
                "CRM + HRM sync: Real-time visibility across teams",
                "AI-powered automation: Say goodbye to manual entry"
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
                title: "Smart Payroll", 
                desc: "One-click payroll processing. Compliant with Indian tax laws and syncs with attendance.", 
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
          <h2 className="text-white mb-8">Claim your founding member spot</h2>
          <p className="text-white/75 text-lg mb-16 max-w-xl mx-auto font-medium">
            Join 1,247 businesses already building on the unified OS. Lock in your lifetime 40% discount today.
          </p>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-14 rounded-3xl shadow-2xl">
            <WaitlistForm size="inline" variant="indigo" decrementSpots={decrementSpots} />
            <p className="mt-8 text-white/50 text-[12px] font-bold uppercase tracking-widest">
              Limited to the first 200 businesses only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
