import React from 'react';
import { SERVICES_LIST } from '../data/companyData';
import { ServicesGrid } from '../components/ServicesGrid';
import { NavigationPage } from '../types';
import { SeoHead } from '../components/SeoHead';
import { ArrowRight, Package, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <>
      <SeoHead
        title="Hand Assembly, Packaging & Kitting Services | ALKANET HOLDINGS South Africa"
        description="Comprehensive list of manual assembly, contract packaging, box folding, file assembly, product kitting, labelling, quality inspection, and outsourced labour in South Africa."
        canonicalUrl="https://www.alkanet.co.za/services"
      />

      {/* Hero Banner */}
      <section className="bg-[#1B5E20] text-white py-16 sm:py-20 border-b border-[#A5D6A7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9]/20 text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/30">
            Our Full Capabilities Matrix
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins tracking-tight">
            Hand Assembly, Packaging & Outsourced Labour Services
          </h1>
          <p className="text-sm sm:text-base text-[#E8F5E9]/90 max-w-3xl leading-relaxed">
            Discover our complete suite of 10 specialized manual operational services designed to help South African manufacturers, retailers, logistics providers, and printing companies lower costs and meet tight deadlines.
          </p>
        </div>
      </section>

      {/* Complete Grid */}
      <ServicesGrid onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />

      {/* Services List Table Summary */}
      <section className="py-16 bg-white dark:bg-[#1B5E20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-slate-900 dark:text-white">
              Quick Service Directory
            </h2>
            <p className="text-xs text-slate-600 dark:text-[#E8F5E9] mt-1">
              Select any service below to view detailed SEO specifications, step-by-step processes, and FAQs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                onClick={() => onNavigate('service-detail', srv.slug)}
                className="p-5 rounded-xl bg-slate-50 dark:bg-green-950 border border-slate-200 dark:border-green-800 hover:border-[#66BB6A] transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <h3 className="font-bold font-poppins text-slate-900 dark:text-white group-hover:text-[#1B5E20] dark:group-hover:text-[#A5D6A7] text-base">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-[#E8F5E9]/80 line-clamp-1 mt-0.5">
                    {srv.shortDesc}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#1B5E20] dark:group-hover:text-[#A5D6A7] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
