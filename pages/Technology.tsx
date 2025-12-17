import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Scan, Layers, Settings, ShieldCheck, Database } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export const Technology: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-32">
       {/* Intro */}
       <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Intelligent Material <br />
          <span className="text-neon-500">Recovery System</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Our solution is data-driven. We prioritize purity and consistency to enable true closed-loop battery manufacturing.
        </p>
      </div>

      {/* Tech Overview Grid */}
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "Sensor-Driven Monitoring",
              desc: "Real-time process feedback loops to adjust shredding and separation parameters dynamically."
            },
            {
              icon: Scan,
              title: "Automated Disassembly",
              desc: "Robotic assisted dismantling systems to safely handle various pack chemistries and form factors."
            },
            {
              icon: Database,
              title: "Data-Guided Optimization",
              desc: "Historical processing data informs yield improvements and predictive maintenance."
            },
            {
              icon: Layers,
              title: "High-Purity Output",
              desc: "Multi-stage hydro-metallurgical refinement ensuring battery-grade precursor materials."
            },
            {
              icon: ShieldCheck,
              title: "Safety First",
              desc: "Inert atmosphere shredding to neutralize thermal runaway risks during processing."
            },
            {
              icon: Settings,
              title: "Scalable Architecture",
              desc: "Modular plant design allows for rapid capacity expansion closer to waste sources."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-industrial-800 p-8 rounded-xl border border-industrial-700 hover:border-neon-500/40 transition-all group"
            >
              <div className="w-12 h-12 bg-industrial-900 rounded-lg flex items-center justify-center mb-6 text-neon-500 group-hover:bg-neon-500 group-hover:text-black transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Process Visualization - The "Solution" */}
      <AnimatedSection fullWidth className="bg-industrial-900 py-24 border-y border-industrial-800">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                   <h2 className="text-3xl font-display font-bold text-white mb-6">Producing Consistent Black Mass</h2>
                   <p className="text-gray-400 mb-8">
                     The industry bottleneck isn't just recycling—it's recycling <em>well</em>. Inconsistent black mass (the refined powder containing Li, Co, Ni) is difficult for refiners to process. Our tech solves this.
                   </p>
                   
                   <div className="space-y-8">
                      <div className="relative pl-8 border-l-2 border-industrial-700">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-500"></div>
                        <h4 className="text-white font-bold text-lg">Input Agnostic</h4>
                        <p className="text-sm text-gray-500 mt-1">Handles NMC, LFP, and LCO chemistries.</p>
                      </div>
                      <div className="relative pl-8 border-l-2 border-industrial-700">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-500"></div>
                        <h4 className="text-white font-bold text-lg">Mechanical Separation</h4>
                        <p className="text-sm text-gray-500 mt-1">Efficient removal of copper, aluminum, and plastics.</p>
                      </div>
                      <div className="relative pl-8 border-l-2 border-neon-500">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white shadow-[0_0_10px_#10b981]"></div>
                        <h4 className="text-white font-bold text-lg">Strategic Black Mass</h4>
                        <p className="text-sm text-gray-500 mt-1">98%+ recovery of active cathode materials.</p>
                      </div>
                   </div>
                </div>
                
                {/* Interactive Graphic */}
                <div className="bg-black rounded-2xl border border-industrial-700 p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
                    
                    <div className="relative z-10 w-64 h-64 border-2 border-dashed border-industrial-600 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                        <div className="w-48 h-48 border border-industrial-500 rounded-full flex items-center justify-center">
                            <div className="w-32 h-32 bg-neon-500/20 rounded-full blur-xl absolute"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">99%</div>
                                <div className="text-xs text-neon-400 font-mono">PURITY GOAL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
