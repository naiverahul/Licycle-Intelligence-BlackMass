import React from 'react';
import { AlertTriangle, Pickaxe, Droplets, Globe, TrendingUp, XCircle, Flame, BatteryWarning } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';

export const Challenge: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          The Linear Economy <br />
          <span className="text-red-500">Is Failing</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          The current "take-make-dispose" model for batteries is economically inefficient and environmentally disastrous. We are entering a critical supply gap.
        </p>
      </div>

      {/* The Supply Gap Infographic */}
      <AnimatedSection>
        <div className="bg-industrial-900 border border-industrial-800 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <div className="flex items-center gap-2 mb-4 text-neon-500">
                      <TrendingUp size={20} />
                      <span className="font-bold tracking-widest text-sm uppercase">Market Projection 2030</span>
                   </div>
                   <h2 className="text-3xl font-bold text-white mb-6">The Supply-Demand Fracture</h2>
                   <p className="text-gray-400 mb-8">
                     By 2030, the global demand for Lithium and Cobalt will exceed mining capacity by over 40%. Recycling is not optional—it is the only way to bridge the gap.
                   </p>
                   
                   <div className="space-y-6">
                      <div className="bg-industrial-800 p-4 rounded-lg">
                         <div className="flex justify-between text-white font-bold mb-2">
                            <span>Lithium Demand</span>
                            <span className="text-red-400">+500% Growth</span>
                         </div>
                         <div className="w-full bg-industrial-950 h-3 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              transition={{ duration: 1.5 }}
                              className="bg-red-500 h-full"
                            />
                         </div>
                      </div>
                      
                      <div className="bg-industrial-800 p-4 rounded-lg">
                         <div className="flex justify-between text-white font-bold mb-2">
                            <span>Mining Capacity</span>
                            <span className="text-gray-400">Lagging Behind</span>
                         </div>
                         <div className="w-full bg-industrial-950 h-3 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: '60%' }}
                              transition={{ duration: 1.5, delay: 0.2 }}
                              className="bg-gray-600 h-full"
                            />
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Visual Graph Representation */}
                <div className="h-[400px] bg-industrial-950 rounded-xl p-8 relative flex items-end gap-4 border border-industrial-800">
                    <div className="absolute top-4 left-4 text-gray-500 text-xs font-mono">SUPPLY_DEFICIT_ANALYSIS</div>
                    
                    {/* Bars */}
                    <div className="w-full flex justify-between items-end h-full pt-12">
                        {[20, 35, 50, 75, 100].map((h, i) => (
                          <div key={i} className="flex flex-col items-center gap-2 w-1/6 group">
                             <div className="relative w-full h-full flex items-end">
                                {/* Supply */}
                                <motion.div 
                                  initial={{ height: 0 }}
                                  whileInView={{ height: `${h * 0.6}%` }}
                                  transition={{ duration: 1, delay: i * 0.1 }}
                                  className="w-full bg-gray-700 rounded-t-sm absolute bottom-0 left-0"
                                />
                                {/* Demand */}
                                <motion.div 
                                  initial={{ height: 0 }}
                                  whileInView={{ height: `${h}%` }}
                                  transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                                  className="w-full bg-red-500/80 rounded-t-sm absolute bottom-0 left-0 mix-blend-overlay border-t-2 border-red-400"
                                />
                             </div>
                             <span className="text-xs text-gray-500 mt-2">{2024 + i * 2}</span>
                          </div>
                        ))}
                    </div>
                    
                    {/* Labels */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                       <div className="bg-black/80 backdrop-blur border border-red-500/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-red-500 block">4.5M Tons</span>
                          <span className="text-xs text-gray-400 uppercase">Projected Shortfall</span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </AnimatedSection>

      {/* Environmental Impact Grid */}
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-industrial-800 p-8 rounded-2xl border border-industrial-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
            <Globe className="w-12 h-12 text-red-400 mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">15 Tons CO2</h3>
            <p className="text-gray-400 relative z-10">
              Emitted for every 1 ton of Lithium mined. This negates the green benefits of EVs.
            </p>
          </div>
          <div className="bg-industrial-800 p-8 rounded-2xl border border-industrial-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
            <Droplets className="w-12 h-12 text-blue-400 mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">2.2M Liters</h3>
            <p className="text-gray-400 relative z-10">
              Of water required to produce one ton of lithium, devastating local ecosystems.
            </p>
          </div>
          <div className="bg-industrial-800 p-8 rounded-2xl border border-industrial-700 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
            <Pickaxe className="w-12 h-12 text-amber-400 mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">0.5% Grade</h3>
            <p className="text-gray-400 relative z-10">
              Declining ore quality means we must move more earth for less material each year.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* The Waste Problem - Visualized */}
      <AnimatedSection className="bg-industrial-900 border-y border-industrial-800 py-24" fullWidth>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
               <div className="flex items-center gap-3 mb-6">
                 <div className="bg-red-500/20 p-2 rounded-lg">
                    <Flame className="text-red-500 w-6 h-6" />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  The End-of-Life Hazard
                 </h2>
               </div>
               <p className="text-lg text-gray-400 mb-8">
                 Batteries are not just trash—they are hazardous chemical packages. Improper disposal leads to thermal runaway events and toxic leachate contaminating groundwater.
               </p>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black border border-red-900/30 p-4 rounded-xl">
                      <BatteryWarning className="text-red-500 mb-2" />
                      <div className="text-2xl font-bold text-white">Thermal</div>
                      <div className="text-sm text-gray-500">Runaway Risks</div>
                  </div>
                  <div className="bg-black border border-red-900/30 p-4 rounded-xl">
                      <XCircle className="text-red-500 mb-2" />
                      <div className="text-2xl font-bold text-white">Toxic</div>
                      <div className="text-sm text-gray-500">Heavy Metal Leaching</div>
                  </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 flex flex-col justify-center space-y-4">
                {/* Infographic Steps of Failure */}
                {[
                    { label: "Landfill Disposal", status: "Critical Failure", color: "bg-red-500" },
                    { label: "Incineration", status: "High Emissions", color: "bg-orange-500" },
                    { label: "Exporting Waste", status: "Lost Resources", color: "bg-yellow-500" },
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-industrial-800 p-4 rounded-xl border border-industrial-700 opacity-60 hover:opacity-100 transition-opacity">
                        <div className={`w-3 h-full self-stretch rounded-full ${item.color}`}></div>
                        <div className="flex-grow">
                            <h4 className="text-white font-bold">{item.label}</h4>
                            <div className="h-2 bg-industrial-900 rounded-full mt-2 w-full overflow-hidden">
                                <div className={`h-full ${item.color} w-[80%]`}></div>
                            </div>
                        </div>
                        <div className="text-right">
                             <span className="text-xs font-bold text-gray-400 uppercase">{item.status}</span>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};