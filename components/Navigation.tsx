import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/siteConfig';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-industrial-950/80 backdrop-blur-xl border-b border-industrial-800/60" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="VoltX Resources Home">
            <div className="bg-electric-500/10 p-2 rounded-lg border border-electric-500/20 group-hover:border-electric-500/50 transition-colors glow-blue">
              <Zap className="text-electric-400 w-5 h-5" aria-hidden="true" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Volt<span className="text-electric-400">X</span>
              <span className="text-gray-500 font-normal text-sm ml-1.5 hidden sm:inline">Resources</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-white ${
                  isActive(item.path) ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div layoutId="nav-underline" className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-electric-500 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact?type=pilot"
              className="px-5 py-2.5 bg-electric-500 text-white text-sm font-bold rounded-lg hover:bg-electric-400 transition-colors glow-blue"
            >
              Request Pilot
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-industrial-950 border-b border-industrial-800 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-left ${isActive(item.path) ? 'text-electric-400' : 'text-gray-400'}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact?type=pilot"
                onClick={() => setIsOpen(false)}
                className="mt-2 py-3 text-center bg-electric-500 text-white font-bold rounded-lg"
              >
                Request Pilot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
