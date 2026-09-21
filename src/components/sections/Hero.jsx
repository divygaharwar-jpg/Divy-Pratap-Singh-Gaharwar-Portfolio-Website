import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Download, ArrowDown, Sparkles, Terminal, Code2 } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { personalData } from '../../data/personal';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalData.rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        {/* "Open to opportunities" badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 mb-8 shadow-sm shadow-emerald-500/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>{personalData.statusBadge}</span>
        </motion.div>

        {/* Developer Big Name */}
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-none"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            {personalData.name}
          </span>
        </motion.h1>

        {/* Animated Rotating Role Headline */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={shouldReduceMotion ? { opacity: 1 } : { y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { y: -25, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-center gap-2 text-xl sm:text-3xl font-heading font-semibold text-slate-700 dark:text-slate-300"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 shrink-0" />
              <span>{personalData.rotatingRoles[roleIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Short Tagline */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed mb-10"
        >
          {personalData.tagline}
        </motion.p>

        {/* Action Buttons: View Projects, Download Resume, GitHub, LinkedIn */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {/* View Projects */}
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-[0.98] transition-all duration-200"
          >
            <Code2 className="w-4 h-4" />
            <span>View Projects</span>
          </button>

          {/* Download Resume */}
          <a
            href={personalData.resumePath}
            download="Divy_Pratap_Singh_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 shadow-sm active:scale-[0.98] transition-all duration-200"
          >
            <Download className="w-4 h-4 text-emerald-500" />
            <span>Download Resume</span>
          </a>

          {/* GitHub Icon Link */}
          <a
            href={personalData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href={personalData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Floating Developer Terminal Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden sm:inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-mono shadow-md"
        >
          <Terminal className="w-4 h-4 text-emerald-500" />
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">domain:</span>
          <span>"Web Development"</span>
          <span className="opacity-30">|</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">mode:</span>
          <span>"Learning &amp; Building"</span>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.button
          onClick={() => scrollToSection('about')}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-14 p-2 rounded-full text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
