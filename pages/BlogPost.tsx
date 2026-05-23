import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { SEO, articleSchema, organizationSchema } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { CTASection } from '../components/CTASection';
import { getBlogPost } from '../data/blogPosts';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <div className="pt-32 text-center text-white">
        <h1>Article not found</h1>
        <Link to="/blog" className="text-electric-400 mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        schema={[organizationSchema, articleSchema(post)]}
      />

      <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-electric-400 text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <header className="mb-12">
            <span className="text-xs px-2.5 py-1 rounded-full bg-electric-500/10 text-electric-400 border border-electric-500/20 font-medium">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mt-4 mb-4">{post.title}</h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4 text-sm text-gray-500"
            >
              <span>{post.author}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            </motion.div>
          </header>

          <AnimatedSection>
            <div className="space-y-6">
              {post.content.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-gray-400 text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </article>

      <CTASection title="Interested in Battery Intelligence?" subtitle="Connect with VoltX Resources for partnerships, pilot projects, and investment opportunities." />
    </>
  );
};
