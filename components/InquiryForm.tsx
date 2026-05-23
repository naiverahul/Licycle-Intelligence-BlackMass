import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { InquiryType } from '../types';

interface Props {
  type?: InquiryType;
  compact?: boolean;
}

const TYPE_LABELS: Record<InquiryType, string> = {
  partnership: 'Partnership Inquiry',
  investor: 'Investor Inquiry',
  oem: 'OEM Collaboration',
  pilot: 'Pilot Project Request',
  csr: 'CSR & Sustainability Collaboration',
  research: 'Research & Innovation Partnership',
  general: 'General Inquiry',
};

export const InquiryForm: React.FC<Props> = ({ type = 'general', compact = false }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-industrial-800/50 p-8 rounded-2xl border border-neon-500/30 text-center"
      >
        <CheckCircle className="w-12 h-12 text-neon-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Inquiry Received</h3>
        <p className="text-gray-400">Our team will respond within 24–48 hours.</p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-industrial-800/50 rounded-2xl border border-industrial-700 space-y-5 ${compact ? 'p-6' : 'p-8'}`}
      aria-label={TYPE_LABELS[type]}
    >
      {!compact && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h3 className="text-xl font-bold text-white mb-1">{TYPE_LABELS[type]}</h3>
          <p className="text-sm text-gray-500">Fill out the form and our team will get back to you.</p>
        </motion.div>
      )}

      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div className="space-y-1.5">
          <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
          <input id="firstName" name="firstName" required type="text" className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500/50 transition-colors" placeholder="Jane" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
          <input id="lastName" name="lastName" required type="text" className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500/50 transition-colors" placeholder="Doe" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
        <input id="email" name="email" required type="email" className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500/50 transition-colors" placeholder="jane@company.com" />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="company" className="text-sm font-medium text-gray-300">Company</label>
        <input id="company" name="company" type="text" className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500/50 transition-colors" placeholder="Your organization" />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="orgType" className="text-sm font-medium text-gray-300">Organization Type</label>
        <select id="orgType" name="orgType" defaultValue={
          type === 'investor' ? 'Investor'
          : type === 'oem' ? 'Automotive OEM'
          : type === 'csr' ? 'Other'
          : type === 'research' ? 'Research Institution'
          : ''
        } className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-electric-500 focus:outline-none transition-colors">
          <option value="">Select type</option>
          <option>Investor</option>
          <option>CSR / Sustainability Team</option>
          <option>Battery Manufacturer</option>
          <option>Automotive OEM</option>
          <option>EV Fleet Operator</option>
          <option>Energy Company</option>
          <option>Recycling Partner</option>
          <option>Research Institution</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
        <textarea id="message" name="message" required rows={compact ? 3 : 4} className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500/50 transition-colors resize-none" placeholder="Tell us about your project or partnership interest..." />
      </div>

      <button type="submit" className="w-full bg-electric-500 hover:bg-electric-400 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 glow-blue">
        Submit Inquiry <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};
