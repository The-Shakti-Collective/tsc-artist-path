'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { frameworkPillars } from '@/lib/content';
import { Reveal } from '@/components/motion/reveal';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { SurfaceCard } from '@/components/ui/surface-card';
import { cn } from '@/lib/utils';

/** Wix blank-4 pentagon layout: top row 5-3-1, bottom row 4-2 */
const frameworkLayout = [
  { pillarIndex: 0, displayNum: 5, className: 'lg:col-start-1 lg:row-start-1' },
  { pillarIndex: 1, displayNum: 3, className: 'lg:col-start-2 lg:row-start-1' },
  { pillarIndex: 2, displayNum: 1, className: 'lg:col-start-3 lg:row-start-1' },
  { pillarIndex: 3, displayNum: 4, className: 'lg:col-start-1 lg:row-start-2 lg:col-span-1 lg:justify-self-end' },
  { pillarIndex: 4, displayNum: 2, className: 'lg:col-start-3 lg:row-start-2 lg:justify-self-start' },
] as const;

export function FrameworkSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <SectionEyebrow>The model</SectionEyebrow>
        <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-brand-teal-deep md:text-4xl">
          The Framework
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-teal-deep/80">
          This journey is at the heart of The Artist Path.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full text-brand-peacock/20 lg:block"
          viewBox="0 0 800 420"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M130 80 L400 40 L670 80 L580 320 L220 320 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <circle cx="400" cy="200" r="48" fill="rgb(var(--brand-peacock-soft-rgb))" opacity="0.5" />
        </svg>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-6">
          {frameworkLayout.map((slot, index) => {
            const pillar = frameworkPillars[slot.pillarIndex];
            const card = (
              <SurfaceCard hover className="relative h-full p-6 text-center">
                <p className="font-display text-3xl font-bold text-brand-pumpkin">{slot.displayNum}</p>
                <h3 className="mt-3 font-display text-xl font-bold capitalize text-brand-teal-deep">
                  {pillar.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-teal-deep/70">{pillar.description}</p>
              </SurfaceCard>
            );

            if (reduceMotion) {
              return (
                <div key={pillar.label} className={cn(slot.className)}>
                  {card}
                </div>
              );
            }

            return (
              <motion.div
                key={pillar.label}
                className={cn(slot.className)}
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
