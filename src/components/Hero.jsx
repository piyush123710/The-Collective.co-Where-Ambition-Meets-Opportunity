import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = ({ onOpenVideo, onScrollToApply }) => {
  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-neutral-950 text-white">
      
      {/* Background Image matching screenshot 1 (mountain summit sunrise) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop"
          alt="Mountain summit sunrise"
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 w-full flex-1 flex flex-col justify-center">
        
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-300 font-semibold">
            THE COLLECTIVE.CO
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight leading-[1.08]">
            Where Ambition <br />
            Meets <span className="text-[#d4f964]">Opportunity.</span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            A premium community for creators, founders, entrepreneurs and professionals who are building what's next.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onScrollToApply}
              className="flex items-center gap-2 px-6 py-4 rounded-full bg-[#d4f964] hover:bg-[#c2e852] text-neutral-950 font-bold text-base transition-all shadow-xl"
            >
              <span>Join The Community</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenVideo}
              className="flex items-center gap-3 px-6 py-4 rounded-full bg-neutral-900/60 hover:bg-neutral-900 text-white font-medium text-base transition-all border border-neutral-700/60 backdrop-blur-sm"
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Right side floating text matching screenshot ("Connect Collaborate Create. By The Collective.Co") */}
        <div className="absolute right-8 bottom-16 hidden lg:flex flex-col items-end text-right space-y-1">
          <span className="font-serif italic text-3xl sm:text-4xl text-[#d4f964] tracking-wide">
            Connect<br />
            Collaborate<br />
            Create.
          </span>
          <span className="text-xs text-neutral-400 mt-2">By The Collective.Co</span>
        </div>

      </div>

    </section>
  );
};
