import React, { useState, useEffect } from 'react';
import type { Language } from '../data/portfolioData';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { AboutSection } from './AboutSection';
import { TechSection } from './TechSection';
import { LearningSection } from './LearningSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

export const PortfolioApp: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language | null;
    if (saved === 'es' || saved === 'en') {
      setLang(saved);
    } else {
      const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
      setLang(browserLang);
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
    document.title = PORTFOLIO_DATA[newLang].meta.title;
  };

  const data = PORTFOLIO_DATA[lang];

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 selection:bg-violet-500/30 selection:text-white">
      {/* Ambient background dot grid */}
      <div className="fixed inset-0 bg-grid-ambient opacity-60 pointer-events-none z-0 mask-radial-vignette" />
      
      {/* Top ambient radial gradient spotlight */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-violet-600/[0.07] via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

      {/* Main Content Layers */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          lang={lang}
          onLanguageChange={handleLanguageChange}
          content={data.nav}
        />

        <main className="flex-1">
          <Hero
            lang={lang}
            content={data.hero}
          />

          <AboutSection
            lang={lang}
            content={data.about}
          />

          <TechSection
            lang={lang}
            content={data.stackSection}
          />

          <LearningSection
            lang={lang}
            content={data.learningSection}
          />

          <ProjectsSection
            lang={lang}
            content={data.projectsSection}
          />

          <ContactSection
            lang={lang}
            content={data.contactSection}
          />
        </main>

        <Footer
          lang={lang}
          content={data.footer}
        />
      </div>
    </div>
  );
};
