import React from 'react';

export const GlimpseFoundry = () => {
  return (
    <section className="py-24 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#d4f964]">
              BOOTCAMP & VENTURE BUILD
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-white leading-tight">
              A GLIMPSE INTO <br />
              <span className="text-[#d4f964]">THE FOUNDRY</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Inside the bootcamp and the 90-day venture build where ideas were tested, challenged, and transformed into companies.
            </p>
          </div>
        </div>

        {/* 8-Photo Grid matching screenshot 6 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop"
          ].map((img, idx) => (
            <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 shadow-lg group">
              <img src={img} alt={`Foundry glimpse ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
