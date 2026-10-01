import React from 'react';
import type { Language, PortfolioContent } from '../data/portfolioData';
import { CORE_STACK } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { ScrollReveal } from './ScrollReveal';

interface TechSectionProps {
  lang: Language;
  content: PortfolioContent['stackSection'];
}

export const TechSection: React.FC<TechSectionProps> = ({ lang, content }) => {
  return (
    <section id="stack" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-violet-600/[0.04] blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
              {content.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {content.title}
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-zinc-400">
              {content.subtitle}
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Single Unified Marquee Ribbon */}
      <ScrollReveal delay={0.15}>
        <div className="relative w-full overflow-hidden py-4 border-y border-white/[0.06] bg-white/[0.01]">
          {/* Side gradient fade masks */}
          <div className="absolute left-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />
          
          <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
            {[...CORE_STACK, ...CORE_STACK].map((tech, idx) => (
              <div
                key={`${tech.id}-${idx}`}
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-violet-500/40 hover:bg-zinc-900 transition-all duration-300 shadow-lg group cursor-default"
              >
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-200">
                  <TechIcon id={tech.id} className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white tracking-tight group-hover:text-violet-300 transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 capitalize">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
