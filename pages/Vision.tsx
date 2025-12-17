import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Leaf, TrendingDown, Users, Target, Zap, ShieldCheck, Award } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export const Vision: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-32">
      
      {/* Hero Vision */}
      <AnimatedSection className="text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-neon-500/20 to-transparent border border-neon-500/30 rounded-full mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
           <Recycle className="w-10 h-10 text-neon-500" />
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
          Orchestrating the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-emerald-600">Circular Future</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We are not just recycling batteries; we are building a strategic asset for national energy independence. Our vision creates a closed loop where "waste" ceases to exist.
        </p>
      </AnimatedSection>

      {/* Strategic Roadmap Timeline */}
      <AnimatedSection>
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Strategic Roadmap</h2>
            <div className="h-1 w-24 bg-neon-500 rounded-full"></div>
        </div>

        <div className="relative">
             {/* Timeline Line */}
             <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-industrial-800 md:-translate-x-1/2"></div>
             
             <div className="space-y-12">
                 {[
                     { 
                         year: "2024", 
                         title: "Validation Phase", 
                         desc: "Lab-scale optimization at IIIT Delhi. Batch processing of black mass and process chemistry refinement.",
                         status: "Current",
                         icon: Target
                     },
                     { 
                         year: "2025", 
                         title: "Pilot Facility", 
                         desc: "Establishment of semi-automated pilot line in New Delhi NCR. Target capacity: 100 tons/year.",
                         status: "Upcoming",
                         icon: Zap
                     },
                     { 
                         year: "2026", 
                         title: "Commercial Scale", 
                         desc: "Full-scale industrial plant deployment. Integration with automotive OEM supply chains.",
                         status: "Future",
                         icon: Factory
                     },
                     { 
                         year: "2028", 
                         title: "Global Ecosystem", 
                         desc: "Expansion of technology licensing and decentralized recycling hubs.",
                         status: "Vision",
                         icon: Globe
                     }
                 ].map((item, idx) => (
                     <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                         {/* Content */}
                         <div className="flex-1 md:text-right">
                             <div className={`bg-industrial-900 border ${item.status === 'Current' ? 'border-neon-500' : 'border-industrial-800'} p-6 rounded-2xl hover:bg-industrial-800 transition-colors`}>
                                 <div className="flex items-center gap-3 mb-2 md:justify-end">
                                     <span className="text-neon-500 font-mono font-bold text-lg">{item.year}</span>
                                     <span className={`text-xs px-2 py-1 rounded border ${item.status === 'Current' ? 'bg-neon-500/20 text-neon-400 border-neon-500/50' : 'bg-industrial-800 text-gray-500 border-industrial-700'}`}>
                                        {item.status}
                                     </span>
                                 </div>
                                 <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                 <p className="text-gray-400 text-sm">{item.desc}</p>
                             </div>
                         </div>
                         
                         {/* Icon Node */}
                         <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-industrial-950 border-4 border-industrial-800 flex items-center justify-center z-10">
                            <div className={`w-3 h-3 rounded-full ${item.status === 'Current' ? 'bg-neon-500 animate-pulse' : 'bg-gray-600'}`}></div>
                         </div>

                         {/* Empty Space for Grid */}
                         <div className="flex-1 hidden md:block"></div>
                     </div>
                 ))}
             </div>
        </div>
      </AnimatedSection>

      {/* Expanded Impact Stats */}
      <AnimatedSection className="bg-industrial-900 border-y border-industrial-800 py-16" fullWidth>
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-white text-center mb-12">Projected Impact at Scale</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-industrial-950 border border-industrial-800 rounded-xl">
                    <Leaf className="w-8 h-8 text-neon-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-1">-60%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">CO2 Footprint</div>
                </div>
                <div className="text-center p-6 bg-industrial-950 border border-industrial-800 rounded-xl">
                    <TrendingDown className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-1">0%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Landfill Waste</div>
                </div>
                <div className="text-center p-6 bg-industrial-950 border border-industrial-800 rounded-xl">
                    <Award className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Purity Grade</div>
                </div>
                <div className="text-center p-6 bg-industrial-950 border border-industrial-800 rounded-xl">
                    <ShieldCheck className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-1">Safety</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Inert Process</div>
                </div>
            </div>
        </div>
      </AnimatedSection>

      {/* About / Mission */}
      <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
           <div className="flex items-center gap-2 text-neon-500 mb-4">
               <Users size={20} />
               <span className="font-bold tracking-widest uppercase text-sm">Our DNA</span>
           </div>
           <h2 className="text-4xl font-display font-bold text-white mb-6">Born at IIIT Delhi</h2>
           <p className="text-gray-400 mb-6 text-lg leading-relaxed">
             LiCycle Intelligence is an engineering-first initiative incubated at the Indraprastha Institute of Information Technology, Delhi. We combine advanced chemical engineering with data science to solve the battery recycling efficiency problem.
           </p>
           <p className="text-gray-400 text-lg leading-relaxed">
             Frustrated by the inefficiency and opacity of current recycling methods, our team is building the infrastructure for a transparent, domestic, and sustainable battery economy in India.
           </p>
        </div>
        <div className="relative">
            <div className="aspect-square bg-industrial-800 rounded-2xl overflow-hidden relative group border border-industrial-700">
                {/* Visual Representation of Research */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f302e6d8359?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity hover:opacity-60 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 z-20">
                    <div className="text-white font-bold text-2xl mb-1">Research & Innovation</div>
                    <div className="text-neon-400 text-sm font-mono">LAB_ID: IIITD_CHEM_ENG</div>
                </div>
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
import { Factory, Globe } from 'lucide-react'; // Ensure these imports are present
