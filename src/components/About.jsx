import React from 'react';
import { Code2, Cpu, Rocket, BookOpen, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#09101f]/60 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="text-slate-200 font-medium leading-relaxed">
              {personalInfo.aboutParagraphs[0]}
            </p>
            <p>
              {personalInfo.aboutParagraphs[1]}
            </p>
            <p>
              {personalInfo.aboutParagraphs[2]}
            </p>


            <div className="pt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                <Code2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Web Development</h4>
                  <p className="text-xs text-slate-400 mt-1">React, JavaScript, HTML5, CSS3 & Tailwind</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">DSA & Logic</h4>
                  <p className="text-xs text-slate-400 mt-1">C++, Data Structures & Algorithm Design</p>
                </div>
              </div>
            </div>

          </div>


          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">

              <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Current Focus & Learning
                </h3>
              </div>

              <div className="space-y-5">
                {personalInfo.currentFocus.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 pl-6 leading-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>


              <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="block text-2xl font-bold font-mono-custom text-blue-400">500+</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">CodeChef</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-mono-custom text-cyan-400">50+</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">LeetCode</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-mono-custom text-white">4+</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">Projects</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
