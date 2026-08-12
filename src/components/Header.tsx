import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Search,
  Sun,
  Moon,
  FileText,
  Wrench,
  Package,
  Settings,
  Box,
  Layers,
  Tag,
  CheckCircle2,
  Gift,
  Users,
  Download,
  ArrowRight
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_LIST, INDUSTRIES_LIST } from '../data/companyData';
import { NavigationPage } from '../types';
import { AlkanetLogo } from './Logo';

interface HeaderProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage, serviceSlug?: string, blogSlug?: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
  onOpenProfileModal: () => void;
  onOpenSitemapModal: () => void;
  onOpenSearch: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
  onOpenProfileModal,
  onOpenSitemapModal,
  onOpenSearch,
  darkMode,
  onToggleDarkMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Wrench': return <Wrench className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
      case 'Package': return <Package className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
      case 'Settings': return <Settings className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
      case 'Box': return <Box className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
      case 'FileText': return <FileText className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
      case 'Layers': return <Layers className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
      case 'Tag': return <Tag className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
      case 'Gift': return <Gift className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
      case 'Users': return <Users className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
      default: return <Package className="w-4 h-4 text-[#0D530E] dark:text-[#E7E1B1]" />;
    }
  };

  const navItems = [
    { label: 'Home', page: 'home' as NavigationPage },
    { label: 'About', page: 'about' as NavigationPage },
    { label: 'Services', page: 'services' as NavigationPage, hasDropdown: true },
    { label: 'Industries', page: 'industries' as NavigationPage, hasDropdown: true },
    { label: 'Gallery', page: 'gallery' as NavigationPage },
    { label: 'FAQ', page: 'faq' as NavigationPage },
    { label: 'Blog', page: 'blog' as NavigationPage },
    { label: 'Contact', page: 'contact' as NavigationPage },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#0D530E] text-white text-xs py-2 px-4 border-b border-[#083709]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
              className="flex items-center gap-1.5 hover:text-[#E7E1B1] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E7E1B1]" />
              <span className="font-medium">{COMPANY_DETAILS.phones[0].display}</span>
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.phones[1].raw}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#E7E1B1] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E7E1B1]" />
              <span>{COMPANY_DETAILS.phones[1].display}</span>
            </a>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-1.5 hover:text-[#E7E1B1] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E7E1B1]" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-[#FBF5DD]/90">
              <MapPin className="w-3.5 h-3.5 text-[#E7E1B1]" />
              <span>Pretoria | Johannesburg | Gauteng Nationwide</span>
            </div>
          </div>

          {/* Quick Actions / Utilities */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-[#FBF5DD]/90">
              <Clock className="w-3.5 h-3.5 text-[#E7E1B1]" />
              <span>Mon-Fri: 07:30 - 17:00</span>
            </div>
            <button
              onClick={onOpenProfileModal}
              className="flex items-center gap-1 text-[#E7E1B1] hover:text-white font-medium transition-colors cursor-pointer"
            >
              <Download className="w-3 h-3" />
              <span>Company Profile</span>
            </button>
            <button
              onClick={onOpenSitemapModal}
              className="text-[#FBF5DD]/70 hover:text-white text-[11px] underline hidden md:inline cursor-pointer"
            >
              SEO Sitemap
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          darkMode
            ? 'bg-[#0D530E]/95 text-white border-green-950'
            : 'bg-white/95 text-slate-900 border-slate-200'
        } backdrop-blur-md ${isScrolled ? 'shadow-lg py-2.5' : 'py-4'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-left group cursor-pointer"
          >
            <AlkanetLogo variant="full" size="md" lightText={darkMode} />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (item.label === 'Services') setServicesDropdownOpen(true);
                  if (item.label === 'Industries') setIndustriesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.label === 'Services') setServicesDropdownOpen(false);
                  if (item.label === 'Industries') setIndustriesDropdownOpen(false);
                }}
              >
                <button
                  onClick={() => onNavigate(item.page)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                    currentPage === item.page
                      ? 'text-[#0D530E] dark:text-[#E7E1B1] font-bold bg-[#FBF5DD] dark:bg-slate-800/80'
                      : darkMode
                      ? 'text-slate-200 hover:text-[#E7E1B1] hover:bg-slate-800/40'
                      : 'text-slate-700 hover:text-[#0D530E] hover:bg-[#FBF5DD]/60'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                </button>

                {/* Services Mega Menu */}
                {item.label === 'Services' && servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-[640px] bg-white dark:bg-[#0D530E] shadow-2xl rounded-xl border border-slate-200 dark:border-[#306D29] p-4 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="col-span-2 pb-2 mb-2 border-b border-slate-100 dark:border-[#306D29] flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400 dark:text-[#E7E1B1] uppercase tracking-wider">
                        Hand Assembly & Packaging Solutions
                      </span>
                      <button
                        onClick={() => onNavigate('services')}
                        className="text-xs text-[#0D530E] dark:text-[#E7E1B1] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        View All Services <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    {SERVICES_LIST.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onNavigate('service-detail', srv.slug);
                        }}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FBF5DD] dark:hover:bg-[#306D29]/40 text-left transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-md bg-[#FBF5DD] dark:bg-green-900/60 group-hover:bg-[#0D530E] group-hover:text-white transition-colors border border-[#E7E1B1]/40">
                          {getServiceIcon(srv.iconName)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#0D530E] dark:group-hover:text-[#E7E1B1] transition-colors">
                            {srv.title}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-300 line-clamp-1">
                            {srv.shortDesc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Industries Dropdown */}
                {item.label === 'Industries' && industriesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white dark:bg-[#0D530E] shadow-2xl rounded-xl border border-slate-200 dark:border-[#306D29] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="pb-2 mb-2 border-b border-slate-100 dark:border-[#306D29] flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400 dark:text-[#E7E1B1] uppercase tracking-wider">
                        Key Target Sectors
                      </span>
                    </div>
                    {INDUSTRIES_LIST.map((ind) => (
                      <button
                        key={ind.id}
                        onClick={() => {
                          setIndustriesDropdownOpen(false);
                          onNavigate('industries');
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-[#FBF5DD] dark:hover:bg-[#306D29]/50 text-xs font-medium text-slate-800 dark:text-slate-100 hover:text-[#0D530E] dark:hover:text-[#E7E1B1] flex items-center justify-between cursor-pointer"
                      >
                        <span>{ind.name}</span>
                        <ChevronDown className="w-3 h-3 -rotate-90 opacity-40" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Search Services & Knowledge Base"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Toggle Dark / Light Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-[#E7E1B1]" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Get Free Quote Primary Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#306D29] hover:bg-[#275921] text-[#FBF5DD] font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer border border-[#E7E1B1]/40"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-[#FBF5DD]" />
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-[#306D29] bg-white dark:bg-[#0D530E] px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-2 px-3 rounded-md font-semibold text-base flex justify-between items-center ${
                    currentPage === item.page
                      ? 'bg-[#FBF5DD] dark:bg-[#306D29]/60 text-[#0D530E] dark:text-[#E7E1B1]'
                      : 'text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}

            <div className="pt-3 border-t border-slate-100 dark:border-[#306D29] flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenQuoteModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-lg bg-[#306D29] hover:bg-[#275921] text-[#FBF5DD] font-bold text-center shadow-md cursor-pointer border border-[#E7E1B1]/30"
              >
                Request Free Quote
              </button>
              <button
                onClick={() => {
                  onOpenProfileModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-lg border border-slate-300 dark:border-green-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#306D29] dark:text-[#E7E1B1]" />
                <span>Download Company Profile (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
