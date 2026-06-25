'use client';

import Link from 'next/link';
import { ApplyButton } from '@/components/apply-button';
import { ArtistPathLogo } from '@/components/brand/artist-path-logo';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-peacock/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className="transition-opacity hover:opacity-80"
          aria-label="The Artist Path home"
        >
          <ArtistPathLogo variant="mark" className="h-10 w-auto" priority />
        </Link>

        <ApplyButton size="default" />
      </div>
    </header>
  );
}
