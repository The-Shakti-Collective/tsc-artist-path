import Link from 'next/link';
import { Music2 } from 'lucide-react';
import { ApplyButton } from '@/components/apply-button';
import { siteConfig } from '@/lib/config';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div
        className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-brand-teal-deep/10 bg-white/85 px-4 shadow-[0_8px_32px_-12px_rgba(8,61,58,0.18)] backdrop-blur-md transition-shadow duration-200 md:h-16 md:px-5"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg transition-colors duration-200 hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-teal-deep text-brand-cream shadow-sm">
            <Music2 className="h-5 w-5" aria-hidden />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-brand-teal-deep">
            {siteConfig.name}
          </span>
        </Link>
        <ApplyButton size="default" />
      </div>
    </header>
  );
}
