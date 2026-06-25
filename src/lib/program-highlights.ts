import { siteConfig } from '@/lib/config';

export const programHighlightRows = [
  { label: 'DURATION', value: siteConfig.program.duration },
  { label: 'STARTS', value: siteConfig.program.startDate },
  { label: 'APPLY BY', value: siteConfig.program.registrationDeadline },
  { label: 'TOTAL SEATS', value: String(siteConfig.program.artistsSelected) },
  { label: 'FORMAT', value: siteConfig.program.format },
  { label: 'SCHOLARSHIP SEATS', value: siteConfig.program.scholarshipSeats },
  { label: 'PROGRAM FEES', value: siteConfig.program.programFees },
] as const;
