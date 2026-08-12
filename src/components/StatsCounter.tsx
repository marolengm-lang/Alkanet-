import React from 'react';
import { KEY_STATS } from '../data/companyData';
import { ShieldCheck, Award, Clock, Users } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  return (
    <div className="bg-[#1B5E20] text-white py-12 border-y border-[#144718]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {KEY_STATS.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-[#66BB6A] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#E8F5E9]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
