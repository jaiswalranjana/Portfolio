import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import heroImage from '../assets/Hero.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 sm:pt-36 pb-20 overflow-hidden">

      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">


          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">



            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 leading-[1.08]">
                Ranjana Jaiswal
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 tracking-tight pt-1">
                {personalInfo.role}
              </p>
            </div>


            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              {personalInfo.bioShort}
            </p>


            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>
            </div>


            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60 w-full">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono-custom">
                Connect:
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 text-slate-300 hover:text-white transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 text-slate-300 hover:text-white transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 text-slate-300 hover:text-white transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>


          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">


              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 rounded-2xl blur-xl opacity-70" />


              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl p-2.5 transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-800">
                  <img
                    src={heroImage}
                    alt="Ranjana Jaiswal"
                    className="w-full h-full object-cover object-center filter grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070c16]/80 via-transparent to-transparent pointer-events-none" />
                </div>


                <div className="px-3 py-3 flex items-center justify-between border-t border-slate-800/60 mt-1">
                  <span className="text-xs font-mono-custom text-slate-400">
                    B.Tech CSE '29
                  </span>
                  <span className="text-xs text-blue-400 font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Web & DSA
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
