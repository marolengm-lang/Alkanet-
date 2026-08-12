import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogArticles';
import { NavigationPage } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Search, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string, blogSlug?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Hand Assembly', 'Packaging', 'Kitting', 'Guide', 'Manufacturing', 'Retail', 'Marketing', 'Quality Control', 'Logistics', 'Sustainability'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <SeoHead
        title="Manufacturing, Assembly & Packaging Blog | ALKANET HOLDINGS South Africa"
        description="Expert articles on contract packaging, hand assembly strategies, e-commerce kitting, quality control, retail compliance, and sustainable packaging in South Africa."
        canonicalUrl="https://www.alkanet.co.za/blog"
      />

      <section className="bg-[#1B5E20] text-white py-16 sm:py-20 border-b border-[#A5D6A7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9]/20 text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/30">
            Industry Insights & SEO Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins tracking-tight">
            South African Packaging & Assembly Insights
          </h1>
          <p className="text-sm sm:text-base text-[#E8F5E9]/90 max-w-3xl leading-relaxed">
            In-depth guides, strategic insights, and best practices for contract packaging, product kitting, quality inspection, and supply chain efficiency across Pretoria, Johannesburg, and Gauteng.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-green-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Controls: Search + Categories */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search blog articles..."
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-green-950 border border-slate-200 dark:border-green-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#66BB6A]"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1B5E20] dark:bg-[#66BB6A] text-white'
                      : 'bg-white dark:bg-green-950 text-slate-700 dark:text-[#E8F5E9] border border-slate-200 dark:border-green-800 hover:bg-slate-100 dark:hover:bg-green-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onNavigate('blog-post', undefined, post.slug)}
                className="bg-white dark:bg-[#1B5E20] rounded-2xl border border-slate-200 dark:border-green-800 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1B5E20] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow border border-[#A5D6A7]/30">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 dark:text-[#E8F5E9]/70">
                      <span>{post.publishedDate}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-base font-bold font-poppins text-slate-900 dark:text-white group-hover:text-[#1B5E20] dark:group-hover:text-[#A5D6A7] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-xs text-slate-600 dark:text-[#E8F5E9]/90 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-green-800 flex items-center justify-between text-xs font-bold text-[#1B5E20] dark:text-[#A5D6A7]">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
