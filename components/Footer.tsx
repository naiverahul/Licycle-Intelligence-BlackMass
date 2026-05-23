import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowUpRight } from 'lucide-react';
import { SITE, SEO_LINKS } from '../data/siteConfig';
import { NewsletterSignup } from './NewsletterSignup';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-industrial-800 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="bg-electric-500/10 p-2 rounded-lg border border-electric-500/20">
                <Zap className="text-electric-400 w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Volt<span className="text-electric-400">X</span> Resources
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">{SITE.description}</p>
            <NewsletterSignup compact />
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link to="/technology" className="hover:text-electric-400 transition-colors">Technology</Link></li>
              <li><Link to="/#solution" className="hover:text-electric-400 transition-colors">Solutions</Link></li>
              <li><Link to="/#impact" className="hover:text-electric-400 transition-colors">Impact</Link></li>
              <li><Link to="/blog" className="hover:text-electric-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-electric-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {SEO_LINKS.slice(0, 4).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-electric-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {SITE.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
                </li>
              ))}
              <li><a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{SITE.phone}</a></li>
              <li>{SITE.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>&copy; {new Date().getFullYear()} VoltX Resources. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {SEO_LINKS.slice(4).map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-gray-400 transition-colors flex items-center gap-1">
                {link.label} <ArrowUpRight size={10} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
