import React from 'react';
import type { Language, PortfolioContent } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  lang: Language;
  content: PortfolioContent['footer'];
}

export const Footer: React.FC<FooterProps> = ({ lang, content }) => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 border-t border-white/[0.06] bg-zinc-950/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-white/[0.08] flex items-center justify-center text-[10px] font-mono font-bold text-white">
              AH
            </span>
            <span className="text-sm font-semibold text-white">
              Alejandro Hernández Lara
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} · {content.rights}
          </p>
        </div>

        {/* Right: Back to top + Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Alejandro03GG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-hernandez-lara-657795127"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
