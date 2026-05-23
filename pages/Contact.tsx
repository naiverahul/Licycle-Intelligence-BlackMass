import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Phone, Building2, Handshake, FlaskConical, TrendingUp, Leaf, Microscope } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { InquiryForm } from '../components/InquiryForm';
import { PartnerSection } from '../components/PartnerSection';
import { SITE } from '../data/siteConfig';
import { InquiryType } from '../types';

const FORM_TABS: { type: InquiryType; label: string; icon: React.ElementType }[] = [
  { type: 'csr', label: 'CSR & Sustainability', icon: Leaf },
  { type: 'partnership', label: 'Partnership', icon: Handshake },
  { type: 'oem', label: 'OEM Collaboration', icon: Building2 },
  { type: 'pilot', label: 'Pilot Deployment', icon: FlaskConical },
  { type: 'research', label: 'Research', icon: Microscope },
  { type: 'investor', label: 'Investor', icon: TrendingUp },
];

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialType = (searchParams.get('type') as InquiryType) || 'csr';
  const [activeType, setActiveType] = useState<InquiryType>(
    FORM_TABS.some((t) => t.type === initialType) ? initialType : 'csr'
  );

  return (
    <>
      <SEO
        title="Partner With VoltX Resources | CSR, ESG & Sustainability Collaborations"
        description="Partner with VoltX Resources for CSR initiatives, ESG-aligned sustainability collaborations, EV ecosystem partnerships, BESS pilot deployments, and climate-tech research in India."
        keywords={[
          'CSR battery partnership', 'ESG sustainability collaboration', 'VoltX partner',
          'circular economy partnership', 'BESS pilot deployment', 'climate-tech funding India',
          'battery recycling CSR', 'sustainability infrastructure partnership',
        ]}
        canonical="/contact"
      />

      <PartnerSection showContactFormAnchor withNavOffset />

      <div id="contact-form" className="pb-24 bg-industrial-950">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Start a Conversation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tell us about your sustainability goals, ESG initiatives, or collaboration interests. Our team responds within 24–48 hours.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-5">
                {[
                  { icon: Mail, title: 'Email', content: SITE.emails.map((e) => (<a key={e} href={`mailto:${e}`} className="block text-gray-400 hover:text-white transition-colors">{e}</a>)) },
                  { icon: Phone, title: 'Phone', content: <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white transition-colors">{SITE.phone}</a> },
                  { icon: MapPin, title: 'Location', content: <span className="text-gray-400">{SITE.location}</span> },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="bg-industrial-800/60 backdrop-blur p-3 rounded-lg text-electric-400 shrink-0 border border-industrial-700/50">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-neon-500/5 border border-neon-500/20 rounded-xl backdrop-blur-sm">
                <h4 className="text-white font-bold mb-2">Pilot Deployment Open</h4>
                <p className="text-sm text-gray-400">
                  Accepting limited partnerships for BESS pilot deployments, CSR-aligned battery waste reduction programs, and research collaborations.
                </p>
              </div>
            </div>

            <AnimatedSection delay={0.2} className="lg:col-span-3">
              <div className="flex flex-wrap gap-2 mb-6">
                {FORM_TABS.map((tab) => (
                  <button
                    key={tab.type}
                    onClick={() => setActiveType(tab.type)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      activeType === tab.type
                        ? 'bg-electric-500 text-white'
                        : 'bg-industrial-800/60 text-gray-400 border border-industrial-700 hover:text-white'
                    }`}
                  >
                    <tab.icon size={14} />
                    {tab.label}
                  </button>
                ))}
              </div>
              <InquiryForm type={activeType} />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  );
};
