import React from 'react';
import { Target, Eye, ShieldCheck, Award, Users, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';
import { COMPANY_DETAILS, KEY_STATS } from '../data/companyData';
import { NavigationPage } from '../types';
import { SeoHead } from '../components/SeoHead';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenQuoteModal: () => void;
  onOpenProfileModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenProfileModal
}) => {
  return (
    <>
      <SeoHead
        title="About ALKANET HOLDINGS (PTY) LTD | Hand Assembly & Packaging Experts South Africa"
        description="Learn about ALKANET HOLDINGS, South Africa's trusted contract assembly, packaging, kitting, and outsourced labour partner operating across Pretoria, Johannesburg, and Gauteng."
        canonicalUrl="https://www.alkanet.co.za/about"
      />

      {/* Header Banner */}
      <section className="bg-[#1B5E20] text-white py-16 sm:py-20 border-b border-[#A5D6A7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9]/20 text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/30">
            About ALKANET HOLDINGS (PTY) LTD
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins tracking-tight">
            South Africa's Hands-On Production Partner
          </h1>
          <p className="text-sm sm:text-base text-[#E8F5E9]/90 max-w-3xl leading-relaxed">
            Alkanet Holdings takes the manual work off your production line — folding, packing, kitting, labelling and finishing — so your team gets back to the work only they can do.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white dark:bg-[#1B5E20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-slate-900 dark:text-white">
                The fiddly, time-eating jobs. Done brilliantly — by hand.
              </h2>
              <p className="text-sm text-slate-600 dark:text-[#E8F5E9] leading-relaxed">
                Machines are brilliant at doing one thing a million times. They're terrible at tying a ribbon straight, spot-checking a gift box for a fussy client, or gearing up for a campaign that runs for six weeks and never again.
              </p>
              <p className="text-sm text-slate-600 dark:text-[#E8F5E9] leading-relaxed font-medium">
                That's where we come in — real hands, properly trained, built for exactly the jobs that don't justify a machine but absolutely justify getting right.
              </p>
              <p className="text-sm text-slate-600 dark:text-[#E8F5E9] leading-relaxed">
                Manufacturers. Retailers. Agencies. Corporates. Anyone with a pile of product and a deadline that doesn't care how it gets done — we're the hands that make it happen across Pretoria, Johannesburg, Gauteng, and nationwide.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3 bg-[#1B5E20] dark:bg-[#66BB6A] text-white font-bold text-sm rounded-xl hover:bg-[#144718] dark:hover:bg-[#57a95b] transition-colors shadow cursor-pointer border border-[#A5D6A7]/30"
                >
                  Request A Quote
                </button>
                <button
                  onClick={onOpenProfileModal}
                  className="px-6 py-3 border border-slate-300 dark:border-green-800 text-slate-800 dark:text-[#E8F5E9] font-bold text-sm rounded-xl hover:bg-slate-100 dark:hover:bg-green-900 transition-colors cursor-pointer"
                >
                  Download Company Profile (PDF)
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-green-800">
              <img
                src="/src/assets/images/alkanet_hero_packaging_1785312412760.jpg"
                alt="ALKANET Facility Team"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-slate-50 dark:bg-green-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-[#1B5E20] rounded-2xl border border-slate-200 dark:border-green-800 shadow-sm space-y-4">
              <div className="p-3 bg-[#E8F5E9] dark:bg-green-950 rounded-xl inline-block text-[#1B5E20] dark:text-[#A5D6A7]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-600 dark:text-[#E8F5E9] leading-relaxed">
                To empower South African businesses by providing error-free manual hand assembly, contract packaging, and outsourced labour that reduce operational overhead, protect brand quality, and accelerate speed-to-market.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#1B5E20] rounded-2xl border border-slate-200 dark:border-green-800 shadow-sm space-y-4">
              <div className="p-3 bg-[#E8F5E9] dark:bg-green-950 rounded-xl inline-block text-[#1B5E20] dark:text-[#A5D6A7]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-600 dark:text-[#E8F5E9] leading-relaxed">
                To be recognized as South Africa's most dependable, ethically compliant, and quality-driven hand assembly and co-packing provider across Gauteng and nationwide.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#1B5E20] rounded-2xl border border-slate-200 dark:border-green-800 shadow-sm space-y-4">
              <div className="p-3 bg-[#E8F5E9] dark:bg-green-950 rounded-xl inline-block text-[#1B5E20] dark:text-[#A5D6A7]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">Our Core Values</h3>
              <ul className="text-xs text-slate-600 dark:text-[#E8F5E9] space-y-2">
                <li className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#66BB6A]" /> Precision Workmanship
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#66BB6A]" /> Zero-Defect Quality Control
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#66BB6A]" /> Labour Law & BCEA Compliance
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#66BB6A]" /> Client Confidentiality (NDAs)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Metrics */}
      <section className="py-16 bg-white dark:bg-[#1B5E20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold font-poppins text-slate-900 dark:text-white">
              Proven Performance Track Record
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#E8F5E9] mt-2">
              Over 2 Million individual units assembled, packaged, and verified across Gauteng.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {KEY_STATS.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-green-950 border border-slate-200 dark:border-green-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1B5E20] dark:text-[#A5D6A7] font-poppins mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-slate-700 dark:text-[#E8F5E9]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#1B5E20] text-white text-center border-t border-[#A5D6A7]/30">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins">
            Partner With ALKANET HOLDINGS Today
          </h2>
          <p className="text-xs sm:text-sm text-[#E8F5E9]/90">
            Our technical estimators in Pretoria & Johannesburg are ready to evaluate your sample specs.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 bg-[#66BB6A] hover:bg-[#57a95b] text-white font-bold text-sm rounded-xl shadow-lg transition-colors cursor-pointer border border-white/20"
          >
            Get a Free Quote Now
          </button>
        </div>
      </section>
    </>
  );
};
