'use client';

import { ApplyButton } from '@/components/apply-button';
import { Reveal } from '@/components/motion/reveal';
import { siteConfig } from '@/lib/config';

export function ArtistPathIntroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Reveal className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand-teal-deep md:text-4xl">
          The Artist Path
        </h2>
        <ApplyButton size="lg" label={siteConfig.enrollButtonLabel} />
      </Reveal>
    </section>
  );
}
