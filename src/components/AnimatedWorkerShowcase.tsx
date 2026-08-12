import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Activity, Eye, Play, Pause, Layers, RefreshCw } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
}

interface WorkerScenario {
  id: string;
  title: string;
  roleTag: string;
  image: string;
  badge: string;
  description: string;
  speed: string;
  accuracy: string;
  hotspots: Hotspot[];
}

export const WORKER_SCENARIOS: WorkerScenario[] = [
  {
    id: 'folder-clip-assembly',
    title: 'Manual Document Folder Fastener Fitting',
    roleTag: 'Precision Hand Assembler',
    image: '/src/assets/images/folder_clip_assembly_1785500402425.jpg',
    badge: 'Live Factory Line • Gauteng',
    description: 'Precision manual installation of metal prong fastener clips into heavy-duty Manila document folders with 100% placement alignment.',
    speed: '650 folders / hr',
    accuracy: '100% Clip Security Audit',
    hotspots: [
      { id: 'h1', x: 62, y: 35, title: 'Prong Alignment', description: 'Manual threading and flattening of metal clip prongs into folder slots.' },
      { id: 'h2', x: 58, y: 72, title: 'Slotted Backer Fitting', description: 'Fitting metal retaining strip securely across document folder spine.' },
      { id: 'h3', x: 35, y: 40, title: 'Folder Board QC', description: 'Inspecting Manila paperboard thickness and crease integrity before clip insertion.' }
    ]
  },
  {
    id: 'folder-seated-assembly',
    title: 'Dedicated Folder Folding & Inspection Station',
    roleTag: 'Hand Assembly Specialist',
    image: '/src/assets/images/worker_folder_assembly_1785500417760.jpg',
    badge: 'High-Volume Run • 40,000 Units',
    description: 'Focused line worker hand-folding, tab-inserting, and counting printed legal document folders for corporate archives.',
    speed: '800 folders / hr',
    accuracy: '100% Crease Accuracy',
    hotspots: [
      { id: 'h4', x: 50, y: 55, title: 'Manual Crease Folding', description: 'Hand-folding along pre-scored lines to prevent paper cracking or tearing.' },
      { id: 'h5', x: 30, y: 70, title: 'Batch Stacking & Count', description: 'Neat stacking into bundles of 50 for quick warehouse dispatch.' }
    ]
  },
  {
    id: 'factory-table-collating',
    title: 'Industrial Scale Document Folder Collating',
    roleTag: 'Production Line Operator',
    image: '/src/assets/images/worker_folder_collating_1785500434349.jpg',
    badge: 'Warehouse Production Floor',
    description: 'Line worker operating along high-capacity assembly tables, managing large-scale document folder collating and indexing.',
    speed: '1,400 units / hr',
    accuracy: '99.9% Batch Uniformity',
    hotspots: [
      { id: 'h6', x: 42, y: 56, title: 'Continuous Line Supply', description: 'Managing high-volume folder stacks directly feeding finishing lines.' },
      { id: 'h7', x: 60, y: 68, title: 'Color-Coded Indexing', description: 'Affixing color identification tabs across folder margins.' }
    ]
  },
  {
    id: 'labelling-overstickering',
    title: 'Compliance Label & Barcode Overstickering',
    roleTag: 'Contract Labeller',
    image: '/src/assets/images/worker_folder_labelling_1785500448792.jpg',
    badge: 'FMCG & Office Supply Run',
    description: 'Wrinkle-free manual application of custom SKU barcode labels and serial stickers onto stationery products.',
    speed: '950 units / hr',
    accuracy: '100% Scan Verified',
    hotspots: [
      { id: 'h8', x: 45, y: 50, title: 'Wrinkle-Free Application', description: 'Precision hand placement of pressure-sensitive adhesive labels.' },
      { id: 'h9', x: 70, y: 45, title: 'Barcode Scan Audit', description: 'Immediate handheld scanner verification for retail compliance.' }
    ]
  }
];

