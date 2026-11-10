import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUp, Download } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface FooterProps {
  profile: Profile;
  onOpenCVModal: () => void;
  onOpenEditor: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenCVModal, onOpenEditor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Identity & Department */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xl font-bold text-white">
              {profile.name}
            </h3>
            <p className="text-xs sm:text-sm text-sky-400">
              {profile.title} · {profile.department}
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {profile.institution} (Mekelle Institute of Technology - MIT Campus). Committed to advancing communications engineering, antenna systems, and digital higher education.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href={`mailto:${profile.email}`} className="text-slate-300 hover:text-white">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <a href={`tel:${profile.phone}`} className="text-slate-300 hover:text-white">
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Work Experience</a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">Degrees & Credentials</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Key Projects & Research</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Official Artifacts
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Academic CV</span>
              </button>

              <button
                onClick={onOpenEditor}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <span>Edit Portfolio Content</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.institution}. Academic & Engineering Portfolio.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-sky-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
