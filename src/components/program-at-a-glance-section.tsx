'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/motion/reveal';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { SurfaceCard } from '@/components/ui/surface-card';
import { programHighlightRows } from '@/lib/program-highlights';

export function ProgramAtAGlanceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-brand-teal-deep md:text-4xl">
          Program at a Glance
        </h2>
      </Reveal>
      <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {programHighlightRows.map((item) => (
          <StaggerItem key={item.label}>
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
            >
              <SurfaceCard hover className="p-6 text-center">
                <dt className="text-xs font-bold uppercase tracking-[0.15em] text-brand-teal-deep/60">
                  {item.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-bold text-brand-teal-deep">{item.value}</dd>
              </SurfaceCard>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