export const AnimatedWorkerShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [processedUnits, setProcessedUnits] = useState(14820);

  const scenario = WORKER_SCENARIOS[activeIndex];

  // Auto cycle active scenario if playing (slowed down for comfortable reading)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WORKER_SCENARIOS.length);
      setActiveHotspot(null);
    }, 12000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Simulate live counter tick
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setProcessedUnits((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(counterInterval);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-[#0F3813] to-slate-950 text-white relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#66BB6A_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#66BB6A]/20 border border-[#66BB6A]/40 text-[#A5D6A7] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#66BB6A]" />
              <span>Interactive Operations Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-white tracking-tight">
              Watch Hands at Work — <span className="text-[#66BB6A]">Precision in Motion</span>
            </h2>
            <p className="text-sm sm:text-base text-[#E8F5E9]/90">
              Interactive view of our trained teams handling intricate assembly, box folding, kitting, and zero-defect quality control across Gauteng.
            </p>
          </div>

          {/* Control Bar & Live Counter */}
          <div className="flex items-center gap-4 bg-slate-900/80 p-3 rounded-2xl border border-green-800/60 backdrop-blur-md">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1B5E20] rounded-xl text-xs font-mono text-[#A5D6A7]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>LIVE SHIFT: <strong>{processedUnits.toLocaleString()}</strong> units</span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-[#A5D6A7] transition-colors cursor-pointer border border-green-700/50"
              title={isPlaying ? 'Pause auto-cycle' : 'Play auto-cycle'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-green-900/60 pb-4">
          {WORKER_SCENARIOS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveIndex(idx);
                setActiveHotspot(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeIndex === idx
                  ? 'bg-[#66BB6A] text-slate-950 font-extrabold shadow-lg shadow-[#66BB6A]/20 scale-105'
                  : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 border border-green-900/40'
              }`}
            >
              <span>{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
              {activeIndex === idx && (
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Main Stage Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/90 rounded-3xl p-4 sm:p-8 border border-green-800/60 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          
          {/* Animated Image Canvas (Col 1..7) */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-slate-950 border border-green-900/80 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.img
                key={scenario.id}
                src={scenario.image}
                alt={scenario.title}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0.2, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0.2, scale: 0.98 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Laser Quality Scanner Beam Effect (Animated Motion Overlay) */}
            <motion.div
              animate={{
                y: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#66BB6A] to-transparent opacity-75 shadow-[0_0_15px_#66BB6A] pointer-events-none z-20"
            />

            {/* Gentle Radial Scan Wave Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono backdrop-blur-md">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>{scenario.badge}</span>
            </div>

            {/* Interactive Hotspot Pins */}
            {scenario.hotspots.map((spot) => (
              <div
                key={spot.id}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2"
              >
                <button
                  onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
                  className="relative group/pin cursor-pointer focus:outline-none"
                >
                  <span className="absolute -inset-2 rounded-full bg-[#66BB6A] opacity-75 animate-ping" />
                  <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#1B5E20] border-2 border-white text-white font-bold text-xs shadow-xl hover:scale-125 transition-transform">
                    <Eye className="w-4 h-4 text-[#A5D6A7]" />
                  </span>
                </button>

                {/* Hotspot Popover */}
                {activeHotspot?.id === spot.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 p-3 rounded-xl bg-slate-900 border border-green-500 text-white shadow-2xl z-40 text-xs backdrop-blur-xl"
                  >
                    <div className="font-bold text-[#A5D6A7] font-poppins flex items-center justify-between mb-1">
                      <span>{spot.title}</span>
                      <button onClick={() => setActiveHotspot(null)} className="text-slate-400 hover:text-white">✕</button>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">{spot.description}</p>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Floating Instructional Tip */}
            <div className="absolute bottom-4 right-4 z-20 text-[10px] text-emerald-200/80 bg-slate-950/70 px-2.5 py-1 rounded-md backdrop-blur-sm border border-emerald-900/50 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Click pins to inspect worker technique
            </div>
          </div>

          {/* Details & Specs Column (Col 8..12) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                <div className="inline-block px-3 py-1 rounded-md bg-[#1B5E20] text-[#A5D6A7] text-xs font-bold uppercase tracking-wider border border-[#A5D6A7]/30">
                  {scenario.roleTag}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white leading-tight">
                  {scenario.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {scenario.description}
                </p>

                {/* Performance Metrics Cards */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-green-900/60 space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#66BB6A]" /> Line Speed
                    </div>
                    <div className="text-lg font-bold font-poppins text-white">{scenario.speed}</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-green-900/60 space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#66BB6A]" /> Quality Standard
                    </div>
                    <div className="text-lg font-bold font-poppins text-[#A5D6A7]">{scenario.accuracy}</div>
                  </div>
                </div>

                {/* Quality Workflow Checklist */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#66BB6A]" /> Human Assurance Protocol:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#66BB6A] shrink-0" />
                      <span>100% manual inspection of components before packing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#66BB6A] shrink-0" />
                      <span>Dedicated floor supervisor per 8-worker assembly team</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#66BB6A] shrink-0" />
                      <span>Immediate batch quarantine upon any visual variance</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Next/Prev Navigation */}
                <div className="flex items-center gap-3 pt-4 border-t border-green-900/60">
                  <button
                    onClick={() => {
                      setActiveIndex((prev) => (prev - 1 + WORKER_SCENARIOS.length) % WORKER_SCENARIOS.length);
                      setActiveHotspot(null);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors cursor-pointer border border-green-800/40 text-center"
                  >
                    ← Previous Process
                  </button>
                  <button
                    onClick={() => {
                      setActiveIndex((prev) => (prev + 1) % WORKER_SCENARIOS.length);
                      setActiveHotspot(null);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-[#1B5E20] hover:bg-[#144718] text-xs font-bold text-[#A5D6A7] transition-colors cursor-pointer border border-[#A5D6A7]/40 text-center"
                  >
                    Next Process →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
