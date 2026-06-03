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
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const FeaturesPage = () => {
  const scrollRef = useScrollAnimation();

  // Benefit cards data (6 items)
  const benefits = [
    {
      title: "Centralized HR Operations",
      desc: "Manage employee records, payroll, attendance, leave, recruitment, onboarding, offboarding, assets, and approvals from one centralized system. This reduces dependency on multiple disconnected tools.",
      icon: Layers
    },
    {
      title: "Saves HR Team Time",
      desc: "Automate repetitive HR activities such as attendance calculation, leave approvals, payroll processing, and payslip generation. HR teams can focus more on strategic tasks instead of manual operations.",
      icon: Clock
    },
    {
      title: "Reduces Payroll Errors",
      desc: "Integrated payroll processing ensures accurate salary calculations by syncing attendance, overtime, deductions, allowances, and tax components. This minimizes payroll mistakes and delays.",
      icon: Calculator
    },
    {
      title: "Employee Self-Service",
      desc: "Employees can apply for leave, access payslips, check attendance, and update their profiles without HR intervention. This improves transparency and employee experience.",
      icon: UserCheck
    },
    {
      title: "Better Attendance Tracking",
      desc: "Supports biometric integration, shift scheduling, overtime management, late tracking, and hybrid workforce monitoring. Businesses get accurate and real-time attendance data.",
      icon: Fingerprint
    },
    {
      title: "Improves Recruitment Process",
      desc: "Track candidates, interviews, job postings, onboarding, and hiring stages through a structured recruitment workflow. This helps companies streamline and speed up hiring.",
      icon: Briefcase
    }
  ];

  // Platform Features data (20 items)
  const platformFeatures = [
    { name: "Employee Management", icon: Users },
    { name: "Employee Directory", icon: Contact },
    { name: "Attendance Management", icon: Clock },
    { name: "Biometric Integration", icon: Fingerprint },
    { name: "Leave Management", icon: Calendar },
    { name: "Payroll Processing", icon: CreditCard },
    { name: "Payslip Generation", icon: FileText },
    { name: "Overtime Calculation", icon: Coins },
    { name: "Shift Management", icon: Shuffle },
    { name: "Recruitment / ATS", icon: UserPlus },
    { name: "Onboarding Management", icon: ClipboardCheck },
    { name: "Offboarding Management", icon: LogOut },
    { name: "Performance Management", icon: Activity },
    { name: "OKR Tracking", icon: Target },
    { name: "360 Degree Feedback", icon: MessageSquare },
    { name: "Asset Management", icon: Laptop },
    { name: "Help Desk / Ticketing", icon: HelpCircle },
    { name: "Approval Workflows", icon: CheckSquare },
    { name: "Employee Self-Service", icon: Smartphone },
    { name: "HR Reports & Analytics", icon: BarChart }
  ];

  return (
    <div className="pt-20" ref={scrollRef}>
      {/* PAGE TITLE / HERO SECTION */}
      <section className="section-indigo pt-24 pb-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 text-center fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-10">
            <span className="text-white text-[11px] font-bold uppercase tracking-widest">
              ✓ Redefining Workspace Productivity
            </span>
          </div>
          <h1 className="text-white mb-6 max-w-4xl mx-auto leading-tight">
            Why Businesses Need netjetgo HRMS
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Most growing companies eventually struggle with spreadsheets, manual attendance tracking, payroll errors, disconnected HR tools, and inefficient recruitment processes. netjetgo HRMS helps businesses simplify and automate complete HR operations from a single platform.
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
            <h2 className="mb-4 text-text-primary">Supercharge Your HR Operations</h2>
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
              A comprehensive toolkit engineered to streamline every stage of the employee lifecycle.
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
            Join the first 200 businesses and lock in your founding member status.
          </p>
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
