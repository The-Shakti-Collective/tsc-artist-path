'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '@/lib/content';
import { Reveal } from '@/components/motion/reveal';
import { SurfaceCard } from '@/components/ui/surface-card';
import { cn } from '@/lib/utils';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <SurfaceCard className="overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-brand-cream-muted/40"
        aria-expanded={open}
      >
        <span className="font-medium text-brand-teal-deep">{question}</span>
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
            key="answer"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-brand-teal-deep/10 px-5 py-4 leading-relaxed text-brand-teal-deep/80">
              {answer}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SurfaceCard>
  );
}

export function FaqSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand-teal-deep md:text-4xl">
          Frequently Asked Questions
        </h2>
      </Reveal>
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((faq, index) => (
          <Reveal key={faq.question} delay={index * 0.03}>
            <FaqItem question={faq.question} answer={faq.answer} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
