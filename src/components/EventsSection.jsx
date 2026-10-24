import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/mockData';
import { CheckCircle2 } from 'lucide-react';

export const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvped, setRsvped] = useState(false);

  const handleRsvp = (ev) => {
    setSelectedEvent(ev);
    setRsvped(false);
  };

  const confirmRsvp = (e) => {
    e.preventDefault();
    setRsvped(true);
    setTimeout(() => {
      setSelectedEvent(null);
      setRsvped(false);
    }, 2000);
  };

  return (
    <section id="events" className="py-24 bg-[#f8f6f0] text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Cards Layout matching screenshot 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-emerald-600"></span>
              <span className="text-xs uppercase font-mono tracking-widest text-neutral-600 font-bold">
                EVENTS & EXPERIENCES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-neutral-900 leading-tight">
              Real Conversations. <br />
              <span className="text-emerald-700">Lasting Opportunities.</span>
            </h2>

            <p className="text-neutral-700 text-base leading-relaxed">
              From exclusive meetups to curated experiences, we bring people together to learn, share and build what's next.
            </p>

            <div>
              <a href="#apply" className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:underline">
                <span>View All Events</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right 3 Cards matching screenshot 3 */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS_DATA.map((ev) => (
              <div
                key={ev.id}
                onClick={() => handleRsvp(ev)}
                className="group cursor-pointer rounded-2xl bg-neutral-950 text-white overflow-hidden shadow-2xl border border-neutral-800 flex flex-col justify-between hover:border-emerald-500 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#d4f964] transition-colors">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium">{ev.date}</p>
                  <p className="text-xs text-neutral-300 pt-2 border-t border-neutral-800/80 leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RSVP Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn" role="dialog" aria-modal="true">
            <div className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-white shadow-2xl">
              {rsvped ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif">RSVP Confirmed!</h3>
                  <p className="text-sm text-neutral-400">We’ve sent the calendar invite and venue pass to your registered email.</p>
                </div>
              ) : (
                <form onSubmit={confirmRsvp} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <h3 className="text-lg font-bold font-serif">Confirm Event RSVP</h3>
                    <button type="button" onClick={() => setSelectedEvent(null)} className="text-neutral-400 hover:text-white">✕</button>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="text-[10px] text-emerald-400 uppercase font-mono">{selectedEvent.category}</span>
                    <h4 className="font-bold text-white text-sm">{selectedEvent.title}</h4>
                    <p className="text-xs text-neutral-400">{selectedEvent.date}</p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Full Name</label>
                    <input type="text" required placeholder="Alex Morgan" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Email Address</label>
                    <input type="email" required placeholder="alex@collective.co" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#d4f964] hover:bg-[#c2e852] text-neutral-950 font-bold text-sm transition-all shadow-lg"
                  >
                    Confirm My Attendance
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
