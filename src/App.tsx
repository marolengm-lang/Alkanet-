import React, { useState, useEffect } from 'react';
import { NavigationPage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { SitemapModal } from './components/SitemapModal';
import { SearchModal } from './components/SearchModal';
import { ChatBot } from './components/ChatBot';
import { CookieConsent } from './components/CookieConsent';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { GalleryPage } from './pages/GalleryPage';
import { FaqPage } from './pages/FaqPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | undefined>();
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | undefined>();

  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();

  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [sitemapModalOpen, setSitemapModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Dark Mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('alkanet_theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('alkanet_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('alkanet_theme', 'light');
    }
  }, [darkMode]);

  // Handle URL hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      if (hash.startsWith('service-detail/')) {
        const slug = hash.replace('service-detail/', '');
        setSelectedServiceSlug(slug);
        setCurrentPage('service-detail');
      } else if (hash.startsWith('blog-post/')) {
        const slug = hash.replace('blog-post/', '');
        setSelectedBlogSlug(slug);
        setCurrentPage('blog-post');
      } else if ([
        'home', 'about', 'services', 'industries', 'gallery', 'faq', 'blog', 'contact', 'privacy', 'terms'
      ].includes(hash)) {
        setCurrentPage(hash as NavigationPage);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: NavigationPage, serviceSlug?: string, blogSlug?: string) => {
    setCurrentPage(page);
    setSelectedServiceSlug(serviceSlug);
    setSelectedBlogSlug(blogSlug);

    let hash = page as string;
    if (page === 'service-detail' && serviceSlug) {
      hash = `service-detail/${serviceSlug}`;
    } else if (page === 'blog-post' && blogSlug) {
      hash = `blog-post/${blogSlug}`;
    }

    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} onOpenQuoteModal={handleOpenQuoteModal} />;

      case 'about':
        return (
          <AboutPage
            onNavigate={navigateTo}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenProfileModal={() => setProfileModalOpen(true)}
          />
        );

      case 'services':
        return <ServicesPage onNavigate={navigateTo} onOpenQuoteModal={handleOpenQuoteModal} />;

      case 'service-detail':
        return (
          <ServiceDetailPage
            slug={selectedServiceSlug}
            onNavigate={navigateTo}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );

      case 'industries':
        return <IndustriesPage onNavigate={navigateTo} onOpenQuoteModal={handleOpenQuoteModal} />;

      case 'gallery':
        return <GalleryPage onNavigate={navigateTo} onOpenQuoteModal={handleOpenQuoteModal} />;

      case 'faq':
        return <FaqPage onNavigate={navigateTo} onOpenQuoteModal={handleOpenQuoteModal} />;

      case 'blog':
        return <BlogPage onNavigate={navigateTo} />;

      case 'blog-post':
        return (
          <BlogPostPage
            slug={selectedBlogSlug}
            onNavigate={navigateTo}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );

      case 'contact':
        return <ContactPage />;

      case 'privacy':
        return <PrivacyPolicyPage onNavigate={navigateTo} />;

      case 'terms':
        return <TermsPage onNavigate={navigateTo} />;

      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenSearch={() => setSearchModalOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Page Body */}
      <main className="flex-grow">{renderCurrentPage()}</main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenProfileModal={() => setProfileModalOpen(true)}
        onOpenSitemapModal={() => setSitemapModalOpen(true)}
      />

      {/* Global Modals & Utilities */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={preselectedService}
      />

      <CompanyProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />

      <SitemapModal
        isOpen={sitemapModalOpen}
        onClose={() => setSitemapModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={navigateTo}
      />

      <ChatBot onOpenQuoteModal={handleOpenQuoteModal} />

      <CookieConsent onNavigatePrivacy={() => navigateTo('privacy')} />
    </div>
  );
}
