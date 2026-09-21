import React from 'react';

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top right emerald glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl" />

      {/* Middle left cyan/teal subtle glow */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-teal-500/10 dark:bg-emerald-600/10 rounded-full blur-3xl" />

      {/* Bottom right subtle glow */}
      <div className="absolute -bottom-40 right-10 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-emerald-600/10 dark:bg-emerald-500/10 rounded-full blur-3xl" />

      {/* Very subtle grid overlay for a high-tech developer aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
