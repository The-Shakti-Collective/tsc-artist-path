import { siteConfig } from '@/lib/config';
import { artistPathProgram } from '@/lib/artist-path-content';

export const programHighlightRows = [
  { label: 'Duration', value: siteConfig.program.duration },
  { label: 'Start Date', value: siteConfig.program.startDate },
  { label: 'Apply By', value: siteConfig.program.registrationDeadline },
  { label: 'Format', value: siteConfig.program.format },
  { label: 'Artists Selected', value: String(siteConfig.program.artistsSelected) },
  { label: 'Scholarship Seats', value: siteConfig.program.scholarshipSeats },
  { label: 'Program Fees', value: siteConfig.program.programFees },
  { label: 'Time Commitment', value: artistPathProgram.timeCommitment },
] as const;
