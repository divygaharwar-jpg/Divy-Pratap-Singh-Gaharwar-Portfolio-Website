import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function SectionHeading({ number, title, subtitle, align = 'left' }) {
  const shouldReduceMotion = useReducedMotion();

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col mb-12 sm:mb-16 ${alignmentClasses[align] || alignmentClasses.left}`}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <span className="font-mono font-bold text-emerald-500">{number}</span>
        <span className="opacity-40">—</span>
        <span>{title}</span>
      </div>

      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        {subtitle || title}
      </h2>

      <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mt-4" />
    </motion.div>
  );
}
