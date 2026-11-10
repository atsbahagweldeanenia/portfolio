import React, { useState } from 'react';
import { Download, Calendar, Edit3, Moon, Sun, Menu, X, Mail, Phone } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface NavbarProps {
  profile: Profile;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenOfficeHours: () => void;
  onOpenCVModal: () => void;
  onOpenEditor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  darkMode,
  onToggleDarkMode,
  onOpenOfficeHours,
  onOpenCVModal,
  onOpenEditor,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Single Brand Wordmark from draft */}
          <a
            href="#"
            className="text-sky-400 font-bold text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 hover:text-sky-300 transition-colors"
          >
            A. G. Weldeanenia
          </a>

          {/* Zone 2: Clean Nav Links from draft */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions & Quick Links */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              aria-label="Toggle visual theme"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark theme'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-400" />}
            </button>

            {/* Print / View CV */}
            <button
              onClick={onOpenCVModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="View & Download Curriculum Vitae"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Curriculum Vitae</span>
            </button>

            {/* Edit Mode */}
            <button
              onClick={onOpenEditor}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Edit profile or add new experience"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>

            {/* Primary Action: Contact / Office Hours */}
            <button
              onClick={onOpenOfficeHours}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Office Hours</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 text-sm font-medium text-slate-300 hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 rounded-lg"
              >
                <Download className="w-3.5 h-3.5 text-sky-400" />
                <span>Curriculum Vitae</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEditor();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 rounded-lg"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Portfolio</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
