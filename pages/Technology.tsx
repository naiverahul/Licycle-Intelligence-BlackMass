import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cpu, Scan, Layers, Settings, ShieldCheck, Database,
  Thermometer, Wifi, Cloud, BarChart3, Battery, Activity,
} from 'lucide-react';
import { SEO, organizationSchema } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { CTASection } from '../components/CTASection';

const TECH_STACK = [
  { icon: Activity, title: 'SOH Estimation', desc: 'Proprietary ML models achieving 95%+ accuracy in state-of-health prediction using voltage profiles, impedance data, and usage history.' },
  { icon: Scan, title: 'AI Diagnostics', desc: 'Automated cell-level assessment identifying optimal routing between second-life BESS deployment and material recovery.' },
  { icon: Layers, title: 'Battery Grading', desc: 'Tier-based classification (A/B/C) using capacity, balance, thermal history, and safety metrics for deployment decisions.' },
  { icon: Thermometer, title: 'Thermal Monitoring', desc: 'Real-time thermal profiling with anomaly detection and automated isolation for thermal runaway prevention.' },
  { icon: Settings, title: 'Predictive Maintenance', desc: 'ML-driven failure prediction enabling proactive maintenance before cell degradation impacts system performance.' },
  { icon: Wifi, title: 'IoT Integration', desc: 'Sensor networks streaming BMS data, temperature, voltage, and current to VoltX Cloud Analytics in real time.' },
  { icon: Battery, title: 'Smart BMS Systems', desc: 'Intelligent battery management with adaptive charge/discharge optimization for extended second-life performance.' },
  { icon: Cloud, title: 'Cloud Analytics', desc: 'Fleet-wide dashboard with SOH distributions, energy throughput, deployment status, and environmental impact metrics.' },
  { icon: BarChart3, title: 'Energy Optimization', desc: 'AI dispatch algorithms optimizing charge/discharge cycles based on grid signals, tariffs, and battery health.' },
];

export const Technology: React.FC = () => {
  return (
    <>
      <SEO
        title="AI Battery Intelligence Technology Platform"
        description="VoltX technology stack: SOH estimation, AI diagnostics, battery grading, thermal monitoring, IoT integration, BMS systems, cloud analytics, and smart energy optimization."
        keywords={['AI battery diagnostics', 'SOH estimation', 'battery grading', 'BMS systems', 'battery cloud analytics', 'VoltX technology']}
        canonical="/technology"
        schema={organizationSchema}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-24 space-y-32"
      >
        <header className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-electric-400 text-sm font-bold uppercase tracking-widest mb-4 block">Technology Platform</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            AI-Powered Battery <br />
            <span className="text-gradient-electric">Intelligence System</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From SOH estimation to cloud analytics — the full-stack technology platform managing every stage of the battery lifecycle.
          </p>
        </header>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-industrial-800/50 p-6 rounded-xl border border-industrial-700 card-hover group"
              >
                <div className="w-11 h-11 bg-industrial-900 rounded-lg flex items-center justify-center mb-4 text-electric-400 group-hover:bg-electric-500/10 transition-colors">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Architecture Diagram */}
        <AnimatedSection fullWidth className="bg-industrial-900/50 py-24 border-y border-industrial-800">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-white text-center mb-12">Platform Architecture</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  layer: 'Edge Layer',
                  color: 'border-electric-500/30 bg-electric-500/5',
                  items: ['IoT Sensors', 'BMS Integration', 'Thermal Monitors', 'Cell Voltage Arrays'],
                },
                {
                  layer: 'Intelligence Layer',
                  color: 'border-purple-500/30 bg-purple-500/5',
                  items: ['SOH Estimation ML', 'Anomaly Detection', 'Grading Engine', 'Predictive Models'],
                },
                {
                  layer: 'Cloud Layer',
                  color: 'border-neon-500/30 bg-neon-500/5',
                  items: ['Fleet Dashboard', 'Energy Optimization', 'Partner API', 'ESG Reporting'],
                },
              ].map((layer) => (
                <div key={layer.layer} className={`border rounded-2xl p-6 ${layer.color}`}>
                  <h3 className="text-white font-bold mb-4 text-center">{layer.layer}</h3>
                  <div className="space-y-2">
                    {layer.items.map((item) => (
                      <div key={item} className="bg-industrial-950/80 border border-industrial-700 rounded-lg px-4 py-2.5 text-sm text-gray-300 text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-500 text-sm flex items-center gap-2"
              >
                Edge → Intelligence → Cloud → Action
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Black Mass Process */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Producing Consistent Black Mass</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                The industry bottleneck isn't recycling — it's recycling <em>well</em>. Inconsistent black mass is difficult for refiners to process. Our sensor-driven technology solves this with 98%+ cathode material recovery.
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="space-y-6"
              >
                {[
                  { title: 'Input Agnostic', desc: 'Handles NMC, LFP, and LCO chemistries.' },
                  { title: 'Mechanical Separation', desc: 'Efficient removal of copper, aluminum, and plastics.' },
                  { title: 'Strategic Black Mass', desc: '98%+ recovery of active cathode materials.' },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    className="relative pl-8 border-l-2 border-industrial-700"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: 'spring' }}
                      className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${i === 2 ? 'bg-white shadow-[0_0_10px_#0ea5e9]' : 'bg-electric-500'}`}
                    />
                    <h4 className="text-white font-bold">{step.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              <Link to="/lithium-ion-battery-recycling" className="inline-block mt-6 text-electric-400 text-sm font-medium hover:underline">
                Learn about our recycling process →
              </Link>
            </div>

            <div className="bg-black rounded-2xl border border-industrial-700 p-8 relative overflow-hidden min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]" />
              <div className="relative z-10 w-56 h-56 border-2 border-dashed border-industrial-600 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-2 border border-industrial-700 rounded-full"
                />
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-4xl font-bold text-white"
                  >
                    98.5%
                  </motion.div>
                  <div className="text-xs text-electric-400 font-mono uppercase tracking-widest">Recovery Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <CTASection
          title="See Our Technology in Action"
          subtitle="Request a pilot project to experience VoltX AI diagnostics and battery lifecycle management firsthand."
          primaryLabel="Request Pilot Project"
          primaryLink="/contact?type=pilot"
          secondaryLabel="Partner With Us"
          secondaryLink="/contact?type=partnership"
        />
      </motion.div>
    </>
  );
};
