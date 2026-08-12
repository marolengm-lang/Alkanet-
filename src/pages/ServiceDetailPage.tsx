import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/companyData';
import { NavigationPage } from '../types';
import { SeoHead } from '../components/SeoHead';
import { CheckCircle2, ChevronDown, ArrowLeft, ArrowRight, ShieldCheck, Clock, Package } from 'lucide-react';

interface ServiceDetailPageProps {
  slug?: string;
  onNavigate: (page: NavigationPage, serviceSlug?: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenQuoteModal
}) => {
  const service = SERVICES_LIST.find((s) => s.slug === slug) || SERVICES_LIST[0];
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Generate Service JSON-LD Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'ALKANET HOLDINGS (PTY) LTD'
    },
    areaServed: 'South Africa',
    description: service.fullDesc
  };

  return (
    <>
      <SeoHead
        title={service.seoTitle}
        description={service.metaDescription}
        canonicalUrl={`https://www.alkanet.co.za/services/${service.slug}`}
        ogImage={service.image}
        jsonLdSchemas={[serviceSchema]}
      />

      {/* Header Banner */}
      <section className="bg-[#1B5E20] text-white py-14 sm:py-20 relative overflow-hidden border-b border-[#A5D6A7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs text-[#A5D6A7] font-bold hover:underline mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </button>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins tracking-tight">
            {service.title}
          </h1>

          <p className="text-sm sm:text-base text-[#E8F5E9]/90 max-w-3xl leading-relaxed">
            {service.shortDesc}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenQuoteModal(service.title)}
              className="px-6 py-3 bg-[#66BB6A] hover:bg-[#57a95b] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-colors cursor-pointer border border-white/20"
            >
              Request Free Quote for {service.title}
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-white dark:bg-[#1B5E20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Image & Overview */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-72 sm:h-96 shadow-lg border border-slate-200 dark:border-green-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white">
                  Service Overview & Capabilities
                </h2>
                <p className="text-sm text-slate-600 dark:text-[#E8F5E9] leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4 p-6 bg-slate-50 dark:bg-green-950/80 rounded-2xl border border-slate-200 dark:border-green-800">
                <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">
                  Key Business Benefits
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-[#E8F5E9]">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#66BB6A] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step-by-Step Process Timeline */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">
                  Our Step-by-Step Execution Process
                </h3>

                <div className="space-y-4">
                  {service.process.map((p) => (
                    <div
                      key={p.step}
                      className="p-5 rounded-xl bg-white dark:bg-green-950 border border-slate-200 dark:border-green-800 shadow-sm flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#1B5E20] dark:bg-[#66BB6A] text-white font-extrabold text-sm flex items-center justify-center shrink-0 border border-[#A5D6A7]/30">
                        {p.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          {p.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-[#E8F5E9]/90 mt-1 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs for Service */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">
                    Frequently Asked Questions for {service.title}
                  </h3>

                  <div className="space-y-2">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200 dark:border-green-800 overflow-hidden"
                      >
                        <button
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          className="w-full text-left p-4 font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex justify-between items-center cursor-pointer bg-white dark:bg-green-950"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#1B5E20] dark:text-[#A5D6A7] transition-transform ${
                              activeFaq === idx ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {activeFaq === idx && (
                          <div className="p-4 bg-slate-50 dark:bg-green-900 text-xs text-slate-600 dark:text-[#E8F5E9] border-t border-slate-200 dark:border-green-800">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Sidebar Quote Card */}
              <div className="p-6 bg-[#1B5E20] text-white rounded-2xl shadow-xl space-y-4 sticky top-24 border border-[#A5D6A7]/30">
                <div className="text-[#A5D6A7] text-xs font-bold uppercase tracking-wider">
                  Direct Service Quote
                </div>
                <h3 className="text-xl font-bold font-poppins">
                  Get Pricing for {service.title}
                </h3>
                <p className="text-xs text-[#E8F5E9]/90">
                  Serving Pretoria, Johannesburg, Centurion, and shipping completed inventory across South Africa.
                </p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#A5D6A7]" />
                    <span>Turnaround: 24-48 Hours available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#A5D6A7]" />
                    <span>AQL Quality Guarantee</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full py-3 bg-[#66BB6A] hover:bg-[#57a95b] text-white font-extrabold text-sm rounded-xl shadow-md transition-colors cursor-pointer border border-white/20"
                >
                  Request Quote Now
                </button>

                <div className="pt-2 text-center text-[11px] text-[#E8F5E9]">
                  Or call sales directly: <a href="tel:27718854474" className="text-[#A5D6A7] font-bold underline">071 885 4474</a>
                </div>
              </div>

              {/* Popular Industries */}
              <div className="p-5 bg-slate-50 dark:bg-green-950 rounded-2xl border border-slate-200 dark:border-green-800 space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                  Popular Industries Using This Service
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {service.popularIndustries.map((ind, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white dark:bg-green-900 border border-slate-200 dark:border-green-700 rounded text-xs font-semibold text-slate-800 dark:text-[#E8F5E9]"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
