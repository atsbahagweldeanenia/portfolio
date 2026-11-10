import React from 'react';
import { Radio, Cpu, Activity, Tag } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('antenna')) {
      return <Radio className="w-5 h-5" />;
    }
    if (title.toLowerCase().includes('modulation')) {
      return <Activity className="w-5 h-5" />;
    }
    return <Cpu className="w-5 h-5" />;
  };

  return (
    <section id="projects" className="py-12 sm:py-16 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider font-semibold text-sky-400 mb-1">
            Engineering & Communications Research
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Key Projects & Research
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-800 border border-slate-700 hover:border-sky-400/50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-sky-950/70 text-sky-400 border border-sky-800/40">
                    {getProjectIcon(proj.title)}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {proj.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                  {proj.title}
                </h3>

                <div className="text-xs font-medium text-indigo-400 mb-3">
                  {proj.category}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              {/* Tags from draft */}
              {proj.tags && proj.tags.length > 0 && (
                <div className="pt-3 border-t border-slate-700/60 flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-sky-950/60 text-sky-400 border border-sky-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
