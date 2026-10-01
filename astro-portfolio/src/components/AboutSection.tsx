import React from 'react';
import type { Language, PortfolioContent } from '../data/portfolioData';
import { Layers, Bot, Database, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  lang: Language;
  content: PortfolioContent['about'];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, content }) => {
  const icons = [
    <Layers className="w-5 h-5 text-violet-400" />,
    <Bot className="w-5 h-5 text-cyan-400" />,
    <Database className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-start mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
              {content.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
              {content.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* Narrative & Focus Pillars Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Philosophical Stance (6 cols) */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.1} className="h-full">
              <div className="double-bezel rounded-3xl p-1.5 h-full">
                <div className="double-bezel-inner rounded-[calc(1.5rem-0.375rem)] bg-zinc-950/85 p-6 sm:p-8 h-full flex flex-col justify-center">
                  <div className="space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    <p className="text-lg font-medium text-white leading-relaxed">
                      {content.intro}
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      {content.subIntro}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 3 Core Focus Pillars (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4 justify-between">
            {content.focusAreas.map((area, idx) => (
              <ScrollReveal key={idx} delay={0.15 + idx * 0.1}>
                <div className="double-bezel rounded-2xl p-1.5">
                  <div className="double-bezel-inner rounded-[calc(1rem-0.25rem)] bg-zinc-950/85 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                        {icons[idx] || <CheckCircle2 className="w-4 h-4 text-violet-400" />}
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-11">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
