import React from 'react';
import { 
  Layers, 
  Clock, 
  Calculator, 
  UserCheck, 
  Fingerprint, 
  Briefcase,
  Users,
  Contact,
  Calendar,
  CreditCard,
  FileText,
  Coins,
  Shuffle,
  UserPlus,
  ClipboardCheck,
  LogOut,
  Activity,
  Target,
  MessageSquare,
  Laptop,
  HelpCircle,
  CheckSquare,
  Smartphone,
  BarChart,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const FeaturesPage = () => {
  const scrollRef = useScrollAnimation();

  // Benefit cards data (6 items)
  const benefits = [
    {
      title: "Centralized Sales Operations",
      desc: "Manage leads, contacts, deals, pipeline stages, client meetings, quotes, invoices, and automated follow-ups from one centralized system. This reduces dependency on multiple disconnected tools.",
      icon: Layers
    },
    {
      title: "Saves Sales Team Time",
      desc: "Automate repetitive sales activities such as lead assignment, follow-up emails, task reminders, and deal status updates. Sales teams can focus more on closing deals instead of manual operations.",
      icon: Clock
    },
    {
      title: "Accurate Revenue Forecasting",
      desc: "Integrated sales pipelines and deal probability analysis ensure highly accurate sales forecasts. This minimizes uncertainty and helps teams plan business resources effectively.",
      icon: Calculator
    },
    {
      title: "Customer Self-Service Portal",
      desc: "Clients can check project progress, submit support tickets, pay outstanding invoices, and access shared contracts and files without manual intervention. This improves transparency and satisfaction.",
      icon: UserCheck
    },
    {
      title: "Better Lead Activity Tracking",
      desc: "Track client interactions, website visits, email opens, link clicks, and past meetings. Sales reps get detailed, real-time context about every prospect's engagement.",
      icon: Fingerprint
    },
    {
      title: "Improves Conversion Rates",
      desc: "Score leads with AI, nurture prospects with automated drip campaigns, and manage interactions through a structured sales workflow. This helps companies close deals faster.",
      icon: Briefcase
    }
  ];

  // Platform Features data (20 items)
  const platformFeatures = [
    { name: "Lead Tracking & Management", icon: Target },
    { name: "Contact & Account Directory", icon: Users },
    { name: "Visual Sales Pipelines", icon: Layers },
    { name: "Deal Stage Automation", icon: Zap },
    { name: "Email Sync & Templates", icon: FileText },
    { name: "Activity Timeline Logging", icon: Clock },
    { name: "Task & Meeting Scheduler", icon: Calendar },
    { name: "AI Lead Scoring", icon: Fingerprint },
    { name: "WhatsApp & SMS Campaigns", icon: MessageSquare },
    { name: "Quotation & Invoice Builder", icon: Coins },
    { name: "Customer Portal Access", icon: Smartphone },
    { name: "Shared Team Inbox", icon: Users },
    { name: "Sales Reports & Analytics", icon: BarChart },
    { name: "Custom CRM Fields", icon: Shuffle },
    { name: "Approval Workflows for Deals", icon: CheckSquare },
    { name: "Customer Help Desk / Tickets", icon: HelpCircle },
    { name: "Asset Assignment Tracking", icon: Laptop },
    { name: "Performance Leaderboards", icon: Activity },
    { name: "OKR & Sales Goal Tracking", icon: Target },
    { name: "Contract & Document E-Sign", icon: ClipboardCheck }
  ];

  return (
    <div ref={scrollRef}>
      {/* PAGE TITLE / HERO SECTION */}
      <section className="section-indigo pt-32 lg:pt-40 pb-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 text-center fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-10">
            <span className="text-white text-[11px] font-bold uppercase tracking-widest">
              ✓ Redefining Workspace Productivity
            </span>
          </div>
          <h1 className="text-white mb-6 max-w-4xl mx-auto leading-tight">
            Why Businesses Need netjetgo CRM
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Most growing companies eventually struggle with spreadsheets, manual lead tracking, missed follow-ups, disconnected client tools, and inefficient sales processes. netjetgo CRM helps businesses simplify and automate complete sales operations from a single platform.
          </p>
        </div>
      </section>

      {/* SECTION 1: BENEFIT CARDS (6 CARDS IN GRID) */}
      <section className="section-alt py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-brand-indigo text-[12px] font-extrabold uppercase tracking-widest mb-3 block">
              Core Benefits
            </span>
            <h2 className="mb-4 text-text-primary">Supercharge Your Sales Operations</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Say goodbye to fragmented tools and manual spreadsheets. Here is how netjetgo drives real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-1">
            {benefits.map((benefit, i) => (
              <div key={i} className="card-standard group relative fade-in-up flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-brand-indigo/5 rounded-xl flex items-center justify-center text-brand-indigo mb-8 group-hover:scale-110 transition-transform">
                    <benefit.icon size={28} />
                  </div>
                  <h3 className="mb-4 text-text-primary text-[20px] font-bold">
                    {benefit.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-[15px]">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PLATFORM FEATURES */}
      <section className="section-white py-24 border-b border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-brand-indigo text-[12px] font-extrabold uppercase tracking-widest mb-3 block">
              Capabilities
            </span>
            <h2 className="mb-4 text-text-primary" id="platform-features-heading">
              Platform Features
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              A comprehensive toolkit engineered to streamline every stage of the customer lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 stagger-1">
            {platformFeatures.map((feature, i) => (
              <div 
                key={i} 
                className="flex items-center space-x-3 bg-page-bg border border-border-light rounded-[12px] p-4 hover:border-brand-indigo/35 hover:bg-brand-indigo/[0.02] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(61,59,175,0.05)] transition-all duration-300 fade-in-up"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-indigo/10 text-brand-indigo flex items-center justify-center flex-shrink-0">
                  <feature.icon size={18} />
                </div>
                <span className="font-semibold text-text-primary text-[14px] md:text-[15px]">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA (INDIGO) */}
      <section className="section-indigo py-32 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 fade-in-up">
          <h2 className="text-white mb-6">Ready to see it in action?</h2>
          <p className="text-white/75 text-lg mb-12 max-w-2xl mx-auto">
            Start scaling your business with NetJetGo HRM today.
          </p>
          <Link to="/waitlist" className="btn-primary py-5 px-14 text-lg inline-flex items-center space-x-3 shadow-xl">
            <span>Start Free Trial</span>
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
