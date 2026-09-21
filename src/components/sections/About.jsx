import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Trophy, Sparkles, FolderGit2, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { personalData } from '../../data/personal';

const iconMap = {
  Trophy: Trophy,
  Sparkles: Sparkles,
  FolderGit2: FolderGit2,
  Code2: Code2
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="01"
        title="About Me"
        subtitle="Passionate About Problem Solving &amp; Frontend Craftsmanship"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio Narrative */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
        >
          {personalData.bio.map((paragraph, index) => (
            <p key={index} className="relative pl-4 border-l-2 border-emerald-500/30">
              {paragraph}
            </p>
          ))}

          {/* Key Principles Checklist */}
          <div className="pt-4 space-y-3 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="font-medium text-slate-800 dark:text-slate-200">
                Active hackathon sprinter turning raw ideas into shipped prototypes
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="font-medium text-slate-800 dark:text-slate-200">
                Obsessed with responsive layouts, micro-interactions, and web performance
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="font-medium text-slate-800 dark:text-slate-200">
                Continuous learner expanding deeper into React and modern frontend ecosystems
              </span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group"
            >
              <span>Explore my projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: 4 Animated Highlight Metric Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {personalData.stats.map((stat) => {
            const Icon = iconMap[stat.iconName] || Trophy;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="glass-panel glass-panel-glow p-6 rounded-2xl relative overflow-hidden group"
              >
                {/* Subtle gradient corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    Verified
                  </span>
                </div>

                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>

                <div className="font-heading text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
