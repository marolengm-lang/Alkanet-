export type NavigationPage = 
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'industries'
  | 'gallery'
  | 'faq'
  | 'blog'
  | 'blog-post'
  | 'contact'
  | 'privacy'
  | 'terms'
  | '404';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  seoTitle: string;
  metaDescription: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  popularIndustries: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  useCases: string[];
  keyBenefits: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Full 800-1200 word markdown/rich text
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  image: string;
  tags: string[];
  seoTitle: string;
  metaDescription: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'assembly' | 'packaging' | 'kitting' | 'quality' | 'labour' | 'boxes';
  categoryLabel: string;
  image: string;
  description: string;
  clientType: string;
  beforeAfter?: {
    beforeText: string;
    afterText: string;
    beforeImage: string;
    afterImage: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  image?: string;
  serviceUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing & Quotes' | 'Quality & Turnaround' | 'Location & Logistics' | 'Labour Outsourcing';
}

export interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceRequired: string;
  estimatedQuantity: string;
  deadline: string;
  location: string;
  message: string;
  fileName?: string;
}
