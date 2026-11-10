import React, { useState } from 'react';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Calendar, BookOpen } from 'lucide-react';
import { DegreeItem, CertificationItem } from '../types/portfolio';

interface EducationAndCredentialsSectionProps {
  degrees: DegreeItem[];
  certifications: CertificationItem[];
}

export const EducationAndCredentialsSection: React.FC<EducationAndCredentialsSectionProps> = ({
  degrees,
  certifications,
}) => {
  const [activeTab, setActiveTab] = useState<'degrees' | 'certs'>('degrees');

  return (
    <section id="education" className="py-12 sm:py-16 border-b border-slate-800 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-sky-400 mb-1">
              Qualifications & Credentials
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Education & Credentials
            </h2>
          </div>

          {/* Interactive Tab Switcher from Draft */}
          <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg border border-slate-700 w-fit">
            <button
              onClick={() => setActiveTab('degrees')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'degrees'
                  ? 'bg-sky-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Academic Degrees ({degrees.length})
            </button>
            <button
              onClick={() => setActiveTab('certs')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'certs'
                  ? 'bg-sky-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Professional Certifications ({certifications.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Degrees */}
        {activeTab === 'degrees' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {degrees.map((deg) => (
              <div
                key={deg.id}
                className="bg-slate-800 border border-slate-700 hover:border-sky-400/50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-sky-950/70 text-sky-400 border border-sky-800/40">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {deg.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                    {deg.degree}
                  </h3>

                  <div className="text-xs font-medium text-indigo-400 mb-3">
                    {deg.institution}
                  </div>

                  {deg.gpa && (
                    <div className="mb-2.5 inline-block text-xs font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2.5 py-0.5 rounded">
                      Cumulative GPA: {deg.gpa}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {deg.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-700/60 text-xs text-slate-400">
                  Focus: {deg.field}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Certifications */}
        {activeTab === 'certs' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-slate-800 border border-slate-700 hover:border-sky-400/50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-indigo-950/70 text-indigo-400 border border-indigo-800/40">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-medium text-sky-400 mb-3">
                    {cert.issuer}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Credential Verified</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
