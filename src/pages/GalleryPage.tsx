import React from 'react';
import { GallerySection } from '../components/GallerySection';
import { NavigationPage } from '../types';
import { SeoHead } from '../components/SeoHead';

interface GalleryPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenQuoteModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <>
      <SeoHead
        title="Operations Gallery & Before/After Proof | ALKANET HOLDINGS South Africa"
        description="Filterable gallery showcasing real operational photos of cardboard box folding, hand assembly, promotional kitting, quality inspection, and warehouse teams in Gauteng."
        canonicalUrl="https://www.alkanet.co.za/gallery"
      />

      {/* Hero */}
      <section className="bg-[#1B5E20] text-white py-16 sm:py-20 border-b border-[#A5D6A7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9]/20 text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/30">
            Execution Showcase
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins tracking-tight">
            ALKANET Project & Operations Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#E8F5E9]/90 max-w-3xl leading-relaxed">
            Examine our real hand assembly setups, cardboard box folding runs, promotional gift kitting, quality inspection reports, and outsourced warehouse labour teams.
          </p>
        </div>
      </section>

      <GallerySection />

      {/* CTA */}
      <section className="py-12 bg-slate-100 dark:bg-green-950 text-center border-t border-slate-200 dark:border-green-800">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white">
            Have a Similar Assembly or Box Folding Project?
          </h2>
          <p className="text-xs text-slate-600 dark:text-[#E8F5E9]">
            Our teams in Pretoria and Johannesburg can assemble sample proofs within 24 hours.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 bg-[#1B5E20] dark:bg-[#66BB6A] hover:bg-[#144718] dark:hover:bg-[#57a95b] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer border border-[#A5D6A7]/30"
          >
            Request Free Custom Quote
          </button>
        </div>
      </section>
    </>
  );
};
