import React, { useState } from 'react';
import { Users, Zap, Star, Rocket, CheckCircle2, Loader2, Send } from 'lucide-react';

export const ApplicationSection = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Creator & Influencer');
  const [interest, setInterest] = useState('Venture Build & Incubation');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="apply" className="bg-neutral-950 text-white">
      
      {/* Top Banner: Built for People Who Build (matching screenshot 7) */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-[#d4f964]">
              WHY JOIN
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-white leading-tight">
              Built for People <br />
              <span className="text-[#d4f964]">Who Build.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-lg font-serif">Network</h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Connect with like-minded individuals and industry leaders.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-lg font-serif">Collaborate</h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Find partners, co-founders and collaborators for your next big idea.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Star className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-lg font-serif">Grow</h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Access exclusive events, resources and opportunities to scale your journey.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Rocket className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-lg font-serif">Create Impact</h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Be part of a community that builds, supports and creates lasting change.
            </p>
          </div>
        </div>
      </div>

      {/* Main Application Form & Building image (matching screenshot 7) */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Building Image */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl aspect-[4/5] bg-neutral-900 relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop&sat=-100"
                alt="Building with Collective logo"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-neutral-950/30"></div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-[#f8f6f0] text-neutral-900 rounded-3xl p-8 sm:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold font-serif">Application Received!</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Thank you, <span className="text-neutral-900 font-bold">{fullName}</span>. Our admissions committee will review your application and notify you at <span className="text-neutral-900 font-bold">{email}</span> within 48 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFullName(''); setEmail(''); }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-bold transition-all"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-emerald-700 font-bold">
                    JOIN THE COLLECTIVE
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mt-2">
                    Your Next Chapter <br />
                    <span className="text-emerald-700">Starts Here.</span>
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm mt-2">
                    Join a growing community of creators, founders and professionals shaping what's next.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Select Your Role</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="Creator & Influencer">Creator & Influencer</option>
                      <option value="Founder & Entrepreneur">Founder & Entrepreneur</option>
                      <option value="Professional & Visionary">Professional & Visionary</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">What Are You Interested In?</label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="Venture Build & Incubation">Venture Build & Incubation</option>
                      <option value="Creator Masterclass">Creator Masterclass</option>
                      <option value="Executive Networking">Executive Networking</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#d4f964] hover:bg-[#c2e852] text-neutral-950 font-bold text-sm transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>Get Started</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-neutral-500 text-center">
                  By joining, you agree to our <a href="#" className="underline">Terms & Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>

    </section>
  );
};
