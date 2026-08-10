import React from 'react';
import { ExternalLink, Terminal, Code2 } from 'lucide-react';
import { SiCodechef, SiLeetcode, SiGithub, SiHackerrank } from 'react-icons/si';
import { codingProfiles } from '../data/portfolioData';

const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'CodeChef':
      return <SiCodechef className="w-6 h-6 text-amber-500" />;
    case 'LeetCode':
      return <SiLeetcode className="w-6 h-6 text-yellow-500" />;
    case 'GitHub':
      return <SiGithub className="w-6 h-6 text-slate-200" />;
    case 'HackerRank':
      return <SiHackerrank className="w-6 h-6 text-emerald-400" />;
    default:
      return <Terminal className="w-6 h-6 text-blue-400" />;
  }
};

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-24 sm:py-32 relative bg-[#070c16]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Coding Profiles
          </h2>
          <p className="text-base text-slate-400 max-w-xl">
            My algorithmic problem-solving journey across competitive programming and coding platforms.
          </p>
        </div>

        {/* Grid of Profiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Platform Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    {getPlatformIcon(profile.platform)}
                  </div>
                  <span className="text-[11px] font-mono-custom px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {profile.badge}
                  </span>
                </div>

                {/* Title & Stats */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {profile.platform}
                  </h3>
                  <span className="text-sm font-mono-custom font-semibold text-cyan-400 block mt-1">
                    {profile.stats}
                  </span>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {profile.detail}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-blue-600 hover:text-white border border-slate-700/60 hover:border-blue-500 transition-all duration-200"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
