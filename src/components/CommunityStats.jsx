import React from 'react';
import { LEADERS } from '../data/mockData';

export const CommunityStats = () => {
  return (
    <section id="community" className="bg-neutral-950 text-white">
      
      {/* Top Part: Build With Amazing People */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Black and White Photo matching screenshot 2 */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl aspect-[4/3] bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop&sat=-100"
                alt="Community members interacting at networking event"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>

          {/* Right Text & Stats matching screenshot 2 */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#d4f964]"></span>
              <span className="text-xs uppercase font-mono tracking-widest text-[#d4f964] font-bold">
                OUR COMMUNITY
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
              Build With Amazing People.
            </h2>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl">
              A growing community of creators, founders, entrepreneurs and professionals, all driven by the same mindset — to build, grow and give back.
            </p>

            <div>
              <a href="#apply" className="inline-flex items-center gap-2 text-[#d4f964] font-bold text-sm hover:underline">
                <span>Learn More</span>
                <span>→</span>
              </a>
            </div>

            {/* Stats columns */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800">
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-white">10K+</span>
                <p className="text-xs text-neutral-400 mt-1">Members</p>
              </div>
              <div className="border-x border-neutral-800 px-4">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-white">500+</span>
                <p className="text-xs text-neutral-400 mt-1">Events & Meetups</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-white">50+</span>
                <p className="text-xs text-neutral-400 mt-1">Industry Partners</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Part: WHO YOU BUILD WITH MATTERS (Dark Green Banner matching screenshot 2) */}
      <div className="bg-[#0e2418] py-20 border-y border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-white leading-tight">
                WHO YOU BUILD <br />
                WITH MATTERS.
              </h3>
              <div className="w-24 h-4 bg-[url('https://api.iconify.design/lucide:check.svg')] opacity-20"></div>
            </div>

            <div className="lg:col-span-6 space-y-6 text-neutral-200">
              <div>
                <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
                  Kishore Biyani and Nikhil Kamath bring the experience and insight behind India's biggest transformations.
                </p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
                  Ronnie Screwvala brings decades of institution-building to the forge.
                </p>
              </div>
              <div className="pt-4 border-t border-emerald-800/60">
                <p className="font-serif italic text-xl text-[#d4f964]">
                  This is who you build with.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
