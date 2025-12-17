import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';
import { Page, NavItem } from '../types';

interface Props {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'technology', label: 'Technology' },
  { id: 'vision', label: 'Vision & Impact' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC<Props> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-industrial-900/80 backdrop-blur-md border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setPage('home')}
          >
            <div className="bg-neon-500/10 p-2 rounded border border-neon-500/20 group-hover:border-neon-500 transition-colors">
              <Activity className="text-neon-500 w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              LiCycle<span className="text-neon-500">Intelligence</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`relative text-sm font-medium transition-colors hover:text-white ${
                  currentPage === item.id ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-neon-500"
                  />
                )}
              </button>
            ))}
            <button 
              onClick={() => setPage('contact')}
              className="px-4 py-2 bg-white text-black text-sm font-bold rounded hover:bg-neon-400 transition-colors"
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-industrial-900 border-b border-industrial-800 overflow-hidden"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsOpen(false);
                }}
                className={`text-left py-2 ${
                  currentPage === item.id ? 'text-neon-500' : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};