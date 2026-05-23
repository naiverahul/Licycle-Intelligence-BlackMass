import React from 'react';
import { SEO_PAGES } from '../data/seoPages';
import { SEOPageLayout } from '../components/SEOPageLayout';

interface Props {
  slug: string;
}

export const SEOPage: React.FC<Props> = ({ slug }) => {
  const data = SEO_PAGES[slug];
  if (!data) return <div className="pt-32 text-center text-white">Page not found</div>;
  return <SEOPageLayout data={data} />;
};
