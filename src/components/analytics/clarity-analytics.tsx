'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initClarity, isClarityEnabled, trackClarityPage } from '@/lib/clarity';

/** Initializes Microsoft Clarity and tags each client route for session filtering. */
export function ClarityAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isClarityEnabled()) return;
    initClarity();
  }, []);

  useEffect(() => {
    if (!isClarityEnabled()) return;
    trackClarityPage(pathname);
  }, [pathname]);

  return null;
}
