import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, organizationSchema, faqSchema } from './SEO';
import { FAQ } from './FAQ';
import { CTASection } from './CTASection';
import { AnimatedSection } from './AnimatedSection';
import { SEOPageData } from '../types';

interface Props {
  data: SEOPageData;
}

export const SEOPageLayout: React.FC<Props> = ({ data }) => (
  <>
    <SEO
      title={data.title.replace(' | VoltX Resources', '')}
      description={data.metaDescription}
      keywords={data.keywords}
      canonical={`/${data.slug}`}
      schema={[organizationSchema, faqSchema(data.faqs)]}
    />

    <article className="pt-32 pb-24">
      <header className="max-w-4xl mx-auto px-6 text-center mb-16">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-electric-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">{data.heroTitle}</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{data.heroTitle}</h1>
        <p className="text-xl text-gray-400 leading-relaxed">{data.heroSubtitle}</p>
      </header>

      <div className="max-w-3xl mx-auto px-6 space-y-12 mb-20">
        {data.sections.map((section, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.1}>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">{section.heading}</h2>
              <p className="text-gray-400 leading-relaxed text-lg">{section.content}</p>
            </section>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="max-w-3xl mx-auto px-6 mb-20">
        <div className="bg-industrial-900 border border-industrial-700 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-white mb-6 text-center">VoltX Lifecycle Flow</h3>
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
            {['Collection', 'AI Diagnostics', 'Second-Life BESS', 'Material Recovery', 'Remanufacturing'].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1.5 bg-electric-500/10 text-electric-400 border border-electric-500/20 rounded-lg">{step}</span>
                {i < arr.length - 1 && <span className="text-gray-600">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-3xl mx-auto px-6 mb-20">
        <FAQ faqs={data.faqs} />
      </AnimatedSection>

      <CTASection />
    </article>
  </>
);
