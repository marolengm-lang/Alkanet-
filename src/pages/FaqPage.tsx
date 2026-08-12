import React, { useState } from 'react';
import { FAQS_LIST } from '../data/companyData';
import { NavigationPage } from '../types';
import { SeoHead } from '../components/SeoHead';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenQuoteModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(FAQS_LIST[0].id);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'General', 'Pricing & Quotes', 'Quality & Turnaround', 'Location & Logistics', 'Labour Outsourcing'];

  const filteredFaqs = FAQS_LIST.filter((faq) => {
    const matchesCategory = categoryFilter === 'All' || faq.category === categoryFilter;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Generate FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS_LIST.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  return (
    <>
      <SeoHead
        title="Frequently Asked Questions | ALKANET HOLDINGS South Africa"
        description="Find answers regarding hand assembly costs, box folding turnarounds, quality control standards, and outsourced labour services in Pretoria, Johannesburg & Gauteng."
        canonicalUrl="https://www.alkanet.co.za/faq"
        jsonLdSchemas={[faqSchema]}
      />

      <section className="bg-[#1B5E20] text-white py-16 sm:py-20 border-b border-[#A5D6A7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9]/20 text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/30">
            Knowledge Center
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins tracking-tight">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-sm sm:text-base text-[#E8F5E9]/90 max-w-3xl leading-relaxed">
            Everything you need to know about working with ALKANET HOLDINGS for contract assembly, packaging, kitting, and labour outsourcing across South Africa.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#1B5E20]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. turnaround, pricing, Pretoria, minimum quantity)..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-green-950 border border-slate-200 dark:border-green-800 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#66BB6A]"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-[#1B5E20] dark:bg-[#66BB6A] text-white'
                    : 'bg-slate-100 dark:bg-green-950 text-slate-700 dark:text-[#E8F5E9] hover:bg-slate-200 dark:hover:bg-green-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <p className="text-center text-slate-500 text-xs py-8">
                No matching questions found. Try a different search term or contact our team directly.
              </p>
            ) : (
              filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200 dark:border-green-800 bg-white dark:bg-green-950/80 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                    className="w-full text-left p-5 font-bold font-poppins text-slate-900 dark:text-white text-sm sm:text-base flex justify-between items-center cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#1B5E20] dark:text-[#A5D6A7] transition-transform ${
                        activeFaq === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeFaq === faq.id && (
                    <div className="p-5 text-xs sm:text-sm text-slate-600 dark:text-[#E8F5E9] leading-relaxed border-t border-slate-100 dark:border-green-800 bg-slate-50 dark:bg-green-900/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="p-6 bg-[#E8F5E9] dark:bg-green-950 rounded-2xl border border-[#A5D6A7]/40 text-center space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Have a Specific Project Question Not Answered Here?
            </h3>
            <p className="text-xs text-slate-600 dark:text-[#E8F5E9]">
              Speak directly to our project estimators in Pretoria or Johannesburg.
            </p>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-2.5 bg-[#1B5E20] dark:bg-[#66BB6A] hover:bg-[#144718] text-white font-bold text-xs rounded-xl shadow cursor-pointer border border-[#A5D6A7]/30"
            >
              Ask Our Estimators
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
