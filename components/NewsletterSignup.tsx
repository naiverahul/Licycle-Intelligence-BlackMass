import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface Props {
  compact?: boolean;
}

export const NewsletterSignup: React.FC<Props> = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div className="flex items-center gap-2 text-neon-400 text-sm">
        <CheckCircle size={16} />
        <span>Subscribed to VoltX insights</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'flex gap-2' : 'space-y-3'} aria-label="Newsletter signup">
      {!compact && <p className="text-sm text-gray-400">Get battery industry insights & updates</p>}
      <div className={compact ? 'flex gap-2 w-full' : 'flex gap-2'}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          aria-label="Email for newsletter"
          className="flex-1 bg-industrial-900 border border-industrial-600 rounded-lg px-4 py-2.5 text-sm text-white focus:border-electric-500 focus:outline-none transition-colors"
        />
        <button
          type="submit"
          className="px-4 py-2.5 bg-electric-500 text-white text-sm font-bold rounded-lg hover:bg-electric-400 transition-colors flex items-center gap-1 shrink-0"
        >
          {compact ? <ArrowRight size={16} /> : 'Subscribe'}
        </button>
      </div>
    </form>
  );
};
