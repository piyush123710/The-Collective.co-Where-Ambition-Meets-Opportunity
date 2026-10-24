import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { Plus } from 'lucide-react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0e2418] text-white border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-950/60 border border-emerald-900/40 p-6 flex flex-col justify-between shadow-xl transition-all"
              >
                <div>
                  <button
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left font-serif font-bold text-white text-base sm:text-lg hover:text-[#d4f964] transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center text-[#d4f964] shrink-0 ml-3 border border-emerald-500/20">
                      <Plus className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                    </div>
                  </button>

                  {isOpen && (
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-4 pt-4 border-t border-neutral-800 animate-fadeIn">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
