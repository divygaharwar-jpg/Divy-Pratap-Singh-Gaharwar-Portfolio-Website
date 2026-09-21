import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  FileCode2,
  Palette,
  Terminal,
  Atom,
  Layout,
  GitBranch,
  Smartphone,
  Network
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { skillsData, skillCategories } from '../../data/skills';

const iconMap = {
  FileCode2,
  Palette,
  Terminal,
  Atom,
  Layout,
  GitBranch,
  Smartphone,
  Network
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const shouldReduceMotion = useReducedMotion();

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="02"
        title="Technical Skills"
        subtitle="Core Tools &amp; Frontend Technologies"
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-10">
        {skillCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              selectedCategory === category
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Card Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.iconName] || FileCode2;
            const isIntermediate = skill.level === 'Intermediate';

            return (
              <motion.div
                key={skill.name}
                layout
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="glass-panel glass-panel-glow p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon, Name, Level Tag */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:border-emerald-500/40 group-hover:scale-105 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                          {skill.name}
                        </h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Level Tag: Learning vs Intermediate */}
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                        isIntermediate
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25'
                          : 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/25'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {skill.description}
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex justify-between items-center text-xs mb-1.5 font-medium text-slate-600 dark:text-slate-400">
                    <span>Proficiency</span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={shouldReduceMotion ? { width: `${skill.percentage}%` } : { width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                      className={`h-full rounded-full ${
                        isIntermediate
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                          : 'bg-gradient-to-r from-teal-400 to-cyan-400'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
