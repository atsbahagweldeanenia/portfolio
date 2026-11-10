import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Building, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface PrintableCVModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const PrintableCVModal: React.FC<PrintableCVModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const { profile, experience, degrees, certifications, projects, skills } = data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      <div className="bg-white text-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Controls Bar (hidden during print) */}
        <div className="no-print p-4 sm:px-6 border-b border-slate-200 bg-slate-100 flex items-center justify-between gap-4">
          <div className="text-xs font-semibold text-slate-700">
            Official Curriculum Vitae · {profile.name}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="p-6 sm:p-12 overflow-y-auto text-slate-900 print-full-width space-y-7 leading-relaxed font-sans text-sm">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-center sm:text-left">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-1">
                {profile.name}
              </h1>
              <div className="text-sm font-semibold text-sky-700 mb-1">
                {profile.title}
              </div>
              <div className="text-xs text-slate-600 space-y-0.5">
                <p>{profile.department} · {profile.institution}</p>
                <p>{profile.location} · {profile.email} · {profile.phone}</p>
                <p className="text-sky-800">{profile.linkedin}</p>
              </div>
            </div>

            <img
              src={profile.avatarUrl}
              alt={profile.name}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('photo_2026-11-10')) {
                  target.src = './assets/aistudio/photo_2026-11-10_15-05-23_c84d4bbf.jpg';
                }
              }}
              className="w-24 h-28 object-cover object-[center_12%] rounded-lg border border-slate-300 shadow-sm shrink-0"
            />
          </div>

          {/* 1. Academic & Professional Experience */}
          <section className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 text-slate-900">
              Work Experience
            </h2>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.id} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{exp.role} — {exp.institution}</span>
                    <span className="font-mono text-xs text-slate-500 font-normal">{exp.period}</span>
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Education */}
          <section className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 text-slate-900">
              Education & Academic Degrees
            </h2>
            <div className="space-y-3">
              {degrees.map((deg) => (
                <div key={deg.id} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{deg.degree}</span>
                    <span className="font-mono text-xs text-slate-500 font-normal">{deg.period}</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    {deg.institution} {deg.gpa && `· Cumulative GPA: ${deg.gpa}`}
                  </div>
                  <p className="text-slate-700 text-xs">
                    {deg.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Certifications */}
          <section className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 text-slate-900">
              Professional Certifications & Credentials
            </h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-slate-900">{cert.title}</span> —{' '}
                    <span className="text-slate-700">{cert.issuer}</span>
                    <p className="text-slate-600 text-[11px]">{cert.description}</p>
                  </div>
                  <span className="font-mono text-slate-500 shrink-0">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Projects & Research */}
          <section className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 text-slate-900">
              Key Projects & Research
            </h2>
            <div className="space-y-2.5">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-0.5 text-xs">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{proj.title} ({proj.category})</span>
                    <span className="font-mono text-slate-500 font-normal">{proj.period}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Technical Skills */}
          <section className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 text-slate-900">
              Technical & Engineering Skills
            </h2>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {skills.map((s) => (
                <span
                  key={s.name}
                  className="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded text-slate-800"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
