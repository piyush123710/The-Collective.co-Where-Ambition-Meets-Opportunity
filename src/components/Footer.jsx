import React from 'react';
import { Terminal, Shield } from 'lucide-react';

export const Footer = ({ onOpenDevHub }) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-sm border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Foundry Green Bar matching screenshot 8 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-neutral-900 gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-emerald-500">
              THE FOUNDRY
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-white">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About v</a>
            <a href="#foundry" className="hover:text-emerald-400 transition-colors">In the Build Room</a>
            <a href="#foundry" className="hover:text-emerald-400 transition-colors">Cohort 01</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQs</a>
          </div>

          <div>
            <button
              onClick={() => {
                const el = document.getElementById('apply');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg"
            >
              APPLY NOW
            </button>
          </div>
        </div>

        {/* Main Footer Links matching screenshot 8 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-neutral-900">
          
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-base">The Foundry</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Forging entrepreneurship.
            </p>
            <div className="flex items-center gap-4 text-neutral-400">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">IG</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">IN</a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">YT</a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Explore</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#foundry" className="hover:text-white transition-colors">In the build room</a></li>
              <li><a href="#foundry" className="hover:text-white transition-colors">Cohort 01</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Work with The Foundry</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#apply" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>Questions? We're here to help!</p>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDevHub}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400 hover:bg-neutral-800 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Dev Hub & CI/CD</span>
            </button>
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <Shield className="w-3.5 h-3.5" /> OAuth 2.0 & MFA
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
