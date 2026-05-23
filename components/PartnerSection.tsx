import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Leaf, Car, Zap, FlaskConical, Battery, RefreshCw, Recycle,
  Cpu, ShieldCheck, TrendingUp, Globe, Sparkles, Building2, Mail,
} from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { MetricCounter } from './MetricCounter';
import { PARTNERSHIP_CATEGORIES, ESG_IMPACT_METRICS, TRUST_PILLARS } from '../data/partnerships';

const ICON_MAP = { Leaf, Car, Zap, FlaskConical, Battery, RefreshCw, Recycle, Cpu, ShieldCheck, TrendingUp, Globe, Sparkles, Building2 };

interface Props {
  showContactFormAnchor?: boolean;
  withNavOffset?: boolean;
}

export const PartnerSection: React.FC<Props> = ({ showContactFormAnchor = false, withNavOffset = false }) => {
  return (
    <section id="partners" aria-labelledby="partners-heading" className="relative overflow-hidden">
      {/* Ambient background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-neon-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className={`relative max-w-7xl mx-auto px-6 py-24 md:py-32 ${withNavOffset ? 'pt-32' : ''}`}>
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-sm font-medium mb-6">
              <Sparkles size={14} />
              Strategic Partnerships · ESG · Climate Impact
            </span>
            <h2 id="partners-heading" className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Build India&apos;s Circular Battery{' '}
              <span className="text-gradient-electric">Future With Us</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join us in transforming retired EV batteries into intelligent energy infrastructure while reducing battery waste and accelerating India&apos;s clean energy transition.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Partnership category cards */}
        <AnimatedSection className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERSHIP_CATEGORIES.map((card, idx) => {
              const Icon = ICON_MAP[card.icon as keyof typeof ICON_MAP];
              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`group relative bg-industrial-900/40 backdrop-blur-xl border border-industrial-700/60 rounded-2xl p-8 transition-all duration-300 ${card.glow}`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-tr-2xl"
                  />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-industrial-800/80 border border-industrial-600 flex items-center justify-center mb-5 ${card.accent}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{card.description}</p>
                    <ul className="space-y-2 mb-6">
                      {card.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="w-1 h-1 rounded-full mt-2 shrink-0 bg-electric-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      className="flex flex-wrap gap-3"
                    >
                      <Link
                        to={`/contact?type=${card.inquiryType}`}
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold bg-industrial-800/80 border border-industrial-600 text-white hover:border-electric-500/50 transition-all group/btn`}
                      >
                        {card.ctaPrimary}
                        <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                      {card.ctaSecondary && (
                        <Link
                          to={`/contact?type=${card.inquiryType}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-neon-400 transition-colors"
                        >
                          {card.ctaSecondary}
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </AnimatedSection>

        {/* ESG Impact Metrics */}
        <AnimatedSection fullWidth className="mb-24 py-16 bg-industrial-900/30 border-y border-industrial-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-neon-400 text-sm font-bold uppercase tracking-widest mb-3 block">Environmental Impact</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                Measurable ESG & Climate Impact
              </h3>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
                Trackable outcomes for sustainability reporting, CSR initiatives, and climate impact disclosures.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {ESG_IMPACT_METRICS.map((metric, idx) => {
                const Icon = ICON_MAP[metric.icon as keyof typeof ICON_MAP];
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="relative bg-industrial-950/60 backdrop-blur-sm border border-industrial-700/50 rounded-xl p-5 text-center group glow-green"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-neon-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-5 h-5 text-electric-400 mx-auto mb-3 relative z-10" />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 + 0.2, type: 'spring' }}
                      className="text-2xl md:text-3xl font-bold text-white mb-1 relative z-10"
                    >
                      {metric.prefix}<MetricCounter value={metric.value} suffix={metric.suffix} />
                    </motion.div>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider leading-tight relative z-10">{metric.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Trust pillars */}
        <AnimatedSection className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              High-Impact Sustainability Infrastructure
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              VoltX Resources is an AI-powered clean energy company building scalable battery waste reduction solutions for India&apos;s circular economy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TRUST_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-industrial-800/30 backdrop-blur-md border border-industrial-700/40 rounded-xl p-5 text-center"
              >
                <ShieldCheck className="w-5 h-5 text-electric-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold text-sm mb-1.5">{pillar.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Premium CTA Banner */}
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative bg-gradient-to-br from-industrial-800/80 to-industrial-900/80 backdrop-blur-xl border border-industrial-600/50 rounded-3xl p-10 md:p-14 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.12),transparent_60%)]" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative z-10 text-center"
            >
              <Building2 className="w-8 h-8 text-electric-400 mx-auto mb-5" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Interested in building sustainable battery infrastructure together?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Partner with a climate-tech startup delivering real environmental impact through circular economy initiatives, clean energy adoption, and responsible battery lifecycle management.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact?type=partnership"
                  className="group px-6 py-3.5 bg-electric-500 text-white font-bold rounded-lg hover:bg-electric-400 transition-all glow-blue flex items-center gap-2 text-sm"
                >
                  Partner With VoltX
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/contact?type=csr"
                  className="px-6 py-3.5 bg-neon-500/10 border border-neon-500/30 text-neon-400 font-semibold rounded-lg hover:bg-neon-500/20 transition-all text-sm"
                >
                  Explore CSR Collaboration
                </Link>
                <Link
                  to="/contact?type=pilot"
                  className="px-6 py-3.5 bg-industrial-800/80 border border-industrial-600 text-white font-medium rounded-lg hover:border-electric-500/50 transition-all text-sm"
                >
                  Discuss Pilot Deployment
                </Link>
                <Link
                  to={showContactFormAnchor ? '#contact-form' : '/contact'}
                  className="px-6 py-3.5 text-gray-400 font-medium rounded-lg hover:text-white transition-all flex items-center gap-2 text-sm"
                >
                  <Mail size={16} />
                  Contact Our Team
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
