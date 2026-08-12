import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightText?: boolean;
}

export const AlkanetLogo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  lightText = false
}) => {
  const sizeMap = {
    sm: { icon: 32, text: 'text-sm', sub: 'text-[9px]', tag: 'text-[7px]' },
    md: { icon: 44, text: 'text-lg', sub: 'text-[11px]', tag: 'text-[8px]' },
    lg: { icon: 60, text: 'text-2xl', sub: 'text-[13px]', tag: 'text-[10px]' },
    xl: { icon: 88, text: 'text-3xl', sub: 'text-[15px]', tag: 'text-[11px]' }
  };

  const dimensions = sizeMap[size];

  // SVG Icon representing the AH Diamond emblem from official logo
  const IconMark = (
    <svg
      width={dimensions.icon}
      height={dimensions.icon}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-sm transition-transform group-hover:scale-105 duration-200"
    >
      <defs>
        <linearGradient id="alkanetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5D6A7" />
          <stop offset="40%" stopColor="#66BB6A" />
          <stop offset="85%" stopColor="#1B5E20" />
          <stop offset="100%" stopColor="#0F3813" />
        </linearGradient>
        <linearGradient id="strokeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
      </defs>

      {/* Rotated Diamond Frame */}
      <rect
        x="42"
        y="42"
        width="116"
        height="116"
        rx="16"
        transform="rotate(45 100 100)"
        stroke="url(#strokeGrad)"
        strokeWidth="6"
        fill="none"
      />

      {/* Monogram A & H Stylized Script Lines */}
      {/* 'A' Stem & Cross Swoosh */}
      <path
        d="M 52 142 C 75 110, 95 62, 118 42 C 105 78, 92 115, 84 145 C 96 140, 108 130, 120 120"
        stroke="url(#alkanetGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* 'H' Right Stems & Swoosh */}
      <path
        d="M 102 145 C 114 110, 128 72, 142 50 C 132 80, 124 115, 118 145"
        stroke="url(#alkanetGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Horizontal Brand Arc / Swoosh across the monogram */}
      <path
        d="M 42 108 C 80 96, 126 94, 158 98 C 145 108, 122 118, 95 115"
        fill="url(#alkanetGrad)"
      />
      
      {/* Small Script Accent Dot */}
      <circle cx="140" cy="56" r="4" fill="url(#alkanetGrad)" />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center ${className}`}>{IconMark}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {IconMark}
      
      <div className="flex flex-col justify-center select-none">
        {/* Main Title ALKANET */}
        <span
          className={`font-serif tracking-widest font-extrabold uppercase leading-none bg-gradient-to-r from-[#66BB6A] via-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent ${dimensions.text}`}
          style={{ letterSpacing: '0.12em' }}
        >
          ALKANET
        </span>
        
        {/* Subtitle HOLDINGS */}
        <span
          className={`font-sans tracking-[0.3em] font-light uppercase leading-tight mt-0.5 ${
            lightText ? 'text-[#E8F5E9]' : 'text-[#1B5E20] dark:text-[#A5D6A7]'
          } ${dimensions.sub}`}
        >
          HOLDINGS
        </span>

        {/* Tagline MAPPING SOLUTIONS THROUGH INNOVATION */}
        {variant === 'full' && (
          <span
            className={`font-mono tracking-[0.2em] uppercase font-medium mt-0.5 ${
              lightText ? 'text-[#A5D6A7]/80' : 'text-slate-500 dark:text-[#E8F5E9]/70'
            } ${dimensions.tag}`}
          >
            MAPPING SOLUTIONS THROUGH INNOVATION
          </span>
        )}
      </div>
    </div>
  );
};
