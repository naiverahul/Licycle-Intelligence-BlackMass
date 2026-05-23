import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface Props {
  faqs: FAQItem[];
  title?: string;
}

export const FAQ: React.FC<Props> = ({ faqs, title = 'Frequently Asked Questions' }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-3xl font-display font-bold text-white mb-8 text-center">{title}</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="space-y-3 max-w-3xl mx-auto"
      >
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="bg-industrial-800/50 border border-industrial-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left"
              aria-expanded={open === idx}
            >
              <span className="text-white font-medium pr-4">{faq.question}</span>
              <motion.div animate={{ rotate: open === idx ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="text-electric-400 shrink-0" size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {open === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="px-5 pb-5 text-gray-400 leading-relaxed text-sm">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
