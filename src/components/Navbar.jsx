import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md py-4 border-b border-border-medium shadow-[0_1px_20px_rgba(61,59,175,0.08)]' 
        : 'bg-white py-6 border-b border-border-light'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Rocket className="text-brand-indigo group-hover:rotate-12 transition-transform" size={24} />
            <span className="text-2xl font-extrabold font-display text-brand-indigo tracking-tight">
              NetJetGo
            </span>
            <span className="ml-2 bg-brand-indigo/10 text-brand-indigo text-[11px] font-bold px-2 py-0.5 rounded border border-border-medium">
              BETA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[15px] transition-colors duration-200 ${
                    isActive(link.path) 
                      ? 'text-brand-indigo font-semibold' 
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link 
              to="/waitlist" 
              className="btn-primary py-2.5 px-6 text-[15px]"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden bg-white transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-bold font-display ${
                isActive(link.path) ? 'text-brand-indigo' : 'text-text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/waitlist"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-lg px-10 py-4"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
