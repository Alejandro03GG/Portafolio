import React, { useState } from 'react';
import type { Language, PortfolioContent } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  lang: Language;
  content: PortfolioContent['contactSection'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, content }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'ahernandezlara03@gmail.com';
  const phoneNumber = '+57 311 523 7212';
  const location = 'Bucaramanga, Colombia';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow & Title */}
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

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info Card (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="double-bezel rounded-3xl p-1.5">
                <div className="double-bezel-inner rounded-[calc(1.5rem-0.375rem)] bg-zinc-950/80 p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-6">
                      {content.directTitle}
                    </h3>

                    <div className="space-y-6">
                      {/* Email */}
                      <div className="flex items-start justify-between gap-3 group">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 text-violet-400" />
                          </div>
                          <div>
                            <span className="text-xs font-mono text-zinc-400 block">
                              {content.emailLabel}
                            </span>
                            <a
                              href={`mailto:${emailAddress}`}
                              className="text-sm font-medium text-white hover:text-violet-300 transition-colors"
                            >
                              {emailAddress}
                            </a>
                          </div>
                        </div>
                        <button
                          onClick={handleCopyEmail}
                          className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                          title="Copiar email"
                        >
                          {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-zinc-400 block">
                            {content.phoneLabel}
                          </span>
                          <a
                            href={`https://wa.me/573115237212`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-white hover:text-cyan-300 transition-colors"
                          >
                            {phoneNumber}
                          </a>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-zinc-400 block">
                            {content.locationLabel}
                          </span>
                          <span className="text-sm font-medium text-white">
                            {location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                      {content.socialLabel}
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/alejandro-hernandez-lara-657795127"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white hover:border-violet-500/40 transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4 text-violet-400" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/Alejandro03GG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white hover:border-violet-500/40 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 text-zinc-300" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="double-bezel rounded-3xl p-1.5">
                <div className="double-bezel-inner rounded-[calc(1.5rem-0.375rem)] bg-zinc-950/80 p-6 sm:p-8">
                  {isSubmitted ? (
                    <div className="py-12 flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {lang === 'es' ? 'Mensaje Preparado' : 'Message Ready'}
                      </h4>
                      <p className="text-sm text-zinc-400 max-w-sm mb-6">
                        {content.formSuccess}
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', message: '' });
                        }}
                        className="px-5 py-2 rounded-full bg-zinc-900 border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                      >
                        {lang === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-mono text-zinc-400 block mb-2">
                            {content.formName} *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'}
                            className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-violet-500/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-zinc-400 block mb-2">
                            {content.formEmail} *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="tu@email.com"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-violet-500/50 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-mono text-zinc-400 block mb-2">
                          {content.formMessage} *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={lang === 'es' ? 'Cuéntame sobre tu proyecto o propuesta...' : 'Tell me about your project or proposal...'}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 disabled:opacity-50 active:scale-[0.99] shadow-lg shadow-white/5"
                      >
                        {isSubmitting ? (
                          <span>{content.formSending}</span>
                        ) : (
                          <>
                            <span>{content.formSubmit}</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
