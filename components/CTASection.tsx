import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface Props {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryLink?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
}

export const CTASection: React.FC<Props> = ({
  title = 'Ready to Build the Circular Battery Economy?',
  subtitle = 'Partner with VoltX Resources for AI-powered battery lifecycle management, second-life BESS, and advanced recycling infrastructure.',
  primaryLabel = 'Partner With Us',
  primaryLink = '/contact?type=partnership',
  secondaryLabel = 'Request Pilot Project',
  secondaryLink = '/contact?type=pilot',
}) => (
  <AnimatedSection fullWidth className="py-24">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 text-center"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative bg-gradient-to-br from-industrial-800 to-industrial-900 border border-industrial-700 rounded-3xl p-12 md:p-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryLink}
              className="group px-8 py-4 bg-electric-500 text-white font-bold rounded-lg hover:bg-electric-400 transition-all glow-blue flex items-center gap-2"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={secondaryLink}
              className="px-8 py-4 border border-industrial-600 text-white font-medium rounded-lg hover:border-electric-500/50 transition-all"
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </AnimatedSection>
);
