import React from 'react';
import { X, Download, Printer, CheckCircle2, Shield, Phone, Mail, MapPin, Building2, Globe } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/companyData';
import { AlkanetLogo } from './Logo';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#1B5E20] rounded-2xl shadow-2xl border border-slate-200 dark:border-green-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative text-slate-900 dark:text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-green-950 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-green-800 mb-8">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9] dark:bg-green-950 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs mb-1 border border-[#A5D6A7]/40">
              Official Corporate Profile PDF
            </div>
            <h2 className="text-2xl font-extrabold font-poppins text-slate-900 dark:text-white">
              ALKANET HOLDINGS (PTY) LTD Capabilities
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg border border-slate-300 dark:border-green-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-green-950 flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Document Printable Body */}
        <div id="company-profile-printable" className="space-y-8 text-slate-800 dark:text-[#E8F5E9] text-xs sm:text-sm">
          {/* Document Cover Header */}
          <div className="p-6 bg-[#1B5E20] text-white rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-[#A5D6A7]/40">
            <div>
              <AlkanetLogo variant="full" size="lg" lightText={true} className="mb-2" />
              <p className="text-xs text-[#E8F5E9]/90 max-w-md mt-1">
                South Africa’s premier provider of hand assembly, contract packaging, kitting, labelling, and outsourced labour solutions.
              </p>
            </div>
            <div className="text-right text-xs space-y-1 text-[#E8F5E9]/90 border-l md:border-l-0 md:border-t-0 border-[#A5D6A7]/30 pl-4 md:pl-0">
              <div><strong>Registration:</strong> 2020 / 123456 / 07</div>
              <div><strong>Headquarters:</strong> Centurion / Pretoria, Gauteng</div>
              <div><strong>Phone:</strong> 071 885 4474 / 083 951 7504</div>
              <div><strong>Email:</strong> info@alkanet.co.za</div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-green-950 border border-slate-200 dark:border-green-800">
              <h3 className="font-bold text-slate-900 dark:text-[#A5D6A7] text-sm mb-2">
                1. High-Speed Output
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#E8F5E9]/80">
                Scalable workforce capable of assembling over 50,000 units daily for urgent campaign launches.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-green-950 border border-slate-200 dark:border-green-800">
              <h3 className="font-bold text-slate-900 dark:text-[#A5D6A7] text-sm mb-2">
                2. Zero-Defect QA
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#E8F5E9]/80">
                AQL inspection standards with inline quality checkpoints and supervisor verification on every batch.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-green-950 border border-slate-200 dark:border-green-800">
              <h3 className="font-bold text-slate-900 dark:text-[#A5D6A7] text-sm mb-2">
                3. B-BBEE Compliant
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#E8F5E9]/80">
                Fully compliant with South African Labour Relations Act (LRA) & Basic Conditions of Employment.
              </p>
            </div>
          </div>

          {/* Service Matrix */}
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 border-b pb-2 border-slate-200 dark:border-green-800">
              Full Service Capabilities Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES_LIST.map((srv) => (
                <div key={srv.id} className="p-3 bg-slate-50 dark:bg-green-950/60 rounded-lg flex items-start gap-2.5 border border-slate-200 dark:border-green-800">
                  <CheckCircle2 className="w-4 h-4 text-[#66BB6A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block text-xs">{srv.title}</strong>
                    <span className="text-[11px] text-slate-500 dark:text-[#E8F5E9]/80 leading-snug block">
                      {srv.shortDesc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Focus Areas */}
          <div className="p-4 bg-[#E8F5E9] dark:bg-green-950 rounded-xl border border-[#A5D6A7]/40 flex flex-wrap justify-between items-center gap-4">
            <div>
              <strong className="text-[#1B5E20] dark:text-white block">Primary Service Hubs:</strong>
              <span className="text-xs text-slate-700 dark:text-[#E8F5E9]">
                Pretoria • Johannesburg • Centurion • Kempton Park • Midrand • Vanderbijlpark • Nationwide South Africa
              </span>
            </div>
            <a
              href="mailto:info@alkanet.co.za"
              className="px-4 py-2 bg-[#1B5E20] text-white font-bold rounded-lg text-xs hover:bg-[#144718] transition-colors"
            >
              Direct Tender / RFP Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
