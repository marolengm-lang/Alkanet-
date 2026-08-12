import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';
import { X, Eye, CheckCircle2, ArrowRight, Play, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [showBeforeAfter, setShowBeforeAfter] = useState<boolean>(false);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'boxes', label: 'Box Folding' },
    { key: 'assembly', label: 'Hand Assembly' },
    { key: 'kitting', label: 'Kitting' },
    { key: 'packaging', label: 'Labelling & Pack' },
    { key: 'quality', label: 'Quality Control' },
    { key: 'labour', label: 'Outsourced Labour' }
  ];

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-[#1B5E20]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9] dark:bg-green-950 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/40">
            Proven Operations Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900 dark:text-white tracking-tight">
            ALKANET Project Gallery & Proof of Execution
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-200">
            Real operational photos from our hand assembly lines, cardboard box erection runs, cosmetic kitting setups, and warehouse teams in Gauteng.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === cat.key
                  ? 'bg-[#1B5E20] text-white shadow-md border border-[#66BB6A]/40'
                  : 'bg-slate-100 dark:bg-green-900/40 text-slate-700 dark:text-[#E8F5E9] hover:bg-slate-200 dark:hover:bg-green-900/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setSelectedItem(item);
                  setShowBeforeAfter(false);
                }}
                className="group bg-slate-50 dark:bg-green-950/40 rounded-2xl overflow-hidden border border-slate-200 dark:border-green-800 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-slate-900 font-bold text-xs rounded-lg shadow flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-[#1B5E20]" /> View Project & Techniques
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#66BB6A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    {item.categoryLabel}
                  </div>
                  <div className="absolute top-3 right-3 bg-slate-950/80 text-[#A5D6A7] text-[10px] font-mono px-2 py-0.5 rounded border border-green-500/40 backdrop-blur-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Hands-On</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold font-poppins text-slate-900 dark:text-white text-sm group-hover:text-[#1B5E20] dark:group-hover:text-[#A5D6A7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-[#E8F5E9]/80 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-semibold text-slate-500 dark:text-[#E8F5E9]/60 border-t border-slate-200 dark:border-green-800 flex items-center justify-between">
                    <span>Client: {item.clientType}</span>
                    <span className="text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-[10px]">Proof of Work →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-[#1B5E20] rounded-2xl shadow-2xl border border-slate-200 dark:border-green-800 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative text-slate-900 dark:text-white">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded bg-[#E8F5E9] dark:bg-green-950 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs uppercase border border-[#A5D6A7]/40">
                  {selectedItem.categoryLabel}
                </span>

                <h3 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white">
                  {selectedItem.title}
                </h3>

                {/* Main or Before/After Toggle */}
                {selectedItem.beforeAfter && (
                  <div className="flex gap-2 border-b border-slate-200 dark:border-green-800 pb-2">
                    <button
                      onClick={() => setShowBeforeAfter(false)}
                      className={`px-3 py-1.5 rounded text-xs font-bold ${
                        !showBeforeAfter
                          ? 'bg-[#1B5E20] text-white border border-[#A5D6A7]/40'
                          : 'bg-slate-100 dark:bg-green-950 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      Project Overview
                    </button>
                    <button
                      onClick={() => setShowBeforeAfter(true)}
                      className={`px-3 py-1.5 rounded text-xs font-bold ${
                        showBeforeAfter
                          ? 'bg-[#66BB6A] text-white'
                          : 'bg-slate-100 dark:bg-green-950 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      Before vs After Transformation
                    </button>
                  </div>
                )}

                {showBeforeAfter && selectedItem.beforeAfter ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 p-3 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-900">
                      <div className="font-bold text-xs text-red-700 dark:text-red-400 uppercase">
                        Before ALKANET Intervention:
                      </div>
                      <img
                        src={selectedItem.beforeAfter.beforeImage}
                        alt="Before"
                        referrerPolicy="no-referrer"
                        className="rounded-lg h-44 w-full object-cover"
                      />
                      <p className="text-xs text-slate-700 dark:text-slate-300">
                        {selectedItem.beforeAfter.beforeText}
                      </p>
                    </div>

                    <div className="space-y-2 p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-900">
                      <div className="font-bold text-xs text-emerald-700 dark:text-emerald-400 uppercase">
                        After ALKANET Execution:
                      </div>
                      <img
                        src={selectedItem.beforeAfter.afterImage}
                        alt="After"
                        referrerPolicy="no-referrer"
                        className="rounded-lg h-44 w-full object-cover"
                      />
                      <p className="text-xs text-slate-700 dark:text-slate-300">
                        {selectedItem.beforeAfter.afterText}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-80 object-cover rounded-xl"
                    />
                    <p className="text-sm text-slate-700 dark:text-[#E8F5E9] leading-relaxed">
                      {selectedItem.description}
                    </p>
                    <div className="p-3 bg-slate-100 dark:bg-green-950 rounded-lg text-xs font-medium text-slate-800 dark:text-[#E8F5E9]">
                      <strong>Client Industry:</strong> {selectedItem.clientType}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
