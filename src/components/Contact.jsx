import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#070c16] border-t border-slate-800/40">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

        {/* Section Heading & Subtitle */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let's build something together.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed pt-1">
            Have a project idea, internship opportunity, or technical discussion? I'm always eager to connect, collaborate, and learn.
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-5 pt-12 text-left">
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 flex flex-col justify-between space-y-4 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                <Mail className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-mono-custom uppercase tracking-wider mb-1">
                EMAIL ME
              </span>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-blue-300 transition-colors break-all">
                {personalInfo.email}
              </span>
            </div>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 flex flex-col justify-between space-y-4 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-slate-800 text-slate-200">
                <Github className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-mono-custom uppercase tracking-wider mb-1">
                GITHUB
              </span>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-blue-300 transition-colors break-all">
                github.com/jaiswalranjana
              </span>
            </div>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 flex flex-col justify-between space-y-4 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400">
                <Linkedin className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-mono-custom uppercase tracking-wider mb-1">
                LINKEDIN
              </span>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-blue-300 transition-colors break-all">
                linkedin.com/in/ranjana-j-51a66037a
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
