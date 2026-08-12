import React, { useState } from 'react';
import { X, FileCode, Copy, CheckCircle2, Download, ExternalLink } from 'lucide-react';
import { SERVICES_LIST } from '../data/companyData';
import { BLOG_POSTS } from '../data/blogArticles';
import { NavigationPage } from '../types';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: NavigationPage, serviceSlug?: string, blogSlug?: string) => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'sitemap' | 'robots'>('visual');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const baseUrl = 'https://www.alkanet.co.za';

  const generateSitemapXml = () => {
    const urls = [
      { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
      { loc: `${baseUrl}/about`, priority: '0.8', changefreq: 'monthly' },
      { loc: `${baseUrl}/services`, priority: '0.9', changefreq: 'weekly' },
      { loc: `${baseUrl}/industries`, priority: '0.8', changefreq: 'monthly' },
      { loc: `${baseUrl}/gallery`, priority: '0.7', changefreq: 'weekly' },
      { loc: `${baseUrl}/faq`, priority: '0.7', changefreq: 'monthly' },
      { loc: `${baseUrl}/blog`, priority: '0.8', changefreq: 'daily' },
      { loc: `${baseUrl}/contact`, priority: '0.9', changefreq: 'monthly' },
      ...SERVICES_LIST.map((srv) => ({
        loc: `${baseUrl}/services/${srv.slug}`,
        priority: '0.85',
        changefreq: 'weekly'
      })),
      ...BLOG_POSTS.map((post) => ({
        loc: `${baseUrl}/blog/${post.slug}`,
        priority: '0.75',
        changefreq: 'monthly'
      }))
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    urls.forEach((u) => {
      xml += `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>\n`;
    });
    xml += `</urlset>`;
    return xml;
  };

  const generateRobotsTxt = () => {
    return `# ALKANET HOLDINGS (PTY) LTD - Robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/private/

Sitemap: https://www.alkanet.co.za/sitemap.xml
Host: https://www.alkanet.co.za
`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#1B5E20] rounded-2xl shadow-2xl border border-slate-200 dark:border-green-800 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative text-slate-900 dark:text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-green-950 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9] dark:bg-green-950 text-[#1B5E20] dark:text-[#A5D6A7] font-bold text-xs mb-1 border border-[#A5D6A7]/40">
            Technical SEO Architecture
          </div>
          <h2 className="text-2xl font-extrabold font-poppins text-slate-900 dark:text-white">
            XML Sitemap & Robots.txt
          </h2>
          <p className="text-xs text-slate-600 dark:text-[#E8F5E9]">
            Enterprise indexability for search engines (Google, Bing) across all ALKANET HOLDINGS service pages & blog posts.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 dark:border-green-800 mb-4 gap-2">
          <button
            onClick={() => setActiveTab('visual')}
            className={`py-2 px-4 font-bold text-xs border-b-2 transition-colors cursor-pointer ${
              activeTab === 'visual'
                ? 'border-[#66BB6A] text-[#1B5E20] dark:text-[#A5D6A7]'
                : 'border-transparent text-slate-500 dark:text-[#E8F5E9]/70'
            }`}
          >
            Visual Directory
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`py-2 px-4 font-bold text-xs border-b-2 transition-colors cursor-pointer ${
              activeTab === 'sitemap'
                ? 'border-[#66BB6A] text-[#1B5E20] dark:text-[#A5D6A7]'
                : 'border-transparent text-slate-500 dark:text-[#E8F5E9]/70'
            }`}
          >
            sitemap.xml Code
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`py-2 px-4 font-bold text-xs border-b-2 transition-colors cursor-pointer ${
              activeTab === 'robots'
                ? 'border-[#66BB6A] text-[#1B5E20] dark:text-[#A5D6A7]'
                : 'border-transparent text-slate-500 dark:text-[#E8F5E9]/70'
            }`}
          >
            robots.txt Code
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'visual' && (
          <div className="space-y-4 max-h-[400px] overflow-y-auto text-xs pr-2">
            <div>
              <h3 className="font-bold mb-2 uppercase tracking-wider text-[11px] text-[#1B5E20] dark:text-[#A5D6A7]">
                Core Site Pages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['home', 'about', 'services', 'industries', 'gallery', 'faq', 'blog', 'contact'].map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      onNavigate(p as NavigationPage);
                      onClose();
                    }}
                    className="p-2 bg-slate-50 dark:bg-green-950 rounded text-left hover:bg-[#E8F5E9] dark:hover:bg-green-900 capitalize font-medium text-slate-800 dark:text-[#E8F5E9] flex items-center justify-between cursor-pointer border border-slate-200 dark:border-green-800"
                  >
                    <span>{p}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 dark:text-green-300" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2 uppercase tracking-wider text-[11px] text-[#1B5E20] dark:text-[#A5D6A7]">
                Service Pages (10)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES_LIST.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => {
                      onNavigate('service-detail', srv.slug);
                      onClose();
                    }}
                    className="p-2 bg-slate-50 dark:bg-green-950 rounded text-left hover:bg-[#E8F5E9] dark:hover:bg-green-900 font-medium text-slate-800 dark:text-[#E8F5E9] flex items-center justify-between cursor-pointer border border-slate-200 dark:border-green-800"
                  >
                    <span>{srv.title}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 dark:text-green-300" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2 uppercase tracking-wider text-[11px] text-[#1B5E20] dark:text-[#A5D6A7]">
                SEO Blog Articles (10)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BLOG_POSTS.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => {
                      onNavigate('blog-post', undefined, post.slug);
                      onClose();
                    }}
                    className="p-2 bg-slate-50 dark:bg-green-950 rounded text-left hover:bg-[#E8F5E9] dark:hover:bg-green-900 font-medium text-slate-800 dark:text-[#E8F5E9] flex items-center justify-between cursor-pointer border border-slate-200 dark:border-green-800"
                  >
                    <span className="line-clamp-1">{post.title}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 dark:text-green-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sitemap' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-500 dark:text-slate-300">sitemap.xml (Google Search Console Compatible)</span>
              <button
                onClick={() => copyToClipboard(generateSitemapXml())}
                className="px-3 py-1.5 bg-[#1B5E20] dark:bg-[#66BB6A] text-white rounded text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-[#144718]"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy XML'}</span>
              </button>
            </div>
            <pre className="p-3 bg-slate-900 text-[#A5D6A7] text-[11px] rounded-lg max-h-80 overflow-y-auto font-mono whitespace-pre-wrap">
              {generateSitemapXml()}
            </pre>
          </div>
        )}

        {activeTab === 'robots' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-500 dark:text-slate-300">robots.txt</span>
              <button
                onClick={() => copyToClipboard(generateRobotsTxt())}
                className="px-3 py-1.5 bg-[#1B5E20] dark:bg-[#66BB6A] text-white rounded text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-[#144718]"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Robots.txt'}</span>
              </button>
            </div>
            <pre className="p-3 bg-slate-900 text-[#66BB6A] text-[11px] rounded-lg max-h-80 overflow-y-auto font-mono whitespace-pre-wrap">
              {generateRobotsTxt()}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
