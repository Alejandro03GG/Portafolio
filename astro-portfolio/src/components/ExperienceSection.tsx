import React from 'react';
import type { Language, PortfolioContent } from '../data/portfolioData';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface ExperienceSectionProps {
  lang: Language;
  content: PortfolioContent['experienceSection'];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang, content }) => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow & Title */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
            {content.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {content.title}
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-400">
            {content.subtitle}
          </p>
        </div>

        {/* Confidentiality Notice */}
        <div className="max-w-3xl mx-auto mb-14 p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center gap-3 text-xs text-zinc-400">
          <ShieldAlert className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>{content.confidentialNote}</span>
        </div>

        {/* Timeline / Cards Stack */}
        <div className="flex flex-col gap-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="double-bezel rounded-3xl p-1.5 transition-all duration-300"
            >
              <div className="double-bezel-inner rounded-[calc(1.5rem-0.375rem)] bg-zinc-950/80 p-6 sm:p-8">
                {/* Header: Company, Role, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-[11px]">
                        {exp.role[lang]}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-zinc-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Summary narrative */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed my-6 font-normal">
                  {exp.description[lang]}
                </p>

                {/* Key Responsibilities Bullet List */}
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                    {lang === 'es' ? 'Responsabilidades & Tareas Ejecutadas:' : 'Core Responsibilities & Deliverables:'}
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.responsibilities[lang].map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies pills */}
                <div className="pt-4 border-t border-white/[0.04] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400 mr-2">
                    Stack:
                  </span>
                  {exp.technologies.map((t) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
