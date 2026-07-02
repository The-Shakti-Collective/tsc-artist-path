import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import {
  ARTIST_PATH_PRIVACY_META,
  ARTIST_PATH_PRIVACY_SECTIONS,
  PRIVACY_POLICY_PATH,
} from '@/lib/privacyPolicyContent';

export const metadata: Metadata = {
  title: ARTIST_PATH_PRIVACY_META.title,
  description: ARTIST_PATH_PRIVACY_META.description,
};

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-brand-cream-wash pt-24 pb-8">
        <div className="mx-auto max-w-3xl px-4">
          <Link
            href="/"
            className="text-sm font-medium text-brand-teal-deep/70 transition-colors hover:text-brand-teal-deep"
          >
            ← Back to home
          </Link>

          <header className="mt-8 mb-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-peacock">
              Legal
            </p>
            <h1 className="font-display text-3xl font-bold text-brand-teal-deep sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-brand-teal-deep/70">
              Effective {ARTIST_PATH_PRIVACY_META.effectiveDate} · Applies to{' '}
              {ARTIST_PATH_PRIVACY_META.siteLabel}
            </p>
          </header>

          <div className="space-y-8">
            {ARTIST_PATH_PRIVACY_SECTIONS.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="font-display text-lg font-bold text-brand-teal-deep">
                  {section.title}
                </h2>
                <p className="text-sm leading-relaxed text-brand-teal-deep/80">{section.body}</p>
                {'list' in section && section.list ? (
                  <ul className="list-disc space-y-2 pl-5 text-sm text-brand-teal-deep/80">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {'extra' in section && section.extra ? (
                  <p className="text-sm leading-relaxed text-brand-teal-deep/80">{section.extra}</p>
                ) : null}
              </section>
            ))}
          </div>

          <p className="mt-12 text-xs text-brand-teal-deep/50">
            <Link href={PRIVACY_POLICY_PATH} className="hover:text-brand-teal-deep/70">
              {ARTIST_PATH_PRIVACY_META.siteLabel}
              {PRIVACY_POLICY_PATH}
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
