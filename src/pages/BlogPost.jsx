import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock
} from 'lucide-react';
import { Github, Linkedin } from '../components/common/Icons';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollProgress from '../components/common/ScrollProgress';
import BackgroundBlobs from '../components/common/BackgroundBlobs';
import { blogPosts } from '../data/blog';
import { personalData } from '../data/personal';

export default function BlogPost({ isDark, toggleTheme }) {
  const { slug } = useParams();
  const shouldReduceMotion = useReducedMotion();

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            The blog article you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-colors"
          >
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <ScrollProgress />
      <BackgroundBlobs />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Article Header */}
        <motion.header
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 space-y-4"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {post.category}
            </span>

            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-2 border-t border-slate-200 dark:border-slate-800">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Article Body Content */}
        <motion.article
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 text-slate-800 dark:text-slate-200 leading-relaxed text-base sm:text-lg mb-12"
        >
          {post.content.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={idx}
                  className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4 pb-1"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={idx}
                  className="my-6 p-5 rounded-2xl bg-emerald-500/10 border-l-4 border-emerald-500 text-slate-900 dark:text-slate-100 font-medium italic text-base"
                >
                  "{block.text}"
                </blockquote>
              );
            }
            return (
              <p key={idx} className="text-slate-700 dark:text-slate-300">
                {block.text}
              </p>
            );
          })}
        </motion.article>

        {/* Author Bio Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 text-emerald-400 font-heading font-extrabold text-2xl border border-emerald-500/40 flex items-center justify-center shrink-0">
            {personalData.monogram}
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
              Written by {personalData.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Frontend developer &amp; active hackathon participant passionate about crafting clean user interfaces and sharing engineering learnings.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1">
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-400">•</span>
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
