import React from 'react';
import type { Language, PortfolioContent } from '../data/portfolioData';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

interface ProjectsSectionProps {
  lang: Language;
  content: PortfolioContent['projectsSection'];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang, content }) => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
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

        {/* Projects Cards List */}
        <div className="flex flex-col gap-14">
          {PROJECTS.map((project, idx) => (
            <ScrollReveal key={project.id} delay={0.15}>
              <div className="double-bezel rounded-3xl p-2 transition-all duration-500 group">
                <div className="double-bezel-inner rounded-[calc(1.5rem-0.25rem)] bg-zinc-950/85 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Preview (50%) */}
                  <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900 group-hover:border-violet-500/30 transition-all duration-300">
                    <div className="aspect-[16/10] w-full overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Details (50%) */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                      {/* Title & Featured Badge */}
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors duration-200">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-[10px] font-mono uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <p className="text-xs sm:text-sm font-medium text-violet-400 mb-4 font-mono leading-relaxed">
                        {project.subtitle[lang]}
                      </p>

                      {/* Clean Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-6">
                        {project.description[lang]}
                      </p>

                      {/* Key Highlights / Contributions */}
                      <div className="mb-6">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                          {content.highlightsLabel}
                        </span>
                        <ul className="space-y-2.5">
                          {project.highlights[lang].map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/[0.06] text-xs font-mono text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions / Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-lg active:scale-[0.98]"
                        >
                          <span>{content.viewLive}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.1] text-zinc-200 hover:text-white font-medium text-xs sm:text-sm transition-colors active:scale-[0.98]"
                        >
                          <GithubIcon className="w-4 h-4 text-zinc-400" />
                          <span>{content.viewCode}</span>
                        </a>
                      )}
                    </div>

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
