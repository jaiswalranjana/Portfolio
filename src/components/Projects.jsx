import React from 'react';
import { Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#09101f]/80 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

     
        <div className="flex flex-col items-start mb-20 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            My Projects
          </h2>
          <p className="text-base text-slate-400 max-w-xl">
            Real web projects built with React, JavaScript, HTML, and CSS focusing on usability, state management, and responsive layout structure.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16 sm:space-y-20">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 space-y-6"
            >
              {/* Top Row: Number & Project Type */}
              <div className="flex items-center gap-3">
                <span className="font-mono-custom text-xl font-bold text-blue-400">
                  {project.id}
                </span>
                <span className="h-px w-8 bg-blue-500/40" />
                <span className="text-xs uppercase tracking-wider font-mono-custom text-slate-400">
                  {project.type}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-blue-300 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-base leading-relaxed font-normal max-w-4xl">
                {project.description}
              </p>

              {/* Highlights Bullet List */}
              <div className="space-y-2 pt-1">
                {project.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-xs font-mono-custom bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links Row */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/60">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-md shadow-blue-600/20"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono-custom text-slate-400 bg-slate-950/60 border border-slate-800 rounded-lg select-none">
                    Code Repository Only
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
