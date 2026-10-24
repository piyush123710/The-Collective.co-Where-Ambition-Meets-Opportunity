import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMovement } from './components/AboutMovement';
import { CommunityStats } from './components/CommunityStats';
import { EventsSection } from './components/EventsSection';
import { FoundrySection } from './components/FoundrySection';
import { MembershipSection } from './components/MembershipSection';
import { FaqSection } from './components/FaqSection';
import { GlimpseFoundry } from './components/GlimpseFoundry';
import { ApplicationSection } from './components/ApplicationSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { DeveloperHubModal } from './components/DeveloperHubModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('collective_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [devHubModalOpen, setDevHubModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (user) {
      localStorage.setItem('collective_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('collective_user');
    }
  }, [user]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleScrollToApply = () => {
    const el = document.getElementById('apply');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-emerald-500 selection:text-neutral-950">
      
      {/* Navbar matching screenshot header */}
      <Navbar
        user={user}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenDevHub={() => setDevHubModalOpen(true)}
        onLogout={handleLogout}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onScrollToApply={handleScrollToApply}
      />

      {/* Hero Section matching screenshot 1 */}
      <Hero
        onOpenVideo={() => setVideoModalOpen(true)}
        onScrollToApply={handleScrollToApply}
      />

      {/* About Movement Section matching screenshot 1 bottom */}
      <AboutMovement />

      {/* Community Stats & Leaders ("Who You Build With Matters") matching screenshot 2 */}
      <CommunityStats />

      {/* Events & Experiences ("Real Conversations. Lasting Opportunities.") matching screenshot 3 */}
      <EventsSection />

      {/* The Foundry & "Your Next Chapter Starts Here" banner matching screenshot 4 */}
      <FoundrySection onScrollToApply={handleScrollToApply} />

      {/* Membership Plans ("More Than Access. It's Belonging.") matching screenshot 5 top */}
      <MembershipSection onScrollToApply={handleScrollToApply} />

      {/* FAQ Section with gold plus icons matching screenshot 5 bottom */}
      <FaqSection />

      {/* A Glimpse Into The Foundry matching screenshot 6 */}
      <GlimpseFoundry />

      {/* Built for People Who Build & Application Form matching screenshot 7 */}
      <ApplicationSection />

      {/* Footer matching screenshot 8 */}
      <Footer onOpenDevHub={() => setDevHubModalOpen(true)} />

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(newUser) => setUser(newUser)}
      />

      <DeveloperHubModal
        isOpen={devHubModalOpen}
        onClose={() => setDevHubModalOpen(false)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

    </div>
  );
}
