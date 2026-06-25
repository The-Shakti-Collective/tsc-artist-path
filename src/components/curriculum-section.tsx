'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { workPhases } from '@/lib/content';
import { Reveal } from '@/components/motion/reveal';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { SurfaceCard } from '@/components/ui/surface-card';
import { cn } from '@/lib/utils';

export function CurriculumSection() {
  const [openId, setOpenId] = useState<string>(workPhases[0].id);
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-brand-cream-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionEyebrow>Curriculum</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-teal-deep md:text-4xl">
            What You Will Work On
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {workPhases.map((phase, index) => {
            const open = openId === phase.id;

            return (
              <Reveal key={phase.id} delay={index * 0.04}>
                <SurfaceCard className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenId((current) => (current === phase.id ? '' : phase.id))}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-brand-cream-muted/50"
                    aria-expanded={open}
                  >
                    <span className="font-display text-xl font-bold text-brand-teal-deep md:text-2xl">
                      {phase.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-brand-teal-deep/60 transition-transform duration-300',
                        open && 'rotate-180',
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        key="content"
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-brand-teal-deep/10 px-5 py-5 md:px-8 md:py-6">
                          <p className="font-semibold text-brand-teal-deep">{phase.intro}</p>
                          <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <ul className="space-y-2">
                              {phase.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-2 text-brand-teal-deep/85">
                                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                            <div className="rounded-xl bg-brand-green-soft/60 p-4">
                              <p className="text-xs font-bold uppercase tracking-widest text-brand-green">
                                OUTPUTS:
                              </p>
                              <ul className="mt-3 space-y-2">
                                {phase.outputs.map((output) => (
                                  <li key={output} className="flex gap-2 text-sm text-brand-teal-deep/90">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-pumpkin" aria-hidden />
                                    {output}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </SurfaceCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
