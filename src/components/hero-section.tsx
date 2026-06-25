'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ApplyButton } from '@/components/apply-button';
import { BrandPattern } from '@/components/brand/brand-pattern';
import { siteConfig } from '@/lib/config';

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const fade = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section className="relative overflow-hidden bg-brand-red-oxide bg-gradient-to-br from-brand-red-oxide via-brand-burgundy to-brand-espresso text-brand-cream">
      <BrandPattern variant="hero" className="pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <motion.h1
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance md:text-5xl lg:text-6xl"
            {...fade(0.1)}
          >
            Build Your Music Career.
            <span className="mt-2 block">Not Just Your Next Song.</span>
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-cream/90 md:text-xl"
            {...fade(0.22)}
          >
            A 9-month accelerator for independent artists ready to move from skill to career.
          </motion.p>
          <motion.div className="flex flex-col items-center gap-3 pt-2" {...fade(0.34)}>
            <ApplyButton size="lg" />
            <p className="text-sm text-brand-cream/80">{siteConfig.registrationOpenLabel}</p>
          </motion.div>
        </div>
      </div>

      <div className="relative leading-[0]">
        <svg className="w-full text-brand-cream-wash" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,40 C360,80 720,0 1080,40 C1260,56 1380,64 1440,56 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
