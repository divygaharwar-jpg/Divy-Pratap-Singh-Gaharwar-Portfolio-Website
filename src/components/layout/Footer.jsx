import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { personalData } from '../../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-white/40 dark:bg-[#06080d]/80 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Column 1: Monogram & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 font-heading font-extrabold text-base border border-emerald-500/40">
                {personalData.monogram}
              </div>
              <span className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                {personalData.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Frontend developer &amp; active hackathon participant enthusiastic about modern web technologies, responsive user interfaces, and collaborative engineering.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalData.contact.email}`}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#about" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">01 — About</a></li>
              <li><a href="#skills" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">02 — Skills</a></li>
              <li><a href="#projects" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">03 — Projects</a></li>
              <li><a href="#journey" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">04 — Journey</a></li>
              <li><a href="#blog" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">05 — Blog</a></li>
              <li><a href="#contact" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">06 — Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Status & Back to Top */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Availability
            </h4>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalData.statusBadge}</span>
            </div>
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-emerald-500 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React.js, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
