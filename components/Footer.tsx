import React from 'react';
import { Activity } from 'lucide-react';
import { Page } from '../types';

interface Props {
    setPage: (page: Page) => void;
}

export const Footer: React.FC<Props> = ({ setPage }) => {
  return (
    <footer className="bg-black border-t border-industrial-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="bg-neon-500/10 p-2 rounded border border-neon-500/20">
                <Activity className="text-neon-500 w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-white">LiCycle<span className="text-neon-500">Intelligence</span></span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Engineering the circular battery economy. Sustainable, safe, and scalable recycling solutions for a cleaner future.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><button onClick={() => setPage('vision')} className="hover:text-neon-500 transition-colors">About Us</button></li>
              <li><button onClick={() => setPage('technology')} className="hover:text-neon-500 transition-colors">Technology</button></li>
              <li><button onClick={() => setPage('home')} className="hover:text-neon-500 transition-colors">Validation Status</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Rahul23418@iiitd.ac.in</li>
              <li>saksham23576@iiitd.ac.in</li>
              <li>+91 99901 93405</li>
              <li>IIIT Delhi, New Delhi</li>
              <li><button onClick={() => setPage('contact')} className="text-neon-500 hover:underline mt-2 inline-block">Get in Touch</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2024 LiCycle Intelligence Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};