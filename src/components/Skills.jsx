import React from 'react';
import { skillsData } from '../data/portfolioData';
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiGit,
  SiGithub
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { Code, Wrench, Layers } from 'lucide-react';

const getSkillIcon = (name) => {
  switch (name) {
    case 'C++':
      return <SiCplusplus className="w-5 h-5 text-blue-400" />;
    case 'Python':
      return <SiPython className="w-5 h-5 text-yellow-400" />;
    case 'JavaScript':
      return <SiJavascript className="w-5 h-5 text-amber-400" />;
    case 'React':
      return <SiReact className="w-5 h-5 text-cyan-400" />;
    case 'HTML5':
      return <SiHtml5 className="w-5 h-5 text-orange-400" />;
    case 'CSS3':
      return <FaCss3Alt className="w-5 h-5 text-blue-500" />;
    case 'Tailwind CSS':
      return <SiTailwindcss className="w-5 h-5 text-sky-400" />;
    case 'Git':
      return <SiGit className="w-5 h-5 text-orange-500" />;
    case 'GitHub':
      return <SiGithub className="w-5 h-5 text-slate-200" />;
    default:
      return <Code className="w-5 h-5 text-blue-400" />;
  }
};

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Languages':
      return <Code className="w-4 h-4 text-blue-400" />;
    case 'Web Development':
      return <Layers className="w-4 h-4 text-cyan-400" />;
    case 'Tools & Version Control':
      return <Wrench className="w-4 h-4 text-slate-300" />;
    default:
      return <Code className="w-4 h-4 text-blue-400" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#070c16]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">


        <div className="flex flex-col items-start mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Technical Toolkit
          </h2>
          <p className="text-base text-slate-400 max-w-xl">
            Core programming languages, web technologies, and software tools I use to solve problems and build applications.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>

                <div className="flex items-center gap-2.5 mb-3 border-b border-slate-800/80 pb-4">
                  <div className="p-2 rounded-lg bg-slate-800/60">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>


                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-blue-500/30 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-md bg-slate-900">
                          {getSkillIcon(skill.name)}
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-slate-200 block">
                            {skill.name}
                          </span>
                          <span className="text-xs text-slate-400 block">
                            {skill.detail}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
