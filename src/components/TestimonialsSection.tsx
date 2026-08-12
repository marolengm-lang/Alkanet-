import React, { useState } from 'react';
import { TESTIMONIALS_LIST } from '../data/companyData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_LIST.length) % TESTIMONIALS_LIST.length);
  };

  const current = TESTIMONIALS_LIST[currentIndex];

  return (
    <section className="py-16 sm:py-20 bg-[#1B5E20] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20] via-[#144718] to-[#237829] pointer-events-none opacity-90" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-[#A5D6A7]/20 border border-[#A5D6A7]/40 text-[#A5D6A7] font-bold text-xs uppercase tracking-wider">
            Verified Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white tracking-tight">
            Trusted by South Africa's Leading Brands
          </h2>
          <p className="text-xs sm:text-sm text-[#E8F5E9]/90">
            Hear how our hand assembly, box folding, and outsourced labour solutions help logistics, FMCG, and printing companies thrive.
          </p>
        </div>

        {/* Carousel Box */}
        <div className="bg-[#144718]/90 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-[#A5D6A7]/30 relative shadow-2xl">
          <Quote className="w-12 h-12 text-[#66BB6A] opacity-40 absolute top-6 left-6" />

          <div className="space-y-6 text-center max-w-3xl mx-auto pt-4">
            {/* Rating Stars */}
            <div className="flex justify-center gap-1 text-[#66BB6A]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#66BB6A]" />
              ))}
            </div>

            {/* Content */}
            <p className="text-base sm:text-lg text-white font-medium italic leading-relaxed">
              "{current.content}"
            </p>

            {/* Author */}
            <div className="pt-4 border-t border-white/10 text-center">
              <div className="font-bold text-white text-base font-poppins">{current.name}</div>
              <div className="text-xs text-[#A5D6A7] font-semibold mt-0.5">{current.role}, {current.company}</div>
              <div className="text-[11px] text-[#E8F5E9]/70 mt-1">{current.location} • Service: {current.serviceUsed}</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/10">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS_LIST.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'bg-[#66BB6A] w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
