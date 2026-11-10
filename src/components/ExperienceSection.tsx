import React from 'react';
import { Briefcase, Building, Calendar, CheckCircle } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider font-semibold text-sky-400 mb-1">
            Faculty Career
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experience.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-400/60 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-sky-950/70 text-sky-400 border border-sky-800/40">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">
                  {item.role}
                </h3>

                <div className="text-xs font-medium text-indigo-400 mb-3 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>{item.institution}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1 text-[11px] text-sky-400/80 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Academic Appointment</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
