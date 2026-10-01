import React from 'react';
import type { Language, PortfolioContent } from '../data/portfolioData';
import { ArrowRight, Mail, FileDown } from 'lucide-react';

interface HeroProps {
  lang: Language;
  content: PortfolioContent['hero'];
}

export const Hero: React.FC<HeroProps> = ({ lang, content }) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-violet-600/[0.08] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-500/[0.05] blur-[100px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Greeting & Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3">
          <span className="block text-zinc-400 text-lg sm:text-xl md:text-2xl font-mono font-normal mb-2 tracking-normal">
            {content.greeting}
          </span>
          <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            {content.name}
          </span>
        </h1>

        {/* Desarrollador de Software */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent tracking-tight">
            {content.role}
          </span>
        </div>

        {/* Statement / Bio */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed mb-10 font-normal">
          {content.statement}
        </p>

        {/* Call to Actions (Nested Button-in-Button Pattern) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {/* Primary CTA: Explore Projects */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-100 transition-all duration-300 shadow-xl shadow-white/5 active:scale-[0.98]"
          >
            <span>{content.ctaProjects}</span>
            <span className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center text-white group-hover:scale-105 group-hover:translate-x-0.5 transition-transform duration-200">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          {/* Secondary CTA: Contact */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/[0.1] text-zinc-200 hover:text-white font-medium text-sm transition-all duration-200 active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>{content.ctaContact}</span>
          </a>

          {/* CV Direct Button */}
          <a
            href={lang === 'es' ? '/cv/Alejandro_Hernandez_CV_ES.pdf' : '/cv/Alejandro_Hernandez_CV_EN.pdf'}
            download={lang === 'es' ? 'Alejandro_Hernandez_CV_ES.pdf' : 'Alejandro_Hernandez_CV_EN.pdf'}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent hover:bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-zinc-200 font-medium text-sm transition-all duration-200"
          >
            <FileDown className="w-4 h-4" />
            <span>{content.ctaCv}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
