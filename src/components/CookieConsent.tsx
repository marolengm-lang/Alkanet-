import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

interface CookieConsentProps {
  onNavigatePrivacy: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onNavigatePrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('alkanet_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('alkanet_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 bg-[#0B2545] text-white p-4 rounded-xl shadow-2xl border border-slate-700 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
          <ShieldCheck className="w-4 h-4" />
          <span>POPIA & Cookie Privacy</span>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs text-slate-300 leading-relaxed mb-3">
        ALKANET HOLDINGS uses essential cookies to optimize user experience and analyze quote requests in compliance with South Africa’s Protection of Personal Information Act (POPIA).
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={acceptAll}
          className="px-4 py-1.5 bg-[#F57C00] hover:bg-[#e06c00] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
        >
          Accept All
        </button>
        <button
          onClick={onNavigatePrivacy}
          className="px-3 py-1.5 text-slate-300 hover:text-white text-xs underline cursor-pointer"
        >
          Privacy Policy
        </button>
      </div>
    </div>
  );
};
