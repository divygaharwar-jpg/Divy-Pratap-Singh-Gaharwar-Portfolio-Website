import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { blogPosts } from '../../data/blog';

export default function BlogSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="blog" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="05"
        title="Engineering Blog"
        subtitle="Learnings, Hackathon Stories &amp; Frontend Notes"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {blogPosts.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            className="glass-panel glass-panel-glow rounded-2xl flex flex-col justify-between overflow-hidden group"
          >
            {/* Top decorative gradient header */}
            <div className={`h-2.5 bg-gradient-to-r ${post.coverGradient || 'from-emerald-500 to-teal-400'}`} />

            <div className="p-6 sm:p-7 flex flex-col flex-1">
              {/* Meta: Category, Date, Read Time */}
              <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                <span className="font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {post.category}
                </span>

                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6 flex-1">
                {post.excerpt}
              </p>

              {/* Tags and Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300"
                >
                  <span>Read Post</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
