import React, { useState } from 'react';
import type { Language, PortfolioContent } from '../data/portfolioData';
import { PROBLEM_CASES, type ProblemCase } from '../data/portfolioData';
import { Brain, ArrowRight, ShieldCheck, Cpu, Terminal, CheckCircle2, Search, Wrench, Layers } from 'lucide-react';

interface ProblemSolvingSectionProps {
  lang: Language;
  content: PortfolioContent['problemSolvingSection'];
}

export const ProblemSolvingSection: React.FC<ProblemSolvingSectionProps> = ({ lang, content }) => {
  const [activeCase, setActiveCase] = useState<ProblemCase>(PROBLEM_CASES[0]);

  return (
    <section id="problem-solving" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
            {content.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {content.title}
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-400 mb-8">
            {content.subtitle}
          </p>

          {/* 3-Step Process Flow Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900/60 border border-white/[0.08] text-xs font-mono text-zinc-300">
              <Search className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>{content.methodology.step1}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900/60 border border-white/[0.08] text-xs font-mono text-zinc-300">
              <Brain className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{content.methodology.step2}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900/60 border border-white/[0.08] text-xs font-mono text-zinc-300">
              <Wrench className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{content.methodology.step3}</span>
            </div>
          </div>
        </div>

        {/* Case Studies Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Case Selector Tabs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {PROBLEM_CASES.map((item) => {
              const isSelected = activeCase.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCase(item)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'bg-zinc-900 border-emerald-500/50 shadow-xl shadow-emerald-500/5'
                      : 'bg-zinc-950/60 hover:bg-zinc-900/60 border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1.5">
                    {item.tag[lang]}
                  </span>
                  <h4 className="text-sm font-semibold text-white tracking-tight leading-snug line-clamp-2">
                    {item.title[lang]}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Interactive Case Deep Dive Pane (8 cols) */}
          <div className="lg:col-span-8 double-bezel rounded-3xl p-1.5">
            <div className="double-bezel-inner rounded-[calc(1.5rem-0.375rem)] bg-zinc-950/90 p-6 sm:p-8">
              
              {/* Case Header */}
              <div className="pb-6 border-b border-white/[0.06] mb-6">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium">
                  {activeCase.tag[lang]}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-3">
                  {activeCase.title[lang]}
                </h3>
              </div>

              {/* 1. Challenge */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-400 mb-2">
                  <Search className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'El Desafío Real:' : 'The Real Challenge:'}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                  {activeCase.challenge[lang]}
                </p>
              </div>

              {/* 2. Investigation & Engineering */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2">
                  <Brain className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Investigación & Decisión Técnica:' : 'Investigation & Technical Choice:'}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                  {activeCase.investigation[lang]}
                </p>
              </div>

              {/* 3. Solution & Architecture Outcome */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Arquitectura & Resultado Implementado:' : 'Architecture & Implemented Outcome:'}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal bg-emerald-500/[0.04] p-4 rounded-xl border border-emerald-500/20 mb-4">
                  {activeCase.solution[lang]}
                </p>

                {/* Key Architecture Points */}
                <ul className="space-y-2">
                  {activeCase.architecturePoints[lang].map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 mr-2">
                  {lang === 'es' ? 'Tecnologías:' : 'Technologies:'}
                </span>
                {activeCase.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/[0.06] text-xs font-mono text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
