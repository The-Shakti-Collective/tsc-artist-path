import { ArtistPathLogo } from '@/components/brand/artist-path-logo';
import { BrandPattern } from '@/components/brand/brand-pattern';
import { CLARITY_SITE_DISCLOSURE } from '@/lib/clarityDisclosure';
import { siteConfig } from '@/lib/config';

export function SiteFooter() {
  const privacyHref = siteConfig.privacyPolicyUrl;

  return (
    <footer className="relative border-t border-brand-peacock/10 bg-brand-cream-muted">
      <BrandPattern variant="footer" className="pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-10">
        <p className="mx-auto mb-8 max-w-3xl text-center text-[11px] leading-relaxed text-brand-teal-deep/55">
          {CLARITY_SITE_DISCLOSURE.lead}{' '}
          {CLARITY_SITE_DISCLOSURE.agreement}{' '}
          Our{' '}
          <a
            href={privacyHref}
            className="underline underline-offset-2 transition-colors duration-200 hover:text-brand-teal-deep/80"
          >
            {CLARITY_SITE_DISCLOSURE.privacyLinkLabel}
          </a>{' '}
          has more details.
        </p>

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-brand-teal-deep/65 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <ArtistPathLogo variant="lockup" className="h-10" />
            <p>
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
          <p>
            A program by{' '}
            <a
              href={siteConfig.tscWebsiteUrl}
              className="cursor-pointer font-medium text-brand-teal-deep underline-offset-4 transition-colors duration-200 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Shakti Collective
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
