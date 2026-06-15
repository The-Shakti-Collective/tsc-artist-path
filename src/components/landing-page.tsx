'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { ApplyButton } from '@/components/apply-button';
import { SectionDivider } from '@/components/section-divider';
import { siteConfig } from '@/lib/config';
import {
  artistBenefits,
  businessTopics,
  careerPillars,
  faqs,
  frameworkPillars,
  industryExposure,
  notThisProgram,
  opportunityBullets,
  pathwayOutcomes,
  selectionSteps,
  whoShouldApply,
  workPhases,
} from '@/lib/content';
import { cn } from '@/lib/utils';

function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn('space-y-3', className)}>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-lg text-muted-foreground text-balance">{subtitle}</p> : null}
    </div>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-card/50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={cn('h-5 w-5 shrink-0 text-muted-foreground transition-transform', open && 'rotate-180')}
        />
      </button>
      {open ? (
        <div className="border-t border-border px-5 py-4 text-muted-foreground">{answer}</div>
      ) : null}
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="relative">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </Link>
          <ApplyButton size="default" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(38_72%_55%/_0.12),_transparent_55%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
          <div className="max-w-3xl space-y-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">The Artist Path</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-6xl">
              Build Your Music Career.
              <br />
              <span className="text-muted-foreground">Not Just Your Next Song.</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A 9-month accelerator for independent artists ready to move from skill to career.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Applications Open
              </span>
              <span className="text-sm text-muted-foreground">30 Artists Selected</span>
            </div>
            <ApplyButton size="lg" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Opportunity */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <SectionHeading title="The Opportunity Has Never Been Bigger" />
        <div className="mt-10 space-y-6 text-muted-foreground">
          <p className="text-lg text-foreground">India is one of the largest music markets in the world.</p>
          <p>Hundreds of millions of listeners stream music every day.</p>
          <p>Independent artists can now:</p>
          <BulletList items={opportunityBullets} />
          <p className="text-foreground">Yet most artists never realize their potential.</p>
          <p>Not because they lack talent.</p>
          <p className="font-medium text-foreground">Because talent alone is not enough.</p>
          <p>The artists who build careers understand:</p>
          <div className="flex flex-wrap gap-2">
            {careerPillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm text-foreground"
              >
                {pillar}
              </span>
            ))}
          </div>
          <p className="text-lg font-medium text-foreground">
            The Artist Path exists to help artists develop all five.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* What is */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <SectionHeading
          title="What Is The Artist Path?"
          subtitle="The Artist Path is a 9-month artist accelerator designed for independent artists who are serious about building a professional music career."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            {notThisProgram.map((line) => (
              <p key={line} className="text-muted-foreground">{line}</p>
            ))}
          </div>
          <div>
            <p className="mb-4 font-medium text-foreground">It is a structured pathway that helps artists:</p>
            <BulletList items={pathwayOutcomes} />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <SectionHeading title="Why We Built This" />
        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>
            Over the past 27 years, Rohith Sobti has worked across music labels, films, artists, IPs and talent
            ecosystems.
          </p>
          <p>
            He has worked with artists at different stages of their careers and has seen one recurring pattern:
          </p>
          <p className="text-lg font-medium text-foreground">Many talented artists never reach their potential.</p>
          <p>Not because they lack skill.</p>
          <p>
            Because they lack guidance, structure, industry understanding and the right opportunities at the right
            time.
          </p>
          <p className="text-lg font-medium text-foreground">The Artist Path was created to solve that problem.</p>
        </div>
      </section>

      <SectionDivider />

      {/* Framework */}
      <section className="border-y border-border bg-muted/30 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            title="The Framework"
            subtitle="This journey is at the heart of The Artist Path."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {frameworkPillars.map((pillar, index) => (
              <div
                key={pillar.label}
                className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-primary">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">{pillar.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work phases */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <SectionHeading title="What You Will Work On" />
        <div className="mt-12 space-y-10">
          {workPhases.map((phase) => (
            <div key={phase.id} className="rounded-xl border border-border bg-card/40 p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold">{phase.title}</h3>
              <p className="mt-4 text-muted-foreground">{phase.intro}</p>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <BulletList items={phase.bullets} />
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Outputs</p>
                  <BulletList items={phase.outputs} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Benefits */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <SectionHeading title="What Artists Receive" subtitle="Every selected artist receives:" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {artistBenefits.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-lg border border-border bg-muted/20 px-4 py-3 text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <SectionDivider />

      {/* Industry + Business */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading title="Industry Exposure" />
            <p className="mt-6 text-muted-foreground">
              Throughout the program, artists interact with professionals across the ecosystem including:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {industryExposure.map((role) => (
                <span key={role} className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground">
                  {role}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Because building a music career requires understanding more than music.
            </p>
          </div>
          <div>
            <SectionHeading title="Understanding The Business" />
            <p className="mt-6 text-muted-foreground">Artists will gain practical understanding of:</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {businessTopics.map((topic) => (
                <span key={topic} className="rounded-md bg-accent px-3 py-1.5 text-sm text-accent-foreground">
                  {topic}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium text-foreground">
              Every artist should understand how money flows through music.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Program structure */}
      <section className="border-y border-border bg-muted/30 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading title="Program Structure" />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Duration', value: siteConfig.program.duration },
              { label: 'Start Date', value: siteConfig.program.startDate },
              { label: 'Format', value: siteConfig.program.format },
              { label: 'Artists Selected', value: String(siteConfig.program.artistsSelected) },
              { label: 'Scholarship Seats', value: siteConfig.program.scholarshipSeats },
              { label: 'Artist Development Grant', value: siteConfig.program.developmentGrant },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-5">
                <dt className="text-sm text-muted-foreground">{item.label}</dt>
                <dd className="mt-1 font-display text-xl font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Who + Selection */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading title="Who Should Apply?" subtitle="This program is designed for:" />
            <BulletList items={whoShouldApply} />
          </div>
          <div>
            <SectionHeading title="Selection Process" />
            <ol className="mt-10 space-y-4">
              {selectionSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary"
                  >
                    {index + 1}
                  </span>
                  <span className="pt-1 text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 font-medium text-foreground">Only 30 artists will be selected.</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Final CTA */}
      <section id="apply" className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 md:p-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Final Thought</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>Most artists spend years trying to figure things out alone.</p>
            <p>
              The Artist Path exists to help artists move faster, make better decisions, and build a meaningful career
              with clarity, community and opportunity.
            </p>
            <p className="text-lg font-medium text-foreground">You already have the talent.</p>
            <p className="text-lg font-medium text-foreground">Are you ready to build the path?</p>
          </div>
          <div className="mt-8">
            <ApplyButton size="lg" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>
            A program by{' '}
            <a
              href={siteConfig.tscWebsiteUrl}
              className="text-foreground underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Shakti Collective
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
