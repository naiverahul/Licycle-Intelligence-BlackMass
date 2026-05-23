import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Cpu, Zap, Recycle, ChevronRight } from 'lucide-react';

const STEPS = [
  { icon: Battery, label: 'EV Battery', color: 'text-electric-400', bg: 'bg-electric-500/10 border-electric-500/30' },
  { icon: Cpu, label: 'AI Diagnostics', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
  { icon: Zap, label: 'Second-Life BESS', color: 'text-neon-400', bg: 'bg-neon-500/10 border-neon-500/30' },
  { icon: Recycle, label: 'Recycling', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
];

export const HeroVisual: React.FC = () => (
  <div className="relative w-full max-w-lg mx-auto" aria-hidden="true">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_70%)] rounded-full blur-2xl" />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative bg-industrial-900/80 border border-industrial-700 rounded-2xl p-6 backdrop-blur-sm glow-blue"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center justify-between mb-4 pb-3 border-b border-industrial-700"
      >
        <span className="text-xs font-mono text-gray-500">VOLTX INTELLIGENCE</span>
        <span className="flex items-center gap-1.5 text-xs text-neon-400">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-500 animate-pulse" />
          LIVE
        </span>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: 'Fleet SOH', value: '78.4%', trend: '+2.1%' },
          { label: 'BESS Output', value: '1.2 MWh', trend: 'Active' },
          { label: 'Recovery Rate', value: '98.5%', trend: 'Optimal' },
          { label: 'CO₂ Saved', value: '847t', trend: '+12%' },
        ].map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="bg-industrial-950 border border-industrial-700 rounded-lg p-3"
          >
            <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-lg font-bold text-white"
            >
              {metric.value}
            </motion.div>
            <div className="text-xs text-neon-400">{metric.trend}</div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-1">
        {STEPS.map((step, idx) => (
          <React.Fragment key={step.label}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + idx * 0.15 }}
              className={`flex flex-col items-center gap-1.5 p-2 rounded-lg border ${step.bg}`}
            >
              <step.icon className={`w-4 h-4 ${step.color}`} />
              <span className="text-[10px] text-gray-400 text-center leading-tight">{step.label}</span>
            </motion.div>
            {idx < STEPS.length - 1 && (
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
              >
                <ChevronRight className="w-3 h-3 text-gray-600 shrink-0" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-4 h-16 flex items-end gap-1">
        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
            className="flex-1 bg-gradient-to-t from-electric-600 to-electric-400 rounded-sm opacity-80"
          />
        ))}
      </div>
    </motion.div>
  </div>
);
