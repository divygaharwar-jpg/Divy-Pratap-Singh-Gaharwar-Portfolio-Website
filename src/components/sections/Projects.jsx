import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ExternalLink,
  Star,
  GitFork,
  FolderGit2,
  Sparkles
} from 'lucide-react';
import { Github } from '../common/Icons';
import SectionHeading from '../common/SectionHeading';
import { projectsData, projectCategories } from '../../data/projects';
import { personalData } from '../../data/personal';
import { useGitHubRepos } from '../../hooks/useGitHubRepos';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('featured'); // 'featured' | 'github'
  const shouldReduceMotion = useReducedMotion();

  const { repos, loading: loadingRepos, isFallback } = useGitHubRepos(
    personalData.contact.githubUsername
  );

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="03"
        title="Featured Projects"
        subtitle="Selected Works &amp; Hackathon Innovations"
      />

      {/* Control Bar: View Mode Switcher (Featured vs GitHub Repos) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* View Mode Toggle */}
        <div className="flex items-center p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
          <button
            type="button"
            onClick={() => setViewMode('featured')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              viewMode === 'featured'
                ? 'bg-emerald-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Featured Highlights</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('github')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              viewMode === 'github'
                ? 'bg-emerald-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>Live GitHub Repos</span>
          </button>
        </div>

        {/* Category Filters (Only when viewing Featured) */}
        {viewMode === 'featured' && (
          <div className="flex flex-wrap items-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Featured Projects Grid */}
      {viewMode === 'featured' && (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className="glass-panel glass-panel-glow rounded-2xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Project Header Banner */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {project.category}
                    </span>

                    {project.year && (
                      <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                        {project.year}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips & Actions */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(Boolean(project.githubUrl) || Boolean(project.demoUrl)) && (
                    <div className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm shadow-emerald-500/20 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* GitHub Live Repositories View */}
      {viewMode === 'github' && (
        <div>
          {isFallback && (
            <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300 flex items-center justify-between">
              <span>
                Displaying curated repository showcase (GitHub API rate limit fallback).
              </span>
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline ml-2"
              >
                Visit profile
              </a>
            </div>
          )}

          {loadingRepos ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl animate-pulse space-y-4"
                >
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
                  <div className="h-6 bg-slate-300 dark:bg-slate-600 rounded w-3/4" />
                  <div className="h-16 bg-slate-200 dark:bg-slate-700/60 rounded w-full" />
                  <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <motion.article
                  key={repo.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={shouldReduceMotion ? {} : { y: -5 }}
                  className="glass-panel glass-panel-glow p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <FolderGit2 className="w-6 h-6 text-emerald-500" />
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          {repo.stargazers_count ?? 0}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5" />
                          {repo.forks_count ?? 0}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-1">
                      {repo.name}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {repo.description || "Public web repository created by Divy Pratap Singh Gaharwar."}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {repo.language || "Web"}
                    </span>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                    >
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
