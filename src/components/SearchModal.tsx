import React, { useState } from 'react';
import { X, Search, ArrowRight, Package, BookOpen, Factory, HelpCircle } from 'lucide-react';
import { SERVICES_LIST, INDUSTRIES_LIST, FAQS_LIST } from '../data/companyData';
import { BLOG_POSTS } from '../data/blogArticles';
import { NavigationPage } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: NavigationPage, serviceSlug?: string, blogSlug?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  const matchingServices = query
    ? SERVICES_LIST.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.shortDesc.toLowerCase().includes(query) ||
          s.fullDesc.toLowerCase().includes(query)
      )
    : SERVICES_LIST.slice(0, 4);

  const matchingBlogs = query
    ? BLOG_POSTS.filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
          b.excerpt.toLowerCase().includes(query) ||
          b.tags.some((t) => t.toLowerCase().includes(query))
      )
    : BLOG_POSTS.slice(0, 3);

  const matchingIndustries = query
    ? INDUSTRIES_LIST.filter(
        (i) => i.name.toLowerCase().includes(query) || i.description.toLowerCase().includes(query)
      )
    : INDUSTRIES_LIST.slice(0, 3);

  const matchingFaqs = query
    ? FAQS_LIST.filter(
        (f) => f.question.toLowerCase().includes(query) || f.answer.toLowerCase().includes(query)
      )
    : FAQS_LIST.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#1B5E20] rounded-2xl shadow-2xl border border-slate-200 dark:border-green-800 w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden relative text-slate-900 dark:text-white">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-green-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#1B5E20] dark:text-[#A5D6A7]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search hand assembly, packaging, kitting, Pretoria, Gauteng..."
            autoFocus
            className="flex-grow bg-transparent text-slate-900 dark:text-white font-medium text-sm focus:outline-none placeholder-slate-400 dark:placeholder-slate-300"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-green-950 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results list */}
        <div className="flex-grow p-4 overflow-y-auto space-y-6 text-xs">
          {/* Services */}
          {matchingServices.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-[#1B5E20] dark:text-[#A5D6A7] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5" />
                <span>Services ({matchingServices.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingServices.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => {
                      onNavigate('service-detail', srv.slug);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-50 dark:bg-green-950/80 hover:bg-[#E8F5E9] dark:hover:bg-green-900/80 flex items-center justify-between group transition-colors cursor-pointer border border-slate-200 dark:border-green-800"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white group-hover:text-[#1B5E20] dark:group-hover:text-[#A5D6A7]">
                        {srv.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-[#E8F5E9]/80 line-clamp-1">{srv.shortDesc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1B5E20] dark:group-hover:text-[#A5D6A7] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blogs */}
          {matchingBlogs.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-[#66BB6A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Blog Articles ({matchingBlogs.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingBlogs.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onNavigate('blog-post', undefined, b.slug);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-50 dark:bg-green-950/80 hover:bg-[#E8F5E9] dark:hover:bg-green-900/80 flex items-center justify-between group transition-colors cursor-pointer border border-slate-200 dark:border-green-800"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white group-hover:text-[#66BB6A]">
                        {b.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-[#E8F5E9]/80 line-clamp-1">{b.excerpt}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#66BB6A] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Industries */}
          {matchingIndustries.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-[#1B5E20] dark:text-[#A5D6A7] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5" />
                <span>Industries</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchingIndustries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => {
                      onNavigate('industries');
                      onClose();
                    }}
                    className="p-2 bg-slate-50 dark:bg-green-950 rounded-lg text-left hover:bg-[#E8F5E9] dark:hover:bg-green-900 transition-colors cursor-pointer border border-slate-200 dark:border-green-800"
                  >
                    <div className="font-bold text-slate-900 dark:text-white text-xs">{ind.name}</div>
                    <div className="text-[10px] text-slate-500 dark:text-[#E8F5E9]/80 line-clamp-1">{ind.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {matchingFaqs.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-[#1B5E20] dark:text-[#A5D6A7] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <div className="space-y-1.5">
                {matchingFaqs.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => {
                      onNavigate('faq');
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-50 dark:bg-green-950/80 hover:bg-[#E8F5E9] dark:hover:bg-green-900/80 transition-colors cursor-pointer border border-slate-200 dark:border-green-800"
                  >
                    <div className="font-bold text-slate-900 dark:text-white">{f.question}</div>
                    <div className="text-[11px] text-slate-500 dark:text-[#E8F5E9]/80 line-clamp-1">{f.answer}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
