'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { ArtistPathIntroSection } from '@/components/artist-path-intro-section';
import { CurriculumSection } from '@/components/curriculum-section';
import { FaqSection } from '@/components/faq-section';
import { FinalCtaSection } from '@/components/final-cta-section';
import { FrameworkSection } from '@/components/framework-section';
import { HeroSection } from '@/components/hero-section';
import { ProgramAtAGlanceSection } from '@/components/program-at-a-glance-section';
import { SectionDivider } from '@/components/section-divider';
import { SiteHeader } from '@/components/site-header';
import { BrandPattern } from '@/components/brand/brand-pattern';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { SurfaceCard } from '@/components/ui/surface-card';
import { siteConfig } from '@/lib/config';
import {
  artistBenefits,
  businessTopics,
  careerPillars,
  industryExposure,
  notThisProgram,
  opportunityBullets,
  pathwayOutcomes,
  selectionSteps,
  whoShouldApply,
} from '@/lib/content';
import { cn } from '@/lib/utils';

const footerLinks = [
  { label: 'About', href: `${siteConfig.tscWebsiteUrl}/#about` },
  { label: 'Work', href: `${siteConfig.tscWebsiteUrl}/ip` },
  { label: 'Artists', href: `${siteConfig.tscWebsiteUrl}/artists` },
  { label: 'Resources', href: `${siteConfig.tscWebsiteUrl}/resources` },
  { label: 'TSC Academy', href: `${siteConfig.tscWebsiteUrl}/tscacademy` },
  { label: 'Stories', href: `${siteConfig.tscWebsiteUrl}/#stories` },
] as const;

