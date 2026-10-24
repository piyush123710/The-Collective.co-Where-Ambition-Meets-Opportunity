import React from 'react';

export const AboutMovement = () => {
  return (
    <section id="about" className="py-24 bg-[#f8f6f0] text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-emerald-600"></span>
              <span className="text-xs uppercase font-mono tracking-widest text-neutral-600 font-bold">
                ABOUT THE COLLECTIVE.CO
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-neutral-900">
              More Than a Community. <br />
              <span className="text-emerald-700">A Movement.</span>
            </h2>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              The Collective.Co is a space where bold minds come together — to share ideas, find opportunities, collaborate on projects and create real impact.
            </p>

            {/* Bottom 3 Columns matching screenshot */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-300">
              <div>
                <h4 className="font-bold text-sm text-neutral-900">Creators</h4>
                <p className="text-xs text-neutral-600 mt-1">& Influencers</p>
              </div>
              <div className="border-x border-neutral-300 px-4">
                <h4 className="font-bold text-sm text-neutral-900">Founders</h4>
                <p className="text-xs text-neutral-600 mt-1">& Entrepreneurs</p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-neutral-900">Professionals</h4>
                <p className="text-xs text-neutral-600 mt-1">& Visionaries</p>
              </div>
            </div>
          </div>

          {/* Right Image Collage matching screenshot 1 */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
                  alt="Good Ideas Build Great Things workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
                  alt="Laptop with The Collective logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
                  alt="New York city skyline at sunset"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Column 3 (Black Card) */}
            <div className="bg-neutral-950 text-white rounded-2xl p-6 shadow-2xl aspect-[3/4] flex flex-col justify-between">
              <div>
                <div className="w-8 h-[2px] bg-[#d4f964] mb-6"></div>
              </div>
              <div className="space-y-3 font-serif text-xl sm:text-2xl font-bold tracking-tight">
                <p>Real People.</p>
                <p>Real Ideas.</p>
                <p className="text-neutral-400">Real Opportunities.</p>
              </div>
              <div></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
