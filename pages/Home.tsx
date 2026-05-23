import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Battery, RefreshCw, Zap, Factory, ChevronRight,
  Cpu, Scan, Layers, ShieldCheck, Database, Settings,
  Leaf, TrendingDown, Award, Users, Target, Globe,
  Building2, Truck, Sun, BarChart3, Recycle, AlertTriangle,
} from 'lucide-react';
import { SEO, organizationSchema } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { HeroVisual } from '../components/HeroVisual';
import { MetricCounter } from '../components/MetricCounter';
import { CTASection } from '../components/CTASection';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="AI-Powered Battery Intelligence & Recycling"
        description="VoltX Resources builds India's circular battery economy — EV battery repurposing, AI diagnostics, second-life BESS, and lithium-ion battery recycling with 98%+ material recovery."
        keywords={[
          'VoltX', 'Voltx Resources', 'lithium ion battery recycling', 'EV battery recycling India',
          'second life batteries', 'battery energy storage system', 'BESS India', 'battery repurposing',
          'black mass recycling', 'AI battery diagnostics', 'battery circular economy',
        ]}
        canonical="/"
        schema={organizationSchema}
      />

      {/* 1. Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/8 rounded-full blur-3xl animate-pulse-slow" />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-500/8 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-neon-500 animate-pulse" />
                Validation Stage · Pilot Active
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]"
              >
                Giving EV Batteries{' '}
                <span className="text-gradient-electric">a Second Life</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed"
              >
                AI-powered battery intelligence, second-life BESS, and advanced lithium-ion recycling — building India's circular battery economy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link to="/contact?type=partnership" className="group px-8 py-4 bg-electric-500 text-white font-bold rounded-lg hover:bg-electric-400 transition-all glow-blue flex items-center gap-2">
                  Partner With Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact?type=pilot" className="px-8 py-4 border border-industrial-600 text-white font-medium rounded-lg hover:border-electric-500/50 transition-all">
                  Request Pilot Project
                </Link>
                <Link to="/technology" className="px-8 py-4 text-gray-400 font-medium hover:text-white transition-all flex items-center gap-1">
                  Explore Technology <ChevronRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex items-center gap-8"
              >
                <div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, type: 'spring' }}
                    className="text-3xl font-bold text-white"
                  >
                    <MetricCounter value={98.5} suffix="%" decimals={1} />
                  </motion.div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Recovery Rate</div>
                </div>
                <div className="w-px h-10 bg-industrial-700" />
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9, type: 'spring' }}
                    className="text-3xl font-bold text-white"
                  >
                    <MetricCounter value={500} suffix="%" />
                  </motion.div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Battery Waste Growth by 2030</div>
                </motion.div>
              </motion.div>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      {/* 2. Problem Statement */}
      <AnimatedSection id="problem" className="py-24">
        <div className="text-center mb-16">
          <span className="text-red-400 text-sm font-bold uppercase tracking-widest mb-4 block">The Challenge</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            The Critical Material <span className="text-red-500">Gap</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            The rapid growth of EV production is creating a dual crisis: a massive surge in battery waste and a critical shortage of raw materials like lithium, cobalt, and nickel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: AlertTriangle, stat: '500%', label: 'Projected increase in battery waste by 2030', color: 'text-red-400' },
            { icon: Globe, stat: '70%', label: 'Of global cobalt mined in high-risk regions', color: 'text-amber-400' },
            { icon: TrendingDown, stat: '40%', label: 'Supply deficit vs demand for critical minerals', color: 'text-electric-400' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-industrial-800/50 border border-industrial-700 rounded-2xl p-8 card-hover"
            >
              <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-4xl font-bold text-white mb-2"
              >
                {item.stat}
              </motion.div>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-industrial-900 border border-industrial-800 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-300">
            <strong className="text-white">Strategic Necessity:</strong> Recycling is not just waste management — it is the only viable path to a sustainable domestic supply chain.
          </p>
        </div>
      </AnimatedSection>

      {/* 3. VoltX Solution */}
      <AnimatedSection id="solution" fullWidth className="py-24 bg-industrial-900/50 border-y border-industrial-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-electric-400 text-sm font-bold uppercase tracking-widest mb-4 block">Our Solution</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              The VoltX <span className="text-gradient-electric">Ecosystem</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              An integrated AI-powered platform managing the complete battery lifecycle — from collection to second-life deployment to material recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Scan, title: 'AI Diagnostics', desc: 'SOH estimation, cell grading, and intelligent lifecycle routing for every battery pack.', link: '/ai-battery-diagnostics' },
              { icon: Battery, title: 'Second-Life BESS', desc: 'Deploy graded batteries in modular energy storage systems for grid and commercial use.', link: '/second-life-batteries' },
              { icon: Factory, title: 'Black Mass Recovery', desc: '98%+ recovery of cathode materials through sensor-driven recycling processes.', link: '/lithium-ion-battery-recycling' },
              { icon: RefreshCw, title: 'Circular Loop', desc: 'Closed-loop material flow returning battery-grade precursors to manufacturing.', link: '/battery-circular-economy' },
            ].map((item, idx) => (
              <Link key={idx} to={item.link} className="group">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-industrial-800 border border-industrial-700 rounded-2xl p-6 h-full card-hover"
                >
                  <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-electric-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-electric-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Battery Lifecycle Flow */}
      <AnimatedSection className="py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Battery Lifecycle Flow</h2>
          <p className="text-gray-400">Every battery follows an intelligent, optimized path through our ecosystem</p>
        </div>
        <div className="bg-industrial-800/50 border border-industrial-700 rounded-2xl p-8 md:p-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center"
          >
            {[
              { icon: Truck, label: 'EV Battery', sub: 'Collection' },
              { icon: Cpu, label: 'AI Diagnostics', sub: 'Grading & SOH' },
              { icon: Zap, label: 'Second-Life BESS', sub: 'Energy Storage' },
              { icon: Factory, label: 'Black Mass', sub: 'Recovery' },
              { icon: Battery, label: 'New Batteries', sub: 'Remanufacturing' },
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-xl bg-industrial-900 border border-industrial-700 flex items-center justify-center mb-4 group-hover:border-electric-500/50 group-hover:bg-electric-500/5 transition-colors">
                    <step.icon className="w-7 h-7 text-gray-400 group-hover:text-electric-400 transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold mb-1 text-sm">{step.label}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{step.sub}</p>
                </motion.div>
                {idx < 4 && (
                  <div className="hidden md:flex justify-center text-gray-600">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3], x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: idx * 0.4 }}>
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* 5. AI Technology */}
      <AnimatedSection fullWidth className="py-24 bg-industrial-900/50 border-y border-industrial-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-purple-400 text-sm font-bold uppercase tracking-widest mb-4 block">AI Technology</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Battery Intelligence Platform
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Machine learning models analyze every battery's health profile to determine optimal lifecycle routing — maximizing value at every stage.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['SOH Estimation', 'Cell Grading', 'Thermal Monitoring', 'Predictive Maintenance', 'IoT Integration', 'Cloud Analytics'].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-500" />
                    {tech}
                  </div>
                ))}
              </div>
              <Link to="/technology" className="inline-flex items-center gap-2 mt-8 text-electric-400 font-medium hover:gap-3 transition-all">
                Explore full technology stack <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Cpu, title: 'AI Diagnostics', desc: '95%+ SOH accuracy' },
                { icon: Database, title: 'Cloud Analytics', desc: 'Real-time fleet data' },
                { icon: Settings, title: 'Smart BMS', desc: 'Intelligent management' },
                { icon: ShieldCheck, title: 'Safety Systems', desc: 'Thermal runaway prevention' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="bg-industrial-800 border border-industrial-700 rounded-xl p-5 card-hover"
                >
                  <item.icon className="w-6 h-6 text-electric-400 mb-3" />
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* 6. Second-Life BESS */}
      <AnimatedSection className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-industrial-900 border border-industrial-700 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.08),transparent_60%)]" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative space-y-4"
              >
                {[
                  { label: 'System Capacity', value: '500 kWh', status: 'Online' },
                  { label: 'Battery SOH', value: '76.2%', status: 'Grade A' },
                  { label: 'Energy Stored Today', value: '847 kWh', status: '+12%' },
                  { label: 'Cost vs New BESS', value: '-42%', status: 'Savings' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between bg-industrial-950/80 border border-industrial-700 rounded-lg px-4 py-3">
                    <span className="text-gray-400 text-sm">{row.label}</span>
                    <div className="text-right">
                      <span className="text-white font-bold">{row.value}</span>
                      <span className="text-neon-400 text-xs ml-2">{row.status}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-neon-400 text-sm font-bold uppercase tracking-widest mb-4 block">Second-Life BESS</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Intelligent Energy Storage from Retired EV Batteries
            </h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              Retired EV batteries retain 70–80% capacity. VoltX deploys AI-graded packs in modular BESS systems — delivering 30–50% cost savings vs new batteries for solar firming, peak shaving, and grid services.
            </p>
            <Link to="/battery-energy-storage-system" className="inline-flex items-center gap-2 text-electric-400 font-medium hover:gap-3 transition-all">
              Learn about BESS solutions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* 7. Sustainability Impact Metrics */}
      <AnimatedSection id="impact" fullWidth className="py-24 bg-industrial-900/50 border-y border-industrial-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-neon-400 text-sm font-bold uppercase tracking-widest mb-4 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Sustainability at Scale</h2>
            <p className="text-gray-400">Projected impact metrics at commercial scale deployment</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Battery, value: 10000, suffix: '+', label: 'Batteries Repurposed', prefix: '' },
              { icon: Leaf, value: 60, suffix: '%', label: 'CO₂ Emissions Reduced', prefix: '-' },
              { icon: Recycle, value: 5000, suffix: 't', label: 'E-Waste Prevented', prefix: '' },
              { icon: Zap, value: 50, suffix: ' MWh', label: 'Energy Stored', prefix: '' },
              { icon: RefreshCw, value: 10, suffix: ' yrs', label: 'Lifecycle Extension', prefix: '+' },
              { icon: Award, value: 98, suffix: '%', label: 'Material Recovery', prefix: '' },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-industrial-950 border border-industrial-800 rounded-xl p-5 text-center card-hover"
              >
                <metric.icon className="w-6 h-6 text-electric-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {metric.prefix}<MetricCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className="text-xs text-gray-500 uppercase tracking-wider"
                >
                  {metric.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 8. Use Cases */}
      <AnimatedSection className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Use Cases</h2>
          <p className="text-gray-400">Powering India's energy transition across sectors</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Sun, title: 'Solar + Storage', desc: 'Hybrid renewable installations with second-life BESS for 24/7 clean power.' },
            { icon: Building2, title: 'Commercial Peak Shaving', desc: 'Reduce demand charges for manufacturing and commercial facilities.' },
            { icon: Truck, title: 'EV Fleet Management', desc: 'End-to-end battery lifecycle management for electric fleet operators.' },
            { icon: BarChart3, title: 'Grid Ancillary Services', desc: 'Frequency regulation and demand response for utility partners.' },
            { icon: Factory, title: 'OEM Partnerships', desc: 'Turnkey battery collection, diagnostics, and recovery for manufacturers.' },
            { icon: Globe, title: 'Microgrid Backup', desc: 'Reliable backup power for remote and critical infrastructure.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-industrial-800/50 border border-industrial-700 rounded-xl p-6 card-hover"
            >
              <item.icon className="w-7 h-7 text-electric-400 mb-4" />
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* 9. Recycling Infrastructure Vision */}
      <AnimatedSection fullWidth className="py-24 bg-industrial-900/50 border-y border-industrial-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-4 block">Infrastructure Vision</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Building India's Battery Recycling Infrastructure
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                From lab-scale validation at IIIT Delhi to commercial-scale facilities — VoltX is building the industrial infrastructure India needs for battery sustainability.
              </p>
              <div className="space-y-4">
                {[
                  { year: '2026', title: 'Validation Phase', desc: 'Pilot operations & AI platform at IIIT Delhi', active: true },
                  { year: '2027', title: 'Pilot Facility', desc: '1,000 tons/year semi-automated line in NCR', active: false },
                  { year: '2028', title: 'Commercial Scale', desc: '5,000 tons/year with OEM integration', active: false },
                  { year: '2030', title: 'National Network', desc: 'Decentralized recycling & BESS hubs', active: false },
                ].map((phase) => (
                  <div key={phase.year} className={`flex gap-4 p-4 rounded-xl border ${phase.active ? 'border-electric-500/50 bg-electric-500/5' : 'border-industrial-700 bg-industrial-800/30'}`}>
                    <span className={`font-mono font-bold text-sm ${phase.active ? 'text-electric-400' : 'text-gray-500'}`}>{phase.year}</span>
                    <div>
                      <h4 className="text-white font-bold text-sm">{phase.title}</h4>
                      <p className="text-gray-500 text-xs">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black rounded-2xl border border-industrial-700 p-8 flex items-center justify-center relative overflow-hidden min-h-[320px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]" />
              <div className="relative z-10 text-center">
                <div className="text-6xl font-bold text-white mb-2"><MetricCounter value={98} suffix=".5%" /></div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-electric-400 font-mono text-sm uppercase tracking-widest"
                >
                  Material Recovery Target
                </motion.div>
                <p className="text-gray-500 text-sm mt-4 max-w-xs mx-auto">High-purity black mass compatible with battery-grade precursor manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 10. Trust & Credibility */}
      <AnimatedSection className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Built on Research & Innovation</h2>
          <p className="text-gray-400">Engineering-first approach incubated at IIIT Delhi</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: '₹1 Lakh Award', desc: 'Delhi Startup Yuva Festival — Ideation Stage winner' },
            { icon: Target, title: 'Pilot Active', desc: 'Validation-stage operations with live battery processing' },
            { icon: Users, title: 'IIIT Delhi', desc: 'Incubated at Indraprastha Institute of Information Technology' },
            { icon: Layers, title: 'Prototype Ready', desc: 'Lab-scale black mass processing & AI diagnostics platform' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-industrial-800/50 border border-industrial-700 rounded-xl p-6 text-center card-hover"
            >
              <item.icon className="w-8 h-8 text-electric-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* 11. Team / Founder Credibility */}
      <AnimatedSection fullWidth className="py-24 bg-industrial-900/50 border-y border-industrial-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-electric-400 text-sm font-bold uppercase tracking-widest mb-4 block">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Born at IIIT Delhi</h2>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                VoltX Resources is an engineering-first climate-tech startup combining advanced chemical engineering with AI and data science. Our team is building the infrastructure for a transparent, domestic, and sustainable battery economy in India.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Frustrated by the inefficiency of current recycling methods, we're creating an integrated platform that treats every battery as a strategic asset — not waste.
              </p>
            </div>
            <div className="aspect-video bg-industrial-800 rounded-2xl overflow-hidden relative border border-industrial-700">
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-electric-500/10 via-industrial-900 to-neon-500/10"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-white font-bold text-2xl mb-2">Research & Innovation</div>
                  <div className="text-electric-400 text-sm font-mono">LAB · IIITD · NEW DELHI</div>
                  <div className="mt-6 flex justify-center gap-4">
                    {['Chemical Engineering', 'AI/ML', 'Energy Systems'].map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-industrial-900 border border-industrial-700 rounded-full text-gray-400">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 12. Final CTA */}
      <CTASection
        title="Join India's Battery Circular Economy"
        subtitle="Whether you're an investor, OEM, fleet operator, or energy company — let's build sustainable battery infrastructure together."
      />
    </>
  );
};
