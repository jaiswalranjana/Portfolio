import React from 'react';
import { Award, GraduationCap, CheckCircle, Trophy } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Competitive Programming':
      return <Trophy className="w-5 h-5 text-amber-400" />;
    case 'Data Structures & Algorithms':
      return <Award className="w-5 h-5 text-yellow-400" />;
    case 'Academic Milestones':
      return <GraduationCap className="w-5 h-5 text-blue-400" />;
    default:
      return <CheckCircle className="w-5 h-5 text-cyan-400" />;
  }
};

export default function Achievements() {
  return (
    <section className="py-24 sm:py-32 relative bg-[#09101f]/60 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Achievements & Journey
          </h2>
          <p className="text-base text-slate-400 max-w-xl">
            Key academic milestones, programming practice achievements, and skill verifications during my B.Tech studies.
          </p>
        </div>

        {/* Timeline / Card Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-800">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-xs font-mono-custom text-blue-400">
                      {item.category}
                    </span>
                  </div>


                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
