import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Globe, Share2, Rocket } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-section border-t border-white/10 pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <Rocket className="text-white group-hover:rotate-12 transition-transform" size={24} />
              <span className="text-2xl font-extrabold font-display text-white tracking-tight">
                NetJetGo
              </span>
            </Link>
            <p className="text-white/55 text-[15px] leading-relaxed mb-8">
              The unified business OS for Indian SMEs. Replacing fragmented tools with one powerful ecosystem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-white/60 hover:text-white hover:border-white/30 transition-all">
                <Send size={20} />
              </a>
              <a href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-white/60 hover:text-white hover:border-white/30 transition-all">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-8 text-[13px] uppercase tracking-wider">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-white/60 text-[15px] hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-white/60 text-[15px] hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/roadmap" className="text-white/60 text-[15px] hover:text-white transition-colors">Roadmap</Link></li>
              <li><Link to="/waitlist" className="text-white/60 text-[15px] hover:text-white transition-colors">Early Access</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-8 text-[13px] uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/60 text-[15px] hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-white/60 text-[15px] hover:text-white transition-colors">Mission</a></li>
              <li><a href="#" className="text-white/60 text-[15px] hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/60 text-[15px] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold mb-8 text-[13px] uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 text-[15px] hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 text-[15px] hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 text-[15px] hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="text-white/60 text-[15px] hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-[13px]">
            &copy; {currentYear} NetJetGo. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-white/40 text-[13px]">Made in</span>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-orange text-[13px]">
              India 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
