import React from 'react';
import type { Language, PortfolioContent } from '../data/portfolioData';
import { LEARNING_PILLARS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface LearningSectionProps {
  lang: Language;
  content: PortfolioContent['learningSection'];
}

export const LearningSection: React.FC<LearningSectionProps> = ({ lang, content }) => {
  return (
    <section id="learning" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
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

        {/* Learning Exploration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEARNING_PILLARS.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={0.1 * (idx + 1)}>
              <div className="double-bezel rounded-3xl p-1.5 transition-all duration-300 group h-full">
                <div className="double-bezel-inner rounded-[calc(1.5rem-0.375rem)] bg-zinc-950/85 p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Status & Domain Header */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-white/[0.06]">
                      <span className="text-[11px] font-mono text-cyan-400">
                        {pillar.domain[lang]}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-zinc-300">
                        {pillar.status[lang]}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                      {pillar.title[lang]}
                    </h3>

                    {/* Narrative */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-5">
                      {pillar.narrative[lang]}
                    </p>

                    {/* Current Exploration Focus */}
                    <div className="p-3 rounded-xl bg-cyan-500/[0.03] border border-cyan-500/10 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                        {lang === 'es' ? 'Investigación Actual:' : 'Current Exploration:'}
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {pillar.currentExploration[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-3 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.06] text-[11px] font-mono text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
