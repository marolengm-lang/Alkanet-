import React from 'react';
import { ShieldCheck, Clock, Award, Users, CheckCircle2, Truck, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { NavigationPage } from '../types';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
  onNavigate: (page: NavigationPage) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const reasons = [
    {
      num: '01',
      title: 'Checked Twice, Trusted Once',
      description: 'Every project is inspected before it leaves us — quality isn\'t a final step, it\'s a running one.'
    },
    {
      num: '02',
      title: 'Cheaper Than Hiring',
      description: 'No recruitment, no training curve, no idle payroll between projects — just the work, costed fairly.'
    },
    {
      num: '03',
      title: 'Scales With You',
      description: 'A small once-off run or a large-volume campaign — we flex capacity to fit the brief, not the other way round.'
    },
    {
      num: '04',
      title: 'Deadlines Aren\'t Suggestions',
      description: 'We plan backwards from your delivery date, not forwards from our convenience.'
    },
    {
      num: '05',
      title: 'Hands That Know The Difference',
      description: 'Our team is trained specifically in manual assembly, packaging, sorting and finishing — not general labour.'
    },
    {
      num: '06',
      title: 'Briefed Once, Understood Properly',
      description: 'We work with you to build the spec once, get it right, and repeat it flawlessly from then on.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-green-950/40 border-t border-b border-slate-200 dark:border-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-3xl space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9] dark:bg-green-900 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/40">
            Why Alkanet
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900 dark:text-white tracking-tight">
            Outsourcing shouldn't feel like a gamble.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#E8F5E9]/90 leading-relaxed">
            Six reasons South African businesses hand us the work they can't afford to get wrong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-[#1B5E20] border border-slate-200 dark:border-green-800 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="font-mono text-xs font-bold text-[#66BB6A] tracking-wider uppercase">
                {r.num}
              </div>
              <h3 className="font-bold font-poppins text-slate-900 dark:text-white text-lg">
                {r.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#E8F5E9]/90 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-slate-200 dark:border-green-800/60 pt-8">
          <div className="text-xs sm:text-sm text-slate-600 dark:text-[#E8F5E9]">
            Have an urgent batch or tight launch timeline? We can assist within hours.
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-xl bg-[#1B5E20] dark:bg-[#66BB6A] hover:bg-[#144718] dark:hover:bg-[#57a95b] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer border border-[#A5D6A7]/30"
            >
              Request Free Custom Quote
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-green-800 text-slate-800 dark:text-[#E8F5E9] font-bold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-green-900/40 transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Learn About Our Company</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
