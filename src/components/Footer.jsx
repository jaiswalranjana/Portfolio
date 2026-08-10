import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#050912] border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
            <span className="text-sm font-bold text-slate-200 font-mono-custom tracking-tight">
              {personalInfo.name}
            </span>
            <p className="text-slate-400">
              {personalInfo.title} • Aspiring Software Developer
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-200 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-200 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-200 transition-colors">Projects</a>
            <a href="#coding" className="hover:text-slate-200 transition-colors">Coding</a>
            <a href="#contact" className="hover:text-slate-200 transition-colors">Contact</a>
          </div>

          {/* Socials & Scroll to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-md bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white transition-all duration-200"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>


      </div>
    </footer>
  );
}
