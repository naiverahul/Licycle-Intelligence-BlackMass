import React from 'react';
import { Mail, MapPin, ArrowRight, Phone } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Partner With Us
              </h1>
              <p className="text-xl text-gray-400">
                Whether you are a battery manufacturer, EV fleet operator, or investor, we want to build the future of the circular economy with you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-industrial-800 p-3 rounded-lg text-neon-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email Us</h3>
                  <a href="mailto:Rahul23418@iiitd.ac.in" className="block text-gray-400 hover:text-white transition-colors">Rahul23418@iiitd.ac.in</a>
                  <a href="mailto:saksham23576@iiitd.ac.in" className="block text-gray-400 hover:text-white transition-colors">saksham23576@iiitd.ac.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-industrial-800 p-3 rounded-lg text-neon-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Call Us</h3>
                  <p className="text-gray-400">+91 99901 93405</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-industrial-800 p-3 rounded-lg text-neon-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Lab & Operations</h3>
                  <p className="text-gray-400">Indraprastha Institute of Information Technology</p>
                  <p className="text-gray-400">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-industrial-900 border border-industrial-800 rounded-xl">
               <h4 className="text-white font-bold mb-2">Looking for a Pilot?</h4>
               <p className="text-sm text-gray-400 mb-4">We are currently accepting limited material batches for validation processing.</p>
            </div>
          </div>

          {/* Form Side */}
          <AnimatedSection delay={0.2} className="w-full">
            <form className="bg-industrial-800/50 p-8 rounded-2xl border border-industrial-700 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <input type="text" className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-neon-500 focus:outline-none transition-colors" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <input type="text" className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-neon-500 focus:outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input type="email" className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-neon-500 focus:outline-none transition-colors" placeholder="jane@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Organization Type</label>
                <select className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-neon-500 focus:outline-none transition-colors">
                  <option>Investor</option>
                  <option>Battery Manufacturer</option>
                  <option>Automotive OEM</option>
                  <option>Recycling Partner</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea rows={4} className="w-full bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-3 text-white focus:border-neon-500 focus:outline-none transition-colors" placeholder="How can we collaborate?"></textarea>
              </div>

              <button type="button" className="w-full bg-neon-600 hover:bg-neon-500 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                Send Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};