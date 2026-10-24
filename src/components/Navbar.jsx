import React, { useState } from 'react';
import { User, Shield, Terminal, Moon, Sun, Menu, X, LogOut, CheckCircle2, ArrowRight } from 'lucide-react';

export const Navbar = ({
  user,
  onOpenAuth,
  onOpenDevHub,
  onLogout,
  darkMode,
  setDarkMode,
  onScrollToApply
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accessibilityMode, setAccessibilityMode] = useState(false);

  const toggleAccessibility = () => {
    setAccessibilityMode(!accessibilityMode);
    document.documentElement.classList.toggle('high-contrast');
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-neutral-950/90 border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo matching screenshot */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1">
          <span className="font-serif text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-neutral-800 text-white border border-neutral-700 text-sm font-sans font-normal">The</span>
            <span className="text-white">Collective.Co</span>
          </span>
        </a>

        {/* Desktop Nav matching screenshots (Home, About, Community, Events, Membership, Contact) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#community" className="hover:text-emerald-400 transition-colors">Community</a>
          <a href="#events" className="hover:text-emerald-400 transition-colors">Events</a>
          <a href="#membership" className="hover:text-emerald-400 transition-colors">Membership</a>
          <a href="#apply" className="hover:text-emerald-400 transition-colors">Contact</a>
        </nav>

        {/* Right Actions matching screenshot ("Join The Community ->") */}
        <div className="hidden lg:flex items-center gap-3">
          
          {/* Developer Hub Button */}
          <button
            onClick={onOpenDevHub}
            aria-label="Open Developer Hub & CI/CD"
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400 hover:bg-neutral-800 transition-all shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Dev Hub</span>
          </button>

          {/* Accessibility Toggle */}
          <button
            onClick={toggleAccessibility}
            aria-label="Toggle High Contrast Accessibility"
            title="Toggle Accessibility High Contrast"
            className={`p-2 rounded-xl border transition-all ${
              accessibilityMode ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-all"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Auth / User */}
          {user ? (
            <div className="flex items-center gap-3 pl-2 border-l border-neutral-800">
              <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 py-1.5 px-3 rounded-xl">
                <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover border border-emerald-500/40" />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">{user.name}</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> {user.tier || 'MFA Verified'}
                  </span>
                </div>
              </div>
              <button
                onClick={onLogout}
                aria-label="Sign out"
                title="Sign out"
                className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-red-400 transition-all"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAuth}
                className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-all text-xs font-medium"
                title="Sign In / MFA"
              >
                <User className="w-4 h-4" />
              </button>
              
              <button
                onClick={onScrollToApply}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d4f964] hover:bg-[#c2e852] text-neutral-950 font-bold text-sm transition-all shadow-lg"
              >
                <span>Join The Community</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenDevHub}
            aria-label="Open Dev Hub"
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 font-medium text-neutral-300">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">About</a>
            <a href="#community" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Community</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Events</a>
            <a href="#membership" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Membership</a>
            <a href="#apply" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Contact</a>
          </nav>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onScrollToApply(); }}
              className="w-full py-3 rounded-full bg-[#d4f964] text-neutral-950 font-bold text-center flex items-center justify-center gap-2"
            >
              <span>Join The Community</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {user ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="flex items-center gap-2">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <span className="text-xs font-bold text-white">{user.name}</span>
                    <span className="text-[10px] text-emerald-400 block">Verified Member</span>
                  </div>
                </div>
                <button onClick={onLogout} className="text-red-400 text-xs font-bold">Sign Out</button>
              </div>
            ) : (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}
                className="w-full py-3 rounded-xl bg-neutral-900 text-white font-bold text-center border border-neutral-800"
              >
                Sign In / MFA
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
