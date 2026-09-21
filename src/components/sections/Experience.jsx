import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  GraduationCap,
  Trophy,
  Calendar,
  Award,
  CheckCircle,
  MapPin,
  Flame
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { timelineData } from '../../data/experience';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'education'
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="journey" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="04"
        title="Experience &amp; Education"
        subtitle="Hackathons, Events &amp; Academic Background"
      />

      {/* Group Switcher Tabs */}
      <div className="flex items-center justify-center mb-12">
        <div className="p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 inline-flex">
          <button
            type="button"
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'experience'
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Hackathons &amp; Events</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'education'
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </button>
        </div>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Glowing vertical spine line */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent" />

        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="exp-timeline"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {timelineData.experience.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-8 group`}
                  >
                    {/* Timeline Node Icon */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/30 z-10 group-hover:scale-110 transition-transform">
                      <Flame className="w-4 h-4" />
                    </div>

                    {/* Timeline Card */}
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5 }}
                      className="ml-12 sm:ml-0 sm:w-1/2 glass-panel glass-panel-glow p-6 rounded-2xl relative"
                    >
                      {/* Event year & role */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </span>

                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {item.role}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                        {item.eventName}
                      </h3>

                      {/* What I Built */}
                      <div className="mb-4">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                          What I Built:
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.whatIBuilt}
                        </p>
                      </div>

                      {/* Certificate / Award Badge (shown only if provided) */}
                      {item.badgeText && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-500/20 mb-4">
                          <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{item.badgeText}</span>
                        </div>
                      )}

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                        {item.skillsUsed.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="edu-timeline"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {timelineData.education.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-8 group`}
                  >
                    {/* Timeline Node Icon */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/30 z-10 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-4 h-4" />
                    </div>

                    {/* Timeline Card */}
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5 }}
                      className="ml-12 sm:ml-0 sm:w-1/2 glass-panel glass-panel-glow p-6 rounded-2xl relative"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>

                      <h4 className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                        {item.institution}
                      </h4>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
