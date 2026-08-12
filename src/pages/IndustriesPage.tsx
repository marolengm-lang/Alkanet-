import React from 'react';
import { INDUSTRIES_LIST } from '../data/companyData';
import { NavigationPage } from '../types';
import { SeoHead } from '../components/SeoHead';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenQuoteModal: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <>
      <SeoHead
        title="Industries Served | Hand Assembly & Packaging South Africa | ALKANET HOLDINGS"
        description="We serve Manufacturers, Retailers, Logistics Companies, Marketing Agencies, FMCG, Healthcare, Printing, Government, and E-commerce across South Africa."
        canonicalUrl="https://www.alkanet.co.za/industries"
      />

      {/* Hero */}
      <section className="bg-[#1B5E20] text-white py-16 sm:py-20 border-b border-[#A5D6A7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9]/20 text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/30">
            Sector Expertise
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins tracking-tight">
            Target Market & Industries We Serve
          </h1>
          <p className="text-sm sm:text-base text-[#E8F5E9]/90 max-w-3xl leading-relaxed">
            Customized manual hand assembly, contract packaging, kitting, and outsourced labour operations engineered specifically for South Africa’s key commercial sectors.
          </p>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-16 bg-white dark:bg-[#1B5E20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          {INDUSTRIES_LIST.map((ind, index) => (
            <div
              key={ind.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-slate-50 dark:bg-green-950/80 border border-slate-200 dark:border-green-800 shadow-sm ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-5 rounded-2xl overflow-hidden h-64 sm:h-80 shadow-md">
                <img
                  src={ind.image}
                  alt={ind.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block px-2.5 py-0.5 rounded bg-[#E8F5E9] dark:bg-green-900 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs uppercase">
                  Industry Focus #{index + 1}
                </div>
                <h2 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white">
                  {ind.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#E8F5E9] leading-relaxed">
                  {ind.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h4 className="text-xs font-bold text-[#1B5E20] dark:text-[#A5D6A7] uppercase mb-1">Common Applications</h4>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-[#E8F5E9]">
                      {ind.useCases.map((uc, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#66BB6A]" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#1B5E20] dark:text-[#A5D6A7] uppercase mb-1">Key Advantages</h4>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-[#E8F5E9]">
                      {ind.keyBenefits.map((kb, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#66BB6A]" />
                          <span>{kb}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={onOpenQuoteModal}
                    className="px-5 py-2.5 bg-[#1B5E20] dark:bg-[#66BB6A] hover:bg-[#144718] dark:hover:bg-[#57a95b] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer border border-[#A5D6A7]/30"
                  >
                    Discuss {ind.name} Assembly Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
