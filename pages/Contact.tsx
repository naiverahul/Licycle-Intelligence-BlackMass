import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Phone, Building2, Handshake, FlaskConical, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { InquiryForm } from '../components/InquiryForm';
import { SITE } from '../data/siteConfig';
import { InquiryType } from '../types';

const FORM_TABS: { type: InquiryType; label: string; icon: React.ElementType }[] = [
  { type: 'partnership', label: 'Partnership', icon: Handshake },
  { type: 'investor', label: 'Investor', icon: TrendingUp },
  { type: 'oem', label: 'OEM Collaboration', icon: Building2 },
  { type: 'pilot', label: 'Pilot Project', icon: FlaskConical },
];

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialType = (searchParams.get('type') as InquiryType) || 'partnership';
  const [activeType, setActiveType] = useState<InquiryType>(
    FORM_TABS.some((t) => t.type === initialType) ? initialType : 'partnership'
  );

  return (
    <>
      <SEO
        title="Contact & Partnership Inquiries"
        description="Partner with VoltX Resources for EV battery recycling, second-life BESS, AI diagnostics, and circular economy infrastructure in India."
        keywords={['contact VoltX', 'battery recycling partnership', 'BESS pilot project', 'investor inquiry']}
        canonical="/contact"
      />

      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  Let's Build Together
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Whether you're a battery manufacturer, EV fleet operator, energy company, or investor — we want to build India's circular battery economy with you.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Mail, title: 'Email', content: SITE.emails.map((e) => (<a key={e} href={`mailto:${e}`} className="block text-gray-400 hover:text-white transition-colors">{e}</a>)) },
                  { icon: Phone, title: 'Phone', content: <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white transition-colors">{SITE.phone}</a> },
                  { icon: MapPin, title: 'Location', content: <span className="text-gray-400">{SITE.location}</span> },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="bg-industrial-800 p-3 rounded-lg text-electric-400 shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-electric-500/5 border border-electric-500/20 rounded-xl">
                <h4 className="text-white font-bold mb-2">Pilot Program Open</h4>
                <p className="text-sm text-gray-400">We are accepting limited battery batches for validation processing and BESS pilot deployments.</p>
              </div>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap gap-2 mb-6">
                {FORM_TABS.map((tab) => (
                  <button
                    key={tab.type}
                    onClick={() => setActiveType(tab.type)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeType === tab.type
                        ? 'bg-electric-500 text-white'
                        : 'bg-industrial-800 text-gray-400 border border-industrial-700 hover:text-white'
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
