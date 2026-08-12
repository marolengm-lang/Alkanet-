import React from 'react';
import {
  Wrench,
  Package,
  Settings,
  Box,
  FileText,
  Layers,
  Tag,
  CheckCircle2,
  Gift,
  Users,
  ArrowRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/companyData';
import { NavigationPage } from '../types';

interface ServicesGridProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string) => void;
  onOpenQuoteModal: (serviceTitle?: string) => void;
  limit?: number;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onNavigate,
  onOpenQuoteModal,
  limit
}) => {
  const displayedServices = limit ? SERVICES_LIST.slice(0, limit) : SERVICES_LIST;

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-white" />;
      case 'Package': return <Package className="w-5 h-5 text-white" />;
      case 'Settings': return <Settings className="w-5 h-5 text-white" />;
      case 'Box': return <Box className="w-5 h-5 text-white" />;
      case 'FileText': return <FileText className="w-5 h-5 text-white" />;
      case 'Layers': return <Layers className="w-5 h-5 text-white" />;
      case 'Tag': return <Tag className="w-5 h-5 text-white" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-white" />;
      case 'Gift': return <Gift className="w-5 h-5 text-white" />;
      case 'Users': return <Users className="w-5 h-5 text-white" />;
      default: return <Package className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9] dark:bg-green-950 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/40">
            What We Handle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900 dark:text-white tracking-tight">
            If it needs hands, not machines — <span className="text-[#1B5E20] dark:text-[#A5D6A7]">it's ours.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Ten categories. One standard: it leaves us the way you'd have done it yourself, if you had the time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-[#1B5E20] rounded-2xl border border-slate-200 dark:border-green-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image & Badge */}
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-green-950">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2.5 rounded-lg bg-[#1B5E20] shadow-md border border-[#A5D6A7]/40">
                  {getServiceIcon(service.iconName)}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#66BB6A] px-2 py-0.5 rounded text-white inline-block mb-1">
                    Gauteng & Nationwide
                  </span>
                  <h3 className="text-lg font-bold font-poppins line-clamp-1">{service.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#E8F5E9] leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Benefits List */}
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-[#E8F5E9] pt-2 border-t border-slate-100 dark:border-green-800">
                  {service.benefits.slice(0, 3).map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#66BB6A] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-green-800">
                  <button
                    onClick={() => onNavigate('service-detail', service.slug)}
                    className="text-xs font-bold text-[#1B5E20] dark:text-[#A5D6A7] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="px-3 py-1.5 rounded-lg bg-[#1B5E20] hover:bg-[#144718] text-white text-xs font-bold shadow-sm transition-colors cursor-pointer border border-[#66BB6A]/30"
                  >
                    Quick Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA if limited */}
        {limit && (
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B5E20] hover:bg-[#144718] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Explore All 10 Assembly & Packaging Services</span>
              <ArrowRight className="w-4 h-4 text-[#A5D6A7]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
