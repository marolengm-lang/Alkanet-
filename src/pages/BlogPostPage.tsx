import React from 'react';
import { BLOG_POSTS } from '../data/blogArticles';
import { NavigationPage } from '../types';
import { SeoHead } from '../components/SeoHead';
import { ArrowLeft, Clock, Share2, Tag, CheckCircle2, Phone, Mail } from 'lucide-react';

interface BlogPostPageProps {
  slug?: string;
  onNavigate: (page: NavigationPage, serviceSlug?: string, blogSlug?: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  slug,
  onNavigate,
  onOpenQuoteModal
}) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  const [copied, setCopied] = React.useState(false);

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'ALKANET HOLDINGS (PTY) LTD'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ALKANET HOLDINGS (PTY) LTD',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.alkanet.co.za/logo.png'
      }
    },
    description: post.metaDescription
  };

  return (
    <>
      <SeoHead
        title={post.seoTitle}
        description={post.metaDescription}
        canonicalUrl={`https://www.alkanet.co.za/blog/${post.slug}`}
        ogImage={post.image}
        type="article"
        jsonLdSchemas={[articleSchema]}
      />

      {/* Hero Header */}
      <section className="bg-[#1B5E20] text-white py-14 sm:py-20 border-b border-[#A5D6A7]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-1.5 text-xs text-[#A5D6A7] font-bold hover:underline mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Knowledge Base</span>
          </button>

          <div className="flex items-center gap-3 text-xs text-[#E8F5E9]/90">
            <span className="px-2.5 py-1 rounded bg-[#1B5E20] dark:bg-[#66BB6A] font-bold text-white uppercase text-[10px] border border-[#A5D6A7]/30">
              {post.category}
            </span>
            <span>{post.publishedDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#A5D6A7]" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold font-poppins leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-t border-[#A5D6A7]/30 pt-4 text-xs text-[#E8F5E9]">
            <span>By {post.author}</span>
            <button
              onClick={shareArticle}
              className={`px-3 py-1.5 rounded-lg text-white font-semibold flex items-center gap-1.5 cursor-pointer transition-colors ${
                copied ? 'bg-[#66BB6A]' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" /> Link Copied!
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" /> Share Article
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Article Content Container */}
      <section className="py-14 bg-white dark:bg-[#1B5E20]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-lg border border-slate-200 dark:border-green-800"
          />

          {/* Article Text */}
          <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-[#E8F5E9] text-sm sm:text-base leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={idx} className="text-2xl font-bold font-poppins text-slate-900 dark:text-white pt-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-xl font-bold font-poppins text-slate-900 dark:text-white pt-4 border-b border-slate-200 dark:border-green-800 pb-2">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg font-bold font-poppins text-slate-900 dark:text-white pt-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return <p key={idx} className="text-slate-700 dark:text-[#E8F5E9]">{paragraph}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-200 dark:border-green-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-[#E8F5E9]/80 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {post.tags.map((t, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-slate-100 dark:bg-green-950 text-slate-700 dark:text-[#E8F5E9] text-xs border border-slate-200 dark:border-green-800">
                {t}
              </span>
            ))}
          </div>

          {/* Inline Quote Banner */}
          <div className="p-8 bg-[#1B5E20] text-white rounded-2xl shadow-xl space-y-4 text-center border border-[#A5D6A7]/30">
            <h3 className="text-xl font-bold font-poppins">
              Need Outsourced Assembly or Packaging Support in Gauteng?
            </h3>
            <p className="text-xs sm:text-sm text-[#E8F5E9]/90 max-w-xl mx-auto">
              ALKANET HOLDINGS serves Pretoria, Johannesburg, and nationwide with zero-defect quality control and 24-48 hr turnaround capability.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-6 py-3 bg-[#66BB6A] hover:bg-[#57a95b] text-white font-extrabold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer border border-white/20"
              >
                Get Free Custom Quote
              </button>
              <a
                href="tel:27718854474"
                className="px-6 py-3 bg-white text-[#1B5E20] font-bold text-xs sm:text-sm rounded-xl hover:bg-[#E8F5E9] transition-colors cursor-pointer"
              >
                Call Sales: 071 885 4474
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