function SectionHeading({
  title,
  subtitle,
  align = 'left',
  light,
  className,
}: {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('space-y-3', align === 'center' && 'mx-auto max-w-2xl text-center', className)}>
      <h2
        className={cn(
          'font-display text-3xl font-bold tracking-tight text-balance md:text-4xl',
          light ? 'text-brand-cream' : 'text-brand-teal-deep',
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'text-lg text-balance leading-relaxed',
            light ? 'text-brand-cream/85' : 'text-brand-teal-deep/80',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function LandingPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative bg-brand-cream-wash">
      <SiteHeader />
      <HeroSection />
      <ArtistPathIntroSection />
      <ProgramAtAGlanceSection />

      <section className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <BrandPattern variant="section" className="pointer-events-none absolute inset-0" />
        <div className="relative">
          <Reveal>
            <SectionEyebrow>Market context</SectionEyebrow>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <Reveal className="space-y-5 text-brand-teal-deep/85" delay={0.05}>
              <p className="text-lg font-semibold text-brand-teal-deep">
                India is one of the largest music markets in the world.
              </p>
              <p>Yet most artists never realize their potential.</p>
              <p className="font-semibold text-brand-teal-deep">Because talent alone is not enough.</p>
              <p>Not because they lack talent.</p>
              <p>Hundreds of millions of listeners stream music every day.</p>
              <p>Independent artists can now:</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {opportunityBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pumpkin" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>The artists who build careers understand:</p>
            </Reveal>
            <Reveal delay={0.12}>
              <SurfaceCard variant="accent" className="p-6 md:p-8">
                <div className="flex flex-wrap gap-3">
                  <SectionEyebrow>Identity</SectionEyebrow>
                  <SectionEyebrow>Craft</SectionEyebrow>
                </div>
                <SectionEyebrow className="mt-6">THE FIVE PILLARS</SectionEyebrow>
                <Stagger className="mt-4 flex flex-wrap gap-2">
                  {careerPillars.map((pillar) => (
                    <StaggerItem key={pillar}>
                      <motion.span
                        className="inline-block rounded-xl border border-brand-teal-deep/10 bg-white px-4 py-2 font-display text-sm font-bold text-brand-teal-deep shadow-sm"
                        whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                      >
                        {pillar}
                      </motion.span>
                    </StaggerItem>
                  ))}
                </Stagger>
                <p className="mt-8 font-display text-xl font-bold text-brand-teal-deep">
                  The Artist Path exists to help artists develop all five.
                </p>
              </SurfaceCard>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <SectionEyebrow>Program overview</SectionEyebrow>
          <SectionHeading
            className="mt-3"
            title="What Is The Artist Path?"
            subtitle="The Artist Path is a 9-month artist accelerator designed for independent artists who are serious about building a professional music career."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 font-semibold text-brand-teal-deep">It is a structured pathway that helps artists:</p>
        </Reveal>
        <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pathwayOutcomes.map((outcome) => (
            <StaggerItem key={outcome}>
              <SurfaceCard hover className="px-4 py-3 text-brand-teal-deep/90">
                {outcome}
              </SurfaceCard>
            </StaggerItem>
          ))}
        </Stagger>
        <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
          {notThisProgram.map((line) => (
            <StaggerItem key={line}>
              <SurfaceCard className="flex flex-col items-center p-6 text-center text-brand-teal-deep/80">
                <X className="mb-3 h-6 w-6 text-brand-burgundy" aria-hidden />
                {line}
              </SurfaceCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="relative overflow-hidden bg-brand-red-oxide bg-gradient-to-br from-brand-red-oxide via-brand-burgundy to-brand-espresso py-16 text-brand-cream md:py-24">
        <BrandPattern variant="hero" className="pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionEyebrow light>Origin story</SectionEyebrow>
            <SectionHeading className="mt-3" title="Why We Built This" light />
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Reveal delay={0.06}>
              <SurfaceCard variant="glass-dark" className="p-6 md:p-8">
                <p className="font-display text-2xl font-bold leading-snug md:text-3xl">
                  Many talented artists never reach their potential.
                </p>
                <p className="mt-4 text-brand-cream/85">
                  Not because they lack skill. Because they lack guidance, structure, industry understanding and the
                  right opportunities at the right time.
                </p>
              </SurfaceCard>
            </Reveal>
            <Reveal className="space-y-5 leading-relaxed text-brand-cream/85" delay={0.12}>
              <p>
                Over the past 27 years, Rohith Sobti has worked across music labels, films, artists, IPs and talent
                ecosystems.
              </p>
              <p>
                He has worked with artists at different stages of their careers and has seen one recurring pattern:
              </p>
              <p className="font-display text-xl font-bold text-white">
                The Artist Path was created to solve that problem.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FrameworkSection />

      <CurriculumSection />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <SectionEyebrow>included</SectionEyebrow>
          <SectionHeading className="mt-3" title="What Artists Receive" />
        </Reveal>
        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {artistBenefits.map((item) => (
            <StaggerItem key={item}>
              <SurfaceCard hover className="flex items-start gap-3 px-4 py-3.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-pumpkin" aria-hidden />
                <span className="text-brand-teal-deep/90">{item}</span>
              </SurfaceCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <SurfaceCard className="p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-brand-teal-deep">Industry Exposure</h3>
              <p className="mt-4 text-brand-teal-deep/75">
                Throughout the program, artists interact with professionals across the ecosystem including:
              </p>
              <Stagger className="mt-6 flex flex-wrap gap-2">
                {industryExposure.map((role) => (
                  <StaggerItem key={role}>
                    <motion.span
                      className="inline-block rounded-lg border border-brand-teal-deep/10 bg-brand-cream-muted/60 px-3 py-1.5 text-sm text-brand-teal-deep/85"
                      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                    >
                      {role}
                    </motion.span>
                  </StaggerItem>
                ))}
              </Stagger>
              <p className="mt-6 text-sm text-brand-teal-deep/65">
                Because building a music career requires understanding more than music.
              </p>
            </SurfaceCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SurfaceCard variant="accent" className="p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-brand-teal-deep">Understanding The Business</h3>
              <p className="mt-4 text-brand-teal-deep/75">Artists will gain practical understanding of:</p>
              <Stagger className="mt-6 flex flex-wrap gap-2">
                {businessTopics.map((topic) => (
                  <StaggerItem key={topic}>
                    <motion.span
                      className="inline-block rounded-lg bg-brand-peacock px-3 py-1.5 text-sm font-medium text-brand-cream"
                      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                    >
                      {topic}
                    </motion.span>
                  </StaggerItem>
                ))}
              </Stagger>
              <p className="mt-6 font-semibold text-brand-teal-deep">
                Every artist should understand how money flows through music.
              </p>
            </SurfaceCard>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading className="mt-3" title="Who Should Apply ?" />
            <Stagger className="mt-8 space-y-3">
              {whoShouldApply.map((item) => (
                <StaggerItem key={item}>
                  <SurfaceCard hover className="px-4 py-3 text-brand-teal-deep/90">
                    {item}
                  </SurfaceCard>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading className="mt-3" title="Selection Process" />
            <ol className="mt-8 space-y-6">
              {selectionSteps.map((step, index) => (
                <motion.li
                  key={step.number}
                  className="flex gap-4"
                  {...(!reduceMotion && {
                    initial: { opacity: 0, x: -16 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1, duration: 0.45 },
                  })}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-pumpkin font-display text-sm font-bold text-white shadow-soft">
                    {step.number}
                  </span>
                  <div className="space-y-1 pt-1">
                    {step.items.map((item) => (
                      <p key={item} className="text-brand-teal-deep/90">
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <FaqSection />

      <FinalCtaSection />

      <footer className="relative border-t border-brand-peacock/10 bg-brand-cream-muted">
        <BrandPattern variant="footer" className="pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-10">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-brand-teal-deep/75">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-brand-teal-deep"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="mt-6 text-center text-sm text-brand-teal-deep/60">
            © {new Date().getFullYear()} The Shakti Collective
          </p>
        </div>
      </footer>
    </div>
  );
}
