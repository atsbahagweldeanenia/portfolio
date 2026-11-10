import React, { useState } from 'react';
import { Cpu, Code2, Network, Check, Sparkles } from 'lucide-react';
import { SkillItem } from '../types/portfolio';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hardware' | 'software' | 'networking'>('all');

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'hardware', label: 'Hardware & Design', icon: <Cpu className="w-3.5 h-3.5" /> },
    { key: 'software', label: 'Software & Tools', icon: <Code2 className="w-3.5 h-3.5" /> },
    { key: 'networking', label: 'Networking & Security', icon: <Network className="w-3.5 h-3.5" /> },
  ] as const;

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  const getCategoryColor = (cat: 'hardware' | 'software' | 'networking') => {
    switch (cat) {
      case 'hardware':
        return 'bg-amber-950/40 text-amber-300 border-amber-800/40';
      case 'software':
        return 'bg-sky-950/40 text-sky-300 border-sky-800/40';
      case 'networking':
        return 'bg-indigo-950/40 text-indigo-300 border-indigo-800/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-slate-800 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-sky-400 mb-1">
              Engineering Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Skills
            </h2>
          </div>

          {/* Interactive Skills Filter from Draft */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-800 rounded-lg border border-slate-700 w-fit">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                  activeCategory === cat.key
                    ? 'bg-sky-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {'icon' in cat && cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Card with Badges from Draft */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap gap-2.5">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-all duration-150 flex items-center gap-2 hover:scale-[1.02] ${getCategoryColor(
                  skill.category
                )}`}
              >
                <span>{skill.name}</span>
                {skill.level && (
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-black/30 opacity-75">
                    {skill.level}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between text-xs text-slate-400">
            <span>
              Showing {filteredSkills.length} of {skills.length} core technical proficiencies
            </span>
            <span className="font-mono text-sky-400/80">
              Mekelle Institute of Technology (MIT)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
