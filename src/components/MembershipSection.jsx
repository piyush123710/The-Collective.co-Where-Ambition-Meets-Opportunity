import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const MembershipSection = ({ onScrollToApply }) => {
  return (
    <section id="membership" className="py-24 bg-[#f8f6f0] text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-emerald-600"></span>
              <span className="text-xs uppercase font-mono tracking-widest text-neutral-600 font-bold">
                MEMBERSHIP
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-neutral-900 leading-tight">
              More Than Access. <br />
              <span className="text-emerald-700">It's Belonging.</span>
            </h2>

            <p className="text-neutral-700 text-base leading-relaxed">
              Choose a plan that fits your journey and unlock a world of opportunities, resources and connections.
            </p>

            <div>
              <button
                onClick={onScrollToApply}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4f964] hover:bg-[#c2e852] text-neutral-950 font-bold text-sm transition-all shadow-lg"
              >
                <span>View Membership Plans</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Middle Checklist Column matching screenshot 5 */}
          <div className="lg:col-span-3 space-y-4">
            {[
              "Exclusive Events & Experiences",
              "Access to Founders & Investors",
              "Collaborative Workspaces",
              "Learning & Growth Resources",
              "Global Network"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm font-medium text-neutral-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Right Images / Cards matching screenshot 5 */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
                alt="Lounge area with Collective logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-neutral-200 text-neutral-900 rounded-2xl p-6 shadow-xl aspect-[4/3] flex flex-col justify-between border border-neutral-300">
              <div className="w-8 h-[2px] bg-emerald-600"></div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                Real Connections.<br />
                Lasting Opportunities.
              </h3>
              <div></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
