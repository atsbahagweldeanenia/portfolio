/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PortfolioData } from './types/portfolio';
import { FACTUAL_PORTFOLIO_DATA } from './data/defaultPortfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationAndCredentialsSection } from './components/EducationAndCredentialsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { PrintableCVModal } from './components/PrintableCVModal';
import { OfficeHoursModal } from './components/OfficeHoursModal';
import { PortfolioEditorModal } from './components/PortfolioEditorModal';

const STORAGE_KEY = 'atsbaha_factual_portfolio_v2';
const THEME_KEY = 'atsbaha_dark_mode_v2';

export default function App() {
  // Theme state: defaults to dark matching user's HTML draft palette (#0f172a & #38bdf8)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved !== null) return saved === 'true';
      return true; // dark by default as in user draft
    }
    return true;
  });

  // Portfolio state populated strictly with user's factual draft
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            ...FACTUAL_PORTFOLIO_DATA,
            ...parsed,
            profile: {
              ...FACTUAL_PORTFOLIO_DATA.profile,
              ...(parsed.profile || {}),
              avatarUrl: FACTUAL_PORTFOLIO_DATA.profile.avatarUrl,
            },
          };
        }
      } catch (e) {
        console.error('Error loading portfolio data:', e);
      }
    }
    return FACTUAL_PORTFOLIO_DATA;
  });

  // Modals state
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isOfficeHoursOpen, setIsOfficeHoursOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Sync dark class on document root
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleSaveData = (updatedData: PortfolioData) => {
    setPortfolioData(updatedData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    } catch (e) {
      console.error('Error saving portfolio data:', e);
    }
  };

  const handleResetData = () => {
    setPortfolioData(FACTUAL_PORTFOLIO_DATA);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing portfolio data:', e);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 transition-colors selection:bg-sky-500 selection:text-slate-950 font-sans">
      {/* Navigation */}
      <Navbar
        profile={portfolioData.profile}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenOfficeHours={() => setIsOfficeHoursOpen(true)}
        onOpenCVModal={() => setIsCVModalOpen(true)}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      {/* Main Content Sections from Draft */}
      <main>
        {/* Hero Section */}
        <HeroSection
          profile={portfolioData.profile}
          onOpenOfficeHours={() => setIsOfficeHoursOpen(true)}
          onOpenCVModal={() => setIsCVModalOpen(true)}
        />

        {/* Experience Section */}
        <ExperienceSection
          experience={portfolioData.experience}
        />

        {/* Education & Credentials Tabs */}
        <EducationAndCredentialsSection
          degrees={portfolioData.degrees}
          certifications={portfolioData.certifications}
        />

        {/* Key Projects & Research Section */}
        <ProjectsSection
          projects={portfolioData.projects}
        />

        {/* Interactive Skills Filter Section */}
        <SkillsSection
          skills={portfolioData.skills}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={portfolioData.profile}
        onOpenCVModal={() => setIsCVModalOpen(true)}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      {/* Printable CV Modal */}
      <PrintableCVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        data={portfolioData}
      />

      {/* Office Hours / Consultation Modal */}
      <OfficeHoursModal
        isOpen={isOfficeHoursOpen}
        onClose={() => setIsOfficeHoursOpen(false)}
        profile={portfolioData.profile}
      />

      {/* Portfolio Editor Modal */}
      <PortfolioEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        data={portfolioData}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
}
