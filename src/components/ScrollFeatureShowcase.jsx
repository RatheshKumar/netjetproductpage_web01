import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Clock, UserPlus, LogOut, Coins, Laptop, CheckCircle2 } from 'lucide-react';

import AttendanceImg  from '../assets/Attendance.png';
import OnboardingImg  from '../assets/Onboarding.png';
import OffboardingImg from '../assets/Offboarding.png';
import PayrollImg     from '../assets/Payroll.png';
import AssetsImg      from '../assets/Assets.png';

const FEATURES = [
  {
    id: 'attendance',
    icon: Clock,
    title: 'Attendance & Time Tracking',
    description:
      'Track employee check-ins, check-outs, and daily attendance records in real time. Monitor on-time performance and approve overtime requests instantly from a single dashboard.',
    bullets: [
      'Real-time check-in/out logging and tracking',
      'On-time vs. late attendance analytics',
      'Overtime approval and leave request workflows'
    ],
    image: AttendanceImg,
    accent: '#E8197A',
  },
  {
    id: 'onboarding',
    icon: UserPlus,
    title: 'Employee Onboarding',
    description:
      'Streamline the hiring and onboarding journey for new team members. Track recruitment drives, candidate application stages, and document submissions seamlessly.',
    bullets: [
      'Custom candidate recruitment pipeline stages',
      'Automated onboarding task lists and checklists',
      'Portal status tracking and employee profile creation'
    ],
    image: OnboardingImg,
    accent: '#F5A623',
  },
  {
    id: 'offboarding',
    icon: LogOut,
    title: 'Offboarding Management',
    description:
      'Manage employee departures, notice periods, and resignation workflows with complete clarity. Ensure smooth transition of tasks and clean exit processes.',
    bullets: [
      'Notice period tracking and end-date management',
      'Resignation letter logging and exit interview scheduling',
      'Handover task tracking and clearance checklists'
    ],
    image: OffboardingImg,
    accent: '#A78BFA',
  },
  {
    id: 'payroll',
    icon: Coins,
    title: 'Payroll Processing',
    description:
      'Simplify salary calculations and generate employee payslips automatically. Track department expenditures, allowances, deductions, and tax compliance.',
    bullets: [
      'Automated payslip generation and total amount tracking',
      'Allowance, deduction, and advance salary logs',
      'Department-wise payroll budget analysis'
    ],
    image: PayrollImg,
    accent: '#34D399',
  },
  {
    id: 'assets',
    icon: Laptop,
    title: 'Asset Allocation & Management',
    description:
      'Track company assets, device allocations, and hardware requests in one place. Monitor laptops, accessories, and other inventory assigned to team members.',
    bullets: [
      'Real-time asset inventory and status tracking (available vs. in-use)',
      'Device request workflows and approval logs',
      'Detailed allocation history and user assignment'
    ],
    image: AssetsImg,
    accent: '#60A5FA',
  },
];

const ScrollFeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = useCallback(() => {
    // Determine active feature based on midpoint proximity to 40% of viewport
    const trigger = window.innerHeight * 0.4;
    let best = 0;
    let bestDist = Infinity;
    featureRefs.current.forEach((el, i) => {
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const mid = top + height / 2;
      const dist = Math.abs(mid - trigger);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActiveIndex(prev => prev !== best ? best : prev);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  const active = FEATURES[activeIndex];

  return (
    <section className="sc-section" ref={sectionRef}>
      {/* Background layers */}
      <div className="sc-bg-gradient" />
      <div className="sc-bg-grid" />

      <div className="sc-wrap">
        <div className="sc-grid">

          {/* LEFT — heading + scrollable feature list */}
          <div className="sc-left">
            <div className="sc-left-header">
              <span className="sc-eyebrow">✦ Platform Overview</span>
              <h2 className="sc-heading">
                Everything you need,
                <br />
                <span className="sc-heading-gradient">in one place.</span>
              </h2>
              <p className="sc-subtext">
                From lead tracking to pipeline stages, email campaigns to sales forecasting — NetJetGo gives your sales team one intelligent home.
              </p>
            </div>

            <div className="sc-feature-list">
              {FEATURES.map((feat, idx) => {
                const isActive = isMobile ? true : activeIndex === idx;
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.id}
                    ref={el => { featureRefs.current[idx] = el; }}
                    className={`sc-feature${isActive ? ' sc-feature--active' : ''}`}
                  >
                    <span
                      className="sc-bar"
                      style={{ background: isActive ? feat.accent : 'rgba(255,255,255,0.06)' }}
                    />
                    <div className="sc-feat-inner">
                      <div
                        className="sc-icon"
                        style={isActive ? {
                          background: `${feat.accent}20`,
                          borderColor: `${feat.accent}50`,
                          color: feat.accent,
                        } : {}}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="sc-feat-body">
                        <h3 className={`sc-feat-title${isActive ? ' sc-feat-title--on' : ''}`}>
                          {feat.title}
                        </h3>
                        <div className={`sc-feat-desc${isActive ? ' sc-feat-desc--on' : ''}`}>
                          <p>{feat.description}</p>
                          {feat.bullets && (
                            <ul className="sc-bullets">
                              {feat.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="sc-bullet-item">
                                  <CheckCircle2 className="sc-bullet-icon" size={14} style={{ color: feat.accent }} />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {/* Mobile-only graphic image */}
                        <div className={`sc-mob-img${isActive ? ' sc-mob-img--on' : ''}`}>
                          <div className="relative w-full aspect-[3552/1844] rounded-xl border border-white/10 p-1 bg-[#0d0c22] shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                            <img src={feat.image} alt={feat.title} className="rounded-lg w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Native CSS sticky image panel */}
          <div className="sc-right">
            <div className="sc-image-container">
              
              {/* Vibrant Ambient Glow behind */}
              <div
                className="sc-glow transition-all duration-700"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, ${active.accent}25 0%, transparent 65%)`,
                }}
              />

              {/* Graphic Designed Presentation Frame */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center p-8 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.4)] overflow-hidden [perspective:1200px]">
                {/* Decorative Grid Overlay */}
                <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />
                
                {/* Dynamic colored background flare */}
                <div className="absolute -left-10 -bottom-10 w-44 h-44 rounded-full blur-[90px] transition-all duration-1000" style={{ backgroundColor: active.accent, opacity: 0.15 }} />

                {/* 3D Isometric Screen Display */}
                <div className="relative w-full aspect-[3552/1844] rounded-xl border border-white/10 p-1.5 bg-[#0d0c22] shadow-[0_30px_60px_rgba(0,0,0,0.6)] transform [transform:rotateX(8deg)_rotateY(-16deg)_rotateZ(3deg)] transition-all duration-500 hover:[transform:rotateX(4deg)_rotateY(-8deg)_rotateZ(1.5deg)]">
                  {/* Browser top controls bar */}
                  <div className="h-6 border-b border-white/5 flex items-center px-3 space-x-1.5 bg-slate-950/40 rounded-t-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                  </div>
                  
                  {/* Screenshot Stack */}
                  <div className="relative w-full h-[calc(100%-24px)] overflow-hidden bg-slate-950 rounded-b-lg">
                    {FEATURES.map((feat, idx) => (
                      <img
                        key={feat.id}
                        src={feat.image}
                        alt={feat.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          activeIndex === idx ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Graphic Badge 1 (Top Left) */}
                <div className="absolute left-6 top-8 bg-slate-900/90 border border-white/15 rounded-xl px-4 py-2 shadow-2xl flex items-center space-x-2.5 transform -translate-x-2 -translate-y-2 pointer-events-none">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: active.accent }} />
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider font-mono">NetJetGo OS</span>
                </div>

                {/* Floating Graphic Badge 2 (Bottom Right) */}
                <div className="absolute right-6 bottom-8 bg-slate-900/90 border border-white/15 rounded-xl px-4 py-2 shadow-2xl flex items-center space-x-2.5 transform translate-x-2 translate-y-2 pointer-events-none">
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider font-mono">Sync: Active</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScrollFeatureShowcase;
