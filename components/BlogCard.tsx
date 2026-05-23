import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface Props {
  post: BlogPost;
}

export const BlogCard: React.FC<Props> = ({ post }) => (
  <article className="group bg-industrial-800/50 border border-industrial-700 rounded-2xl overflow-hidden card-hover">
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs px-2.5 py-1 rounded-full bg-electric-500/10 text-electric-400 border border-electric-500/20 font-medium">
          {post.category}
        </span>
        <span className="text-xs text-gray-500 flex items-center gap-1">
          <Clock size={12} /> {post.readTime}
        </span>
      </div>
      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-electric-400 transition-colors">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 flex items-center gap-1">
          <Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <Link to={`/blog/${post.slug}`} className="text-electric-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          Read <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </article>
);
