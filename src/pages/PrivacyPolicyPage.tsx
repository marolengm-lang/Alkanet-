import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { NavigationPage } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SeoHead
        title="Privacy Policy & POPIA Compliance | ALKANET HOLDINGS (PTY) LTD"
        description="Privacy policy and Protection of Personal Information Act (POPIA) compliance policy for ALKANET HOLDINGS (PTY) LTD."
        canonicalUrl="https://www.alkanet.co.za/privacy"
      />

      <section className="bg-[#1B5E20] text-white py-14 border-b border-[#A5D6A7]/20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold font-poppins">Privacy Policy & POPIA Compliance</h1>
          <p className="text-xs text-[#E8F5E9]/90 mt-1">ALKANET HOLDINGS (PTY) LTD • Last updated July 2026</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-[#1B5E20] text-slate-800 dark:text-[#E8F5E9] text-xs sm:text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Protection of Personal Information (POPIA)</h2>
          <p>
            ALKANET HOLDINGS (PTY) LTD is committed to protecting the privacy and personal information of our clients, suppliers, and website visitors in full accordance with the South African Protection of Personal Information Act 4 of 2013 (POPIA).
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Information Collection</h2>
          <p>
            When you request a quote, subscribe to updates, or contact our sales office, we collect information such as your name, corporate email address, phone number, company name, and project specifications.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Use of Information</h2>
          <p>
            Your information is used strictly to provide customized hand assembly and contract packaging estimates, manage customer accounts, deliver services, and comply with South African legal and statutory requirements.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Confidentiality & Non-Disclosure</h2>
          <p>
            We enforce strict Non-Disclosure Agreements (NDAs) for unreleased client products, proprietary artwork, and commercial tender documents processed at our assembly facilities.
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2 bg-[#1B5E20] dark:bg-[#66BB6A] hover:bg-[#144718] text-white font-bold rounded-lg border border-[#A5D6A7]/30"
            >
              Contact Information Officer
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
