import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { NavigationPage } from '../types';

interface TermsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SeoHead
        title="Terms of Service & Operational Conditions | ALKANET HOLDINGS"
        description="Terms of service and operational guidelines for manual assembly, packaging, and labour contracts with ALKANET HOLDINGS (PTY) LTD."
        canonicalUrl="https://www.alkanet.co.za/terms"
      />

      <section className="bg-[#1B5E20] text-white py-14 border-b border-[#A5D6A7]/20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold font-poppins">Terms of Service & Operational Conditions</h1>
          <p className="text-xs text-[#E8F5E9]/90 mt-1">ALKANET HOLDINGS (PTY) LTD</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-[#1B5E20] text-slate-800 dark:text-[#E8F5E9] text-xs sm:text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Quotations & Batch Estimates</h2>
          <p>
            All formal quotes issued by ALKANET HOLDINGS are based on client-provided specifications, component counts, packaging artwork, and estimated batch volumes. Final invoices reflect actual verified completed units.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Quality Control & Acceptance (AQL)</h2>
          <p>
            Batch hand assembly and packaging orders follow ISO-standard Acceptable Quality Limit (AQL) sampling. Non-conforming units exceeding agreed thresholds are reworked at zero additional charge to the client.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Labour & Statutory Compliance</h2>
          <p>
            ALKANET HOLDINGS warrants that all personnel supplied for on-site or off-site labour outsourcing are legally compliant under the Basic Conditions of Employment Act (BCEA) and Labour Relations Act of South Africa.
          </p>
        </div>
      </section>
    </>
  );
};
