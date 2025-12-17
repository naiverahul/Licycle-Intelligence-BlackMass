import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Battery, RefreshCw, Zap, Factory, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface Props {
  setPage: (page: any) => void;
}

export const Home: React.FC<Props> = ({ setPage }) => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-500/10 border border-neon-500/20 text-neon-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neon-500 animate-pulse"></span>
            Validation Stage: Pilot Operations Active
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Circular Battery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Manufacturing from Waste</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Transforming end-of-life Li-ion batteries into high-purity, battery-grade materials through intelligent, low-carbon recycling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => setPage('contact')}
              className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded overflow-hidden hover:bg-neon-400 transition-all"
            >
              Partner With Us
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setPage('technology')}
              className="px-8 py-4 bg-transparent border border-gray-700 text-white font-medium text-lg rounded hover:border-white transition-all"
            >
              View Technology
            </button>
          </motion.div>
        </div>
      </section>

      {/* Visual Process Flow */}
      <AnimatedSection className="py-12">
        <div className="bg-industrial-800/50 border border-industrial-700 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10">
            {[
              { icon: Battery, label: "Used Batteries", sub: "Collection" },
              { icon: RefreshCw, label: "Intelligent Recycling", sub: "Processing" },
              { icon: Factory, label: "Black Mass", sub: "Recovery" },
              { icon: Zap, label: "Refined Materials", sub: "Purification" },
              { icon: Battery, label: "New Batteries", sub: "Manufacturing" }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-xl bg-industrial-900 border border-industrial-700 flex items-center justify-center mb-4 group-hover:border-neon-500/50 group-hover:bg-neon-900/10 transition-colors shadow-lg shadow-black/50">
                    <step.icon className="w-8 h-8 text-gray-400 group-hover:text-neon-500 transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{step.label}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{step.sub}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:flex justify-center text-gray-600">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3], x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.4 }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                )}
                {/* Mobile Connector */}
                {idx < 4 && (
                   <div className="md:hidden flex justify-center py-2 text-gray-600 rotate-90">
                    <ChevronRight className="w-6 h-6" />
                   </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};