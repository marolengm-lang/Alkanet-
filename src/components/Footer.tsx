import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Shield,
  FileCode,
  ArrowUp,
  Download,
  Building2,
  Globe
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/companyData';
import { NavigationPage } from '../types';
import { AlkanetLogo } from './Logo';

interface FooterProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string) => void;
  onOpenQuoteModal: () => void;
  onOpenProfileModal: () => void;
  onOpenSitemapModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenProfileModal,
  onOpenSitemapModal
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D530E] text-[#FBF5DD] pt-16 pb-8 border-t-4 border-[#306D29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#083709]">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <AlkanetLogo variant="full" size="lg" lightText={true} />
            </div>

            <p className="text-xs sm:text-sm text-[#FBF5DD]/90 leading-relaxed">
              {COMPANY_DETAILS.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-md bg-[#083709]/80 border border-[#306D29] text-xs font-semibold text-[#E7E1B1] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#E7E1B1]" />
                <span>B-BBEE Compliant</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-[#083709]/80 border border-[#306D29] text-xs font-semibold text-[#E7E1B1] flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#E7E1B1]" />
                <span>Pretoria • Johannesburg • Gauteng</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                Subscribe to Manufacturing & Packaging Updates
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your corporate email..."
                  required
                  className="px-3 py-2 bg-[#083709] border border-[#306D29] rounded-lg text-xs text-white placeholder-green-200/60 focus:outline-none focus:border-[#E7E1B1] flex-grow"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#306D29] hover:bg-[#275921] text-[#FBF5DD] text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer border border-[#E7E1B1]/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
              {newsletterSubscribed && (
                <p className="text-xs text-[#E7E1B1] flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Thank you! You are subscribed.
                </p>
              )}
            </div>
          </div>

          {/* Col 2: Services Menu */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E7E1B1] pl-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs text-[#FBF5DD]/90">
              {SERVICES_LIST.slice(0, 8).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate('service-detail', srv.slug)}
                    className="hover:text-[#E7E1B1] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#E7E1B1] font-bold">•</span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#E7E1B1] font-bold hover:underline pt-1 inline-block cursor-pointer"
                >
                  View All 10 Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E7E1B1] pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-[#FBF5DD]/90">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#E7E1B1] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#E7E1B1] transition-colors cursor-pointer">
                  Company Story & Mission
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-[#E7E1B1] transition-colors cursor-pointer">
                  Industries We Support
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-[#E7E1B1] transition-colors cursor-pointer">
                  Project Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-[#E7E1B1] transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-[#E7E1B1] transition-colors cursor-pointer">
                  Industry Knowledge Blog (10 Articles)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#E7E1B1] transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={onOpenProfileModal} className="text-[#E7E1B1] font-semibold hover:underline flex items-center gap-1 cursor-pointer">
                  <Download className="w-3 h-3" />
                  <span>Download Company Profile</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3 text-xs">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E7E1B1] pl-2">
              Contact & Hours
            </h3>
            <div className="space-y-2.5">
              <a
                href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
                className="flex items-start gap-2 text-[#FBF5DD]/90 hover:text-[#E7E1B1] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E7E1B1] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{COMPANY_DETAILS.phones[0].display}</div>
                  <div className="text-[10px] text-[#E7E1B1]">Main Office / WhatsApp</div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phones[1].raw}`}
                className="flex items-start gap-2 text-[#FBF5DD]/90 hover:text-[#E7E1B1] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E7E1B1] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{COMPANY_DETAILS.phones[1].display}</div>
                  <div className="text-[10px] text-[#E7E1B1]">Direct Sales Line</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2 text-[#FBF5DD]/90 hover:text-[#E7E1B1] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E7E1B1] shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>

              <div className="flex items-start gap-2 text-[#FBF5DD]/90">
                <MapPin className="w-4 h-4 text-[#E7E1B1] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>

              <div className="flex items-start gap-2 text-[#FBF5DD]/90 pt-1">
                <Clock className="w-4 h-4 text-[#E7E1B1] shrink-0 mt-0.5" />
                <div>
                  <div>{COMPANY_DETAILS.businessHours.weekdays}</div>
                  <div>{COMPANY_DETAILS.businessHours.saturday}</div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full mt-3 py-2.5 rounded-lg bg-[#306D29] hover:bg-[#275921] text-[#FBF5DD] font-bold text-xs text-center shadow-md transition-colors cursor-pointer border border-[#E7E1B1]/30"
            >
              Request Free Quote Now
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E7E1B1]">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">ALKANET HOLDINGS (PTY) LTD</strong>. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={onOpenSitemapModal}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5 text-[#E7E1B1]" />
              <span>XML Sitemap & Robots.txt</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#083709] hover:bg-[#306D29] text-white transition-colors cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
