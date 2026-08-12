import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { NavigationPage } from '../types';
import { PackageX, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SeoHead
        title="404 Page Not Found | ALKANET HOLDINGS (PTY) LTD"
        description="The requested page could not be located on ALKANET HOLDINGS website."
        noindex={true}
      />

      <section className="py-24 bg-white dark:bg-[#1B5E20] text-center">
        <div className="max-w-md mx-auto px-4 space-y-4">
          <PackageX className="w-16 h-16 text-[#66BB6A] mx-auto" />
          <h1 className="text-4xl font-extrabold font-poppins text-slate-900 dark:text-white">
            404 - Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-[#E8F5E9]">
            The page or article you were looking for does not exist or has been relocated.
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 bg-[#1B5E20] dark:bg-[#66BB6A] hover:bg-[#144718] text-white font-bold text-xs rounded-xl shadow cursor-pointer inline-flex items-center gap-2 border border-[#A5D6A7]/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home Page</span>
          </button>
        </div>
      </section>
    </>
  );
};
