import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Download, Calendar, ArrowRight, Building, Check, Copy } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface HeroSectionProps {
  profile: Profile;
  onOpenOfficeHours: () => void;
  onOpenCVModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onOpenOfficeHours,
  onOpenCVModal,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">
          {/* Hero Image with glowing border matching the user's draft */}
          <div className="relative shrink-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-3 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.35)] bg-slate-800">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_12%] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-900 border border-sky-400/50 text-[11px] font-semibold text-sky-400 whitespace-nowrap shadow-sm">
              Mekelle University
            </div>
          </div>

          {/* Hero Text matching user's draft */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-sky-400">
              Academic & Engineering Portfolio
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {profile.name}
            </h1>

            <h2 className="text-lg sm:text-xl font-normal text-sky-400">
              {profile.title}
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              {profile.bio}
            </p>

            {/* Contact Info from Draft */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-4 pt-1 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{profile.location}</span>
              </span>

              <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors group"
                title="Click to copy email"
              >
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
                {copiedEmail && <Check className="w-3.5 h-3.5 text-emerald-400 ml-0.5" />}
              </button>

              <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>

              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors group"
                title="Click to copy phone"
              >
                <Phone className="w-4 h-4" />
                <span>{profile.phone}</span>
                {copiedPhone && <Check className="w-3.5 h-3.5 text-emerald-400 ml-0.5" />}
              </button>

              <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3">
              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Curriculum Vitae</span>
              </button>

              <button
                onClick={onOpenOfficeHours}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>Schedule Consultation / Office Hours</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>View Research Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
