import Clarity from '@microsoft/clarity';

export const CLARITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() ?? '';

export function isClarityEnabled(): boolean {
  return Boolean(CLARITY_PROJECT_ID);
}

export function initClarity(): void {
  if (!isClarityEnabled() || typeof window === 'undefined') return;
  Clarity.init(CLARITY_PROJECT_ID);
}

export function trackClarityPage(path: string): void {
  if (!isClarityEnabled()) return;
  Clarity.setTag('page', path);
}

export function clarityEvent(eventName: string): void {
  if (!isClarityEnabled()) return;
  Clarity.event(eventName);
}
