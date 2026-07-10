import {
  CLARITY_PRIVACY_POLICY_DISCLOSURE,
  MICROSOFT_PRIVACY_STATEMENT_URL,
} from '@/lib/clarityDisclosure';
import { siteConfig } from '@/lib/config';

export const PRIVACY_POLICY_PATH = '/privacy';

export const ARTIST_PATH_PRIVACY_META = {
  title: 'Privacy Policy — The Artist Path',
  description:
    'How The Artist Path (theartistpath.in) collects, uses, and protects your information when you visit our site or apply to the program.',
  effectiveDate: 'July 2, 2026',
  siteLabel: 'theartistpath.in',
  contactEmail: 'hello@theshakticollective.in',
  parentOrgUrl: siteConfig.tscWebsiteUrl,
} as const;

export const ARTIST_PATH_PRIVACY_SECTIONS = [
  {
    title: '1. Who we are',
    body: `The Artist Path is a program by The Shakti Collective. This Privacy Policy applies to ${ARTIST_PATH_PRIVACY_META.siteLabel} and related public pages for the Artist Path accelerator. It does not cover the CoreKnot workspace or other internal TSC products.`,
  },
  {
    title: '2. Information we collect',
    body: 'We may collect:',
    list: [
      'Contact and profile details you submit when applying or enquiring (name, email, phone, artist information, links, and application responses).',
      'Communications you send us about the program.',
      'Usage data such as pages viewed, device type, browser, and referral source.',
      'Cookies and similar technologies for site functionality and analytics.',
    ],
  },
  {
    title: '3. How we use your information',
    body: 'We use your information to:',
    list: [
      'Review and process Artist Path applications.',
      'Communicate about your application, program updates, and onboarding.',
      'Improve our landing pages, content, and applicant experience.',
      'Measure interest in the program and our marketing.',
      'Maintain site security and comply with law.',
    ],
  },
  {
    title: '4. Analytics & Microsoft Clarity',
    body: CLARITY_PRIVACY_POLICY_DISCLOSURE,
    extra: `For more information about how Microsoft collects and uses data, see Microsoft's privacy statement: ${MICROSOFT_PRIVACY_STATEMENT_URL}.`,
  },
  {
    title: '5. Sharing & processors',
    body: 'We do not sell your personal information. We may share data with service providers who help us host the site, deliver email, process applications, or run analytics, under obligations to protect your data.',
  },
  {
    title: '6. Applications on the main TSC site',
    body: `Program applications may be completed on our main website (${ARTIST_PATH_PRIVACY_META.parentOrgUrl}). Information submitted there is also handled under The Shakti Collective privacy practices described on that site.`,
  },
  {
    title: '7. Your choices & rights',
    body: `You may request access, correction, or deletion of your personal information, or object to certain processing, by emailing ${ARTIST_PATH_PRIVACY_META.contactEmail}.`,
  },
  {
    title: '8. Changes & contact',
    body: `We may update this policy; the effective date above reflects the latest version. Questions: ${ARTIST_PATH_PRIVACY_META.contactEmail}.`,
  },
] as const;
