import React from 'react';
import { ArrowRight, Users, Zap, Star, Rocket } from 'lucide-react';

export const FoundrySection = ({ onScrollToApply }) => {
  return (
    <section id="foundry" className="bg-neutral-950 text-white">
      
      {/* Top Banner: Your Next Chapter Starts Here (matching screenshot 4) */}
      <div className="relative py-20 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop"
            alt="Mountain backpacker landscape"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#d4f964]">
              JOIN THE COLLECTIVE.CO
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
              Your Next Chapter <br />
              <span className="text-[#d4f964]">Starts Here.</span>
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">
              Become part of a community that believes in people, ideas and real impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={onScrollToApply}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#d4f964] hover:bg-[#c2e852] text-neutral-950 font-bold text-sm transition-all shadow-xl"
            >
              <span>Join The Community</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="font-serif italic text-2xl text-[#d4f964] hidden sm:inline">
              Better Together..
            </span>
          </div>
        </div>
      </div>

      {/* Main Foundry Section (matching screenshot 4) */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Building image */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-[#d4f964] font-bold">
                THE FOUNDER
              </span>
              <h2 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-white">
                THE FOUNDRY
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl">
                The Foundry is where bold ideas, serious builders and early opportunities come together.
              </p>
              <p className="text-neutral-400 text-sm">
                A space to learn, build, and create what's next.
              </p>
              <div>
                <button
                  onClick={onScrollToApply}
                  className="inline-flex items-center gap-2 text-[#d4f964] font-bold text-sm hover:underline pt-2"
                >
                  <span>Explore The Foundry</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Building Image */}
            <div className="rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl aspect-[16/9] bg-neutral-900 relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="The Foundry building with Collective logo"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-white font-serif font-bold text-sm">
                The Collective.Co
              </div>
            </div>
          </div>

          {/* Right 4 Features matching screenshot 4 */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-base">Network</h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pl-12">
                Connect with like-minded individuals and industry leaders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-base">Collaborate</h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pl-12">
                Find partners, co-founders and collaborators for your next big idea.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Star className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-base">Grow</h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pl-12">
                Access exclusive events, resources and opportunities to scale your journey.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Rocket className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-base">Create Impact</h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pl-12">
                Be part of a community that builds, supports and creates lasting change.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
