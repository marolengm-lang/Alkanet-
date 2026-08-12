import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Truck,
  Users,
  ChevronDown,
  Phone,
  Mail,
  Building2,
  Package,
  Wrench,
  Sparkles,
  Activity
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_LIST, INDUSTRIES_LIST, FAQS_LIST } from '../data/companyData';
import { NavigationPage } from '../types';
import { StatsCounter } from '../components/StatsCounter';
import { ServicesGrid } from '../components/ServicesGrid';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GallerySection } from '../components/GallerySection';
import { AnimatedWorkerShowcase } from '../components/AnimatedWorkerShowcase';
import { SeoHead } from '../components/SeoHead';

interface HomePageProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string, blogSlug?: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(FAQS_LIST[0].id);

  return (
    <>
      <SeoHead
        title="Hand Assembly, Packaging, Kitting & Outsourced Labour South Africa | ALKANET HOLDINGS"
        description="ALKANET HOLDINGS (PTY) LTD provides hand assembly, contract packaging, kitting, labelling, box folding, and outsourced labour in Pretoria, Johannesburg, Gauteng, and nationwide."
        canonicalUrl="https://www.alkanet.co.za/"
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#1B5E20] text-white overflow-hidden py-16 sm:py-24 lg:py-32">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/alkanet_hero_packaging_1785312412760.jpg"
            alt="Hand Assembly and Packaging Warehouse"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20] via-[#1B5E20]/95 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#66BB6A]/20 border border-[#66BB6A]/40 text-[#A5D6A7] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#66BB6A]" />
                <span>Hand Assembly · Packaging · Kitting — South Africa</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-tight tracking-tight">
                The fiddly, time-eating jobs. Done brilliantly — <span className="text-[#A5D6A7]">by hand.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#E8F5E9] font-normal leading-relaxed max-w-2xl">
                Alkanet Holdings takes the manual work off your production line — folding, packing, kitting, labelling and finishing — so your team gets back to the work only they can do.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="px-8 py-4 rounded-xl bg-[#66BB6A] hover:bg-[#57a95b] text-[#1B5E20] font-extrabold text-base shadow-xl hover:shadow-2xl transition-all transform active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-5 h-5 text-[#1B5E20]" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-7 py-4 rounded-xl border-2 border-[#A5D6A7]/50 hover:border-white text-white font-bold text-base hover:bg-white/10 transition-all cursor-pointer"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold text-[#A5D6A7]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#66BB6A] shrink-0" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#66BB6A] shrink-0" />
                  <span>Reliable Workforce</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#66BB6A] shrink-0" />
                  <span>Quality Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#66BB6A] shrink-0" />
                  <span>Nationwide Service</span>
                </div>
              </div>
            </div>

            {/* Hero Right Quick Quote Card */}
            <div className="lg:col-span-5 bg-[#144718]/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#66BB6A]/30 shadow-2xl space-y-5">
              <div className="space-y-1">
                <div className="text-[#A5D6A7] text-xs font-bold uppercase tracking-wider">
                  Instant Project Estimate
                </div>
                <h2 className="text-xl font-bold font-poppins text-white">
                  Need Assembly or Packaging Workers in Gauteng?
                </h2>
                <p className="text-xs text-[#E8F5E9]/80">
                  Tell us your volume requirements and deadline for a response within 2 hours.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenQuoteModal('Hand Assembly Solutions')}
                  className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>1. Hand Assembly & Component Fitting</span>
                  <ArrowRight className="w-4 h-4 text-[#A5D6A7]" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal('Box Assembly')}
                  className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>2. Cardboard Box Folding & Carton Assembly</span>
                  <ArrowRight className="w-4 h-4 text-[#A5D6A7]" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal('Kitting & Custom Bundling')}
                  className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>3. Product Kitting & Subscription Boxes</span>
                  <ArrowRight className="w-4 h-4 text-[#A5D6A7]" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal('Outsourced Manual Labour Solutions')}
                  className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>4. Outsourced Warehouse & Manual Labour Teams</span>
                  <ArrowRight className="w-4 h-4 text-[#A5D6A7]" />
                </button>
              </div>

              <a
                href="tel:27718854474"
                className="block text-center py-3 bg-[#66BB6A] hover:bg-[#57a95b] text-[#1B5E20] font-extrabold text-sm rounded-xl transition-colors cursor-pointer shadow-md"
              >
                Call Sales Desk: 071 885 4474
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING STRIP */}
      <div className="bg-[#E8F5E9] text-[#1B5E20] font-medium py-4 px-4 text-center border-b border-[#A5D6A7]/40">
        <p className="max-w-5xl mx-auto text-sm sm:text-base italic font-semibold">
          Manufacturers. Retailers. Agencies. Corporates. Anyone with a pile of product and a deadline that doesn't care how it gets done — we're the hands that make it happen.
        </p>
      </div>

      {/* STATS COUNTER BAR */}
      <StatsCounter />

      {/* ANIMATED WORKERS IN MOTION SHOWCASE */}
      <AnimatedWorkerShowcase />

      {/* WHY OUTSOURCE / GAP SECTION */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#1B5E20]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9] dark:bg-green-950 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/40">
                Why Outsource
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900 dark:text-white tracking-tight leading-tight">
                Not everything belongs on a <span className="text-[#1B5E20] dark:text-[#A5D6A7]">production line.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-200 leading-relaxed">
                Machines are brilliant at doing one thing a million times. They're terrible at tying a ribbon straight, spot-checking a gift box for a fussy client, or gearing up for a campaign that runs for six weeks and never again.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-200 leading-relaxed font-medium">
                That's where we come in — real hands, properly trained, built for exactly the jobs that don't justify a machine but absolutely justify getting right.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-green-950/60 border border-slate-200 dark:border-green-800">
                  <div className="p-2 rounded-lg bg-[#E8F5E9] dark:bg-green-900 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">No Capex</h4>
                    <p className="text-xs text-slate-600 dark:text-[#E8F5E9]/90">Skip the equipment, the floor space, and the maintenance contracts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-green-950/60 border border-slate-200 dark:border-green-800">
                  <div className="p-2 rounded-lg bg-[#E8F5E9] dark:bg-green-900 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Surge-Ready</h4>
                    <p className="text-xs text-slate-600 dark:text-[#E8F5E9]/90">Scale up for a launch, scale down when it's done. No dead weight on your payroll.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-green-950/60 border border-slate-200 dark:border-green-800">
                  <div className="p-2 rounded-lg bg-[#E8F5E9] dark:bg-green-900 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Built-In Quality Control</h4>
                    <p className="text-xs text-slate-600 dark:text-[#E8F5E9]/90">Every batch checked before it leaves our hands, not after it lands on your desk.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-xl bg-[#1B5E20] hover:bg-[#144718] text-white font-bold text-sm shadow transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 text-[#A5D6A7]" />
                </button>
              </div>
            </div>

            {/* Right Visual Image Card with Motion Animations */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-green-800 group bg-slate-950">
              <motion.img
                src="/src/assets/images/alkanet_kitting_quality_1785312428217.jpg"
                alt="Product Assembly Quality Control"
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-[450px] object-cover"
              />

              {/* Laser Quality Scan Line Overlay Animation */}
              <motion.div
                animate={{
                  y: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#66BB6A] to-transparent opacity-80 shadow-[0_0_12px_#66BB6A] pointer-events-none"
              />

              {/* Floating Live Badge Top Left */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-950/85 text-[#A5D6A7] text-xs font-mono font-bold border border-green-500/50 backdrop-blur-md flex items-center gap-2 shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>QUALITY SCAN ACTIVE</span>
              </motion.div>

              {/* Floating Badge Top Right */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-[#1B5E20]/90 text-white text-xs font-poppins font-bold border border-white/20 backdrop-blur-md shadow-lg"
              >
                100% Manual Check
              </motion.div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#1B5E20]/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 dark:border-green-800 text-xs shadow-xl">
                <strong className="text-slate-900 dark:text-white block font-poppins text-sm mb-1 flex items-center justify-between">
                  <span>Hand-Checked • Quality First • On Time</span>
                  <span className="text-[10px] text-[#1B5E20] dark:text-[#A5D6A7] font-mono uppercase bg-[#E8F5E9] dark:bg-green-950 px-2 py-0.5 rounded border border-[#A5D6A7]/40">Zero-Defect Run</span>
                </strong>
                <span className="text-slate-600 dark:text-[#E8F5E9]">
                  Every batch is inspected before it leaves our hands — quality isn't a final step, it's a running one.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <ServicesGrid onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} limit={6} />

      {/* INDUSTRIES SERVED */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#1B5E20]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9] dark:bg-green-950 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/40">
              Target Market Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900 dark:text-white tracking-tight">
              Industries We Serve Across South Africa
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-200">
              Delivering customized manual assembly, packaging, and kitting workflows tailored to specific industry regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_LIST.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-green-950/40 border border-slate-200 dark:border-green-800 shadow-sm hover:shadow-lg transition-all space-y-3"
              >
                <div className="h-40 rounded-xl overflow-hidden mb-3">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold font-poppins text-slate-900 dark:text-white">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ind.description}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-[#1B5E20] dark:text-[#A5D6A7] block mb-1">Common Applications:</span>
                  <div className="flex flex-wrap gap-1">
                    {ind.useCases.map((uc, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#E8F5E9] dark:bg-green-900/60 text-[10px] font-medium text-[#1B5E20] dark:text-[#E8F5E9]">
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('industries')}
              className="px-6 py-3 rounded-xl bg-[#1B5E20] hover:bg-[#144718] text-white font-bold text-sm shadow transition-colors cursor-pointer"
            >
              Explore All Industry Use Cases →
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs onOpenQuoteModal={onOpenQuoteModal} onNavigate={onNavigate} />

      {/* TESTIMONIALS SLIDER */}
      <TestimonialsSection />

      {/* GALLERY SECTION */}
      <GallerySection />

      {/* HOW IT WORKS / PROCESS SECTION */}
      <section className="py-16 sm:py-20 bg-[#1B5E20] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-block px-3 py-1 rounded-full bg-[#A5D6A7]/20 text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/30">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins tracking-tight">
              Four steps between "we need help" and "it's handled."
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#144718] border border-[#A5D6A7]/20 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#66BB6A] text-[#144718] font-black font-poppins text-lg flex items-center justify-center">
                1
              </div>
              <h3 className="text-lg font-bold font-poppins text-white">1. Brief Us</h3>
              <p className="text-xs sm:text-sm text-[#E8F5E9]/90 leading-relaxed">
                Send the spec, the volume and the deadline. Photos or samples help, but aren't essential.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#144718] border border-[#A5D6A7]/20 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#66BB6A] text-[#144718] font-black font-poppins text-lg flex items-center justify-center">
                2
              </div>
              <h3 className="text-lg font-bold font-poppins text-white">2. Get A Quote</h3>
              <p className="text-xs sm:text-sm text-[#E8F5E9]/90 leading-relaxed">
                Clear, itemised pricing back to you fast — no back-and-forth required to understand it.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#144718] border border-[#A5D6A7]/20 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#66BB6A] text-[#144718] font-black font-poppins text-lg flex items-center justify-center">
                3
              </div>
              <h3 className="text-lg font-bold font-poppins text-white">3. We Get To Work</h3>
              <p className="text-xs sm:text-sm text-[#E8F5E9]/90 leading-relaxed">
                Trained hands take it from there, quality-checked as they go, not just at the end.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#144718] border border-[#A5D6A7]/20 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#66BB6A] text-[#144718] font-black font-poppins text-lg flex items-center justify-center">
                4
              </div>
              <h3 className="text-lg font-bold font-poppins text-white">4. Collected Or Delivered</h3>
              <p className="text-xs sm:text-sm text-[#E8F5E9]/90 leading-relaxed">
                Ready-to-ship, ready-to-shelf, ready-to-go — on the date you were promised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 sm:py-20 bg-[#E8F5E9]/30 dark:bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9] dark:bg-green-950 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/40">
              Common Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Clear answers regarding turnaround times, minimum order quantities, and service areas in Gauteng.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_LIST.map((faq) => (
              <div
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-[#1B5E20] border border-slate-200 dark:border-green-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold font-poppins text-slate-900 dark:text-white text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1B5E20] dark:text-[#A5D6A7] transition-transform duration-200 ${
                      activeFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === faq.id && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-[#E8F5E9] leading-relaxed border-t border-slate-100 dark:border-green-800/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('faq')}
              className="text-xs font-bold text-[#1B5E20] dark:text-[#A5D6A7] hover:underline cursor-pointer"
            >
              View Full FAQ Page →
            </button>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#1B5E20] via-[#237829] to-[#1B5E20] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-[#A5D6A7]/20 text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/30">
            Let's Talk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins">
            Got a pile of product and not enough hands?
          </h2>
          <p className="text-sm sm:text-base text-[#E8F5E9] max-w-2xl mx-auto">
            Tell us what needs doing. We'll tell you exactly how fast, how much, and how good.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-8 py-4 bg-[#66BB6A] hover:bg-[#57a95b] text-white font-extrabold text-base rounded-xl shadow-2xl transition-all transform active:scale-95 cursor-pointer border border-white/20"
            >
              Request A Quote
            </button>
            <a
              href="tel:27718854474"
              className="px-8 py-4 bg-white text-[#1B5E20] font-extrabold text-base rounded-xl hover:bg-[#E8F5E9] transition-colors cursor-pointer"
            >
              Call Us Instead
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
