import React, { useState, useEffect } from 'react';
import type { Language, PortfolioContent } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, FileText, ChevronDown } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  content: PortfolioContent['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: content.about },
    { href: '#stack', label: content.stack },
    { href: '#learning', label: content.learning },
    { href: '#projects', label: content.projects },
    { href: '#contact', label: content.contact },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-2xl shadow-black/80'
            : 'bg-zinc-950/80 backdrop-blur-md border border-white/[0.08]'
        }`}
      >
        {/* Brand Monogram */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-white font-bold tracking-tight text-sm focus:outline-none"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-mono font-semibold text-zinc-200 group-hover:border-violet-500/50 group-hover:text-violet-300 transition-colors">
            AH
          </span>
          <span className="hidden sm:inline-block font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors">
            Alejandro H.
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions: Language Switcher + CV Button */}
        <div className="flex items-center gap-2">
          {/* Language Toggle Pill */}
          <div className="flex items-center p-0.5 rounded-full bg-zinc-900 border border-white/[0.08] text-[11px] font-mono">
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === 'es'
                  ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Cambiar a Español"
            >
              ES
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* CV Direct Download Button & Optional Dropdown */}
          <div className="relative flex items-center">
            <a
              href={lang === 'es' ? '/cv/Alejandro_Hernandez_CV_ES.pdf' : '/cv/Alejandro_Hernandez_CV_EN.pdf'}
              download={lang === 'es' ? 'Alejandro_Hernandez_CV_ES.pdf' : 'Alejandro_Hernandez_CV_EN.pdf'}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] text-xs font-medium text-white transition-all duration-200 focus:outline-none"
              title={lang === 'es' ? 'Descargar CV en Español (PDF)' : 'Download English Resume (PDF)'}
            >
              <FileText className="w-3.5 h-3.5 text-violet-400" />
              <span>{content.cvBtn}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.1] text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl md:hidden pointer-events-auto flex flex-col justify-between p-6 pt-24 animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-lg font-medium text-zinc-200 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/[0.08]">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
              Curriculum Vitae
            </div>
            <a
              href={lang === 'es' ? '/cv/Alejandro_Hernandez_CV_ES.pdf' : '/cv/Alejandro_Hernandez_CV_EN.pdf'}
              download={lang === 'es' ? 'Alejandro_Hernandez_CV_ES.pdf' : 'Alejandro_Hernandez_CV_EN.pdf'}
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-sm text-zinc-200"
            >
              <span>{content.cvBtn} ({lang.toUpperCase()})</span>
              <FileText className="w-4 h-4 text-violet-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
