import { useEffect } from 'react';
import { SITE } from '../data/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
};

const setLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description = SITE.description,
  keywords = [],
  canonical,
  ogType = 'website',
  ogImage = `${SITE.url}/og-image.png`,
  noindex = false,
  schema,
}) => {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`;
  const url = canonical ? `${SITE.url}${canonical}` : SITE.url;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('description', description);
    setMeta('keywords', keywords.join(', '));
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setLink('canonical', url);

    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('og:site_name', SITE.name, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    const existing = document.getElementById('json-ld');
    if (existing) existing.remove();

  }, [fullTitle, description, keywords, url, ogType, ogImage, noindex]);

  useEffect(() => {
    if (!schema) return;
    const script = document.createElement('script');
    script.id = 'json-ld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(Array.isArray(schema) ? schema : [schema]);
    document.head.appendChild(script);
    return () => script.remove();
  }, [schema]);

  return null;
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/favicon.svg`,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressCountry: 'IN',
  },
  sameAs: [SITE.social.linkedin, SITE.social.twitter],
  foundingLocation: 'IIIT Delhi, India',
  knowsAbout: [
    'Lithium-ion battery recycling',
    'Second-life batteries',
    'Battery Energy Storage Systems',
    'AI battery diagnostics',
    'Black mass processing',
    'Circular economy',
  ],
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export const articleSchema = (post: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  author: { '@type': 'Organization', name: post.author },
  datePublished: post.date,
  publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.svg` } },
  mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
});
