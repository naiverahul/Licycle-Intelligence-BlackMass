export interface NavItem {
  path: string;
  label: string;
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  subtext: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOPageData {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  sections: { heading: string; content: string }[];
  faqs: FAQItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Battery Recycling' | 'Energy Storage' | 'AI in Batteries' | 'Sustainability' | 'Circular Economy';
  author: string;
  date: string;
  readTime: string;
  content: string[];
  keywords: string[];
}

export type InquiryType = 'partnership' | 'investor' | 'oem' | 'pilot' | 'general';
