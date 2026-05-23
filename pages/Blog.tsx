import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { BlogCard } from '../components/BlogCard';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogPosts';

export const Blog: React.FC = () => {
  const [category, setCategory] = useState<string>('All');
  const filtered = category === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category);

  return (
    <>
      <SEO
        title="Battery Industry Insights & Research"
        description="Expert insights on battery recycling, energy storage, AI diagnostics, sustainability, and circular economy from the VoltX Resources research team."
        keywords={['battery blog', 'battery recycling news', 'BESS India', 'circular economy', 'VoltX Resources']}
        canonical="/blog"
      />

      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Insights & Research</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Deep dives into battery recycling, energy storage, AI diagnostics, and India's circular economy transition.
            </p>
          </header>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat
                    ? 'bg-electric-500 text-white'
                    : 'bg-industrial-800 text-gray-400 hover:text-white border border-industrial-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};
