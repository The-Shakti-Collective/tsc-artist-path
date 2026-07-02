/**
 * Shared Artist Path content — used by TSC-Website and tsc-artist-path.
 *
 * Information architecture (scroll order):
 * 1. Hero — value prop, deadline, apply CTA, program stats
 * 2. Opportunity — market context, five career pillars
 * 3. Program overview — what it is / is not, pathway outcomes
 * 4. Origin story — trust and credibility
 * 5. Framework — Human → Career model
 * 6. Curriculum — six work phases with outputs
 * 7. Benefits — what artists receive
 * 8. Industry + business — ecosystem exposure
 * 9. Program structure — dates, seats, fees at a glance
 * 10. Qualification + selection — fit criteria and process
 * 11. FAQ — objections and logistics (qualification cluster first)
 * 12. Final CTA
 */

export const artistPathProgram = {
  registrationDeadline: '7th July',
  startDate: '7th August',
  duration: '9 Months',
  totalSeats: '30',
  format: 'Hybrid',
  scholarshipSeats: '5 (50%)',
  programFees: '₹1,00,000',
  timeCommitment: 'Consistent weekly participation',
  applyPath: '/artist-path/apply',
} as const;

export const artistPathHero = {
  title: 'Build Your Music Career.',
  subtitle: 'Not Just Your Next Song.',
  description:
    'A 9-month accelerator for independent artists ready to move from skill to career.',
  cta: 'Apply Now',
  deadlineNote: 'Registrations open till 7th July',
  /** Self-selection cues — surface near hero / who-should-apply to reduce unqualified applications */
  qualifiers: [
    'Independent artists creating original music',
    'Preferably with released or release-ready work',
    'Ready to commit consistently for 9 months',
  ],
} as const;

export const frameworkPillars = [
  { label: 'Human', description: 'Understand yourself.' },
  { label: 'Artist', description: 'Develop your identity.' },
  { label: 'Art', description: 'Create meaningful work.' },
  { label: 'Audience', description: 'Build connection and fandom.' },
  { label: 'Career', description: 'Create sustainable opportunities.' },
] as const;

export const workPhases = [
  {
    id: 'discover',
    title: 'Discover',
    intro: 'Clarify who you are as an artist and where you are headed:',
    bullets: ['Artistic identity', 'Strengths', 'Creative direction', 'Positioning'],
    outputs: ['Artist positioning document', 'Strength map', 'Career roadmap'],
  },
  {
    id: 'create',
    title: 'Create',
    intro: 'Develop and refine original work. Areas include:',
    bullets: ['Songwriting', 'Composition', 'Production', 'Recording', 'Collaboration'],
    outputs: ['2 to 4 release-ready songs', 'Sonic direction', 'EP or album roadmap'],
  },
  {
    id: 'curate',
    title: 'Curate',
    intro:
      'Not every song should be released. Not every opportunity should be pursued. Work on:',
    bullets: ['Song selection', 'Creative decisions', 'Release prioritization', 'Collaboration strategy'],
    outputs: ['Curated release plan'],
  },
  {
    id: 'launch',
    title: 'Launch',
    intro: 'Learn how to release professionally. Work on:',
    bullets: ['Distribution', 'Artist assets', 'Content strategy', 'Release planning'],
    outputs: ['Launch strategy', 'Artist profile', 'Professional presentation'],
  },
  {
    id: 'build-audience',
    title: 'Build Audience',
    intro: 'Create real audience connection. Work on:',
    bullets: ['Storytelling', 'Community', 'Content', 'Fan engagement'],
    outputs: ['Audience growth framework', 'Fandom strategy'],
  },
  {
    id: 'grow',
    title: 'Grow',
    intro: 'Prepare for the next level. Work on:',
    bullets: ['Live performances', 'Showcases', 'Industry opportunities', 'Long-term planning'],
    outputs: ['Performance readiness', 'Growth roadmap'],
  },
] as const;

/** Ordered by perceived value — mentoring and outcomes first */
export const artistBenefits = [
  'Group mentoring',
  'Personal interactions',
  'Industry workshops',
  'Showcase opportunities',
  'Release planning support',
  'Audio curation reviews',
  'Video concept reviews',
  'Rights and publishing guidance',
  'Industry exposure',
  'Access to TSC Academy learning programs',
  'Career roadmap',
] as const;

export const industryExposure = [
  'Producers',
  'Artist managers',
  'Publishers',
  'Distributors',
  'Venue owners',
  'Festival curators',
  'Streaming platforms',
  'Content creators',
  'Filmmakers',
  'Brand professionals',
] as const;

export const businessTopics = [
  'Copyright',
  'Publishing',
  'Royalties',
  'IPRS',
  'ISRA',
  'PPL',
  'Distribution',
  'Contracts',
  'Revenue streams',
  'Brand collaborations',
] as const;

export const whoShouldApply = [
  'Singer-songwriters',
  'Independent artists',
  'Original music creators',
  'Artists who have already released music',
  'Artists serious about building a career',
] as const;

/** Flat steps — matches selection timeline UI */
export const selectionSteps = [
  'Application Submission',
  'Artist Review',
  'Conversation with Team',
  'Final Selection',
] as const;

/**
 * Qualification and logistics FAQs first — reduces scroll-to-answer for high-anxiety questions.
 */
export const artistPathFaqs = [
  {
    question: 'Who is this program for?',
    answer:
      'Independent artists who are already creating original music and want to build a professional career.',
  },
  {
    question: 'Do I need to have released music before applying?',
    answer:
      'Yes, preferably. Artists should have original work available for review, whether released or ready for release.',
  },
  {
    question: 'Is this a music course?',
    answer:
      'No. The Artist Path is an artist accelerator. It focuses on the complete artist journey, not just skill development.',
  },
  {
    question: 'When is the last date to apply?',
    answer:
      'Registrations are open until 7th July. The program begins on 7th August.',
  },
  {
    question: 'Is the program genre specific?',
    answer: 'No. The Artist Path is genre-neutral. Artists from all musical backgrounds are welcome.',
  },
  {
    question: 'Is there an age limit?',
    answer:
      'No. The program is age-neutral. Selection is based on artistic potential, commitment and readiness.',
  },
  {
    question: 'How much time should I commit?',
    answer:
      'Artists should expect to commit consistently throughout the 9 months and actively participate in assignments, reviews and sessions.',
  },
  {
    question: 'What expenses are covered by the program?',
    answer:
      'The program provides guidance, mentoring and access. Any direct production, recording, video or marketing expenses remain the responsibility of the artist unless otherwise agreed.',
  },
  {
    question: 'Will TSC release my music?',
    answer:
      'Not necessarily. The program helps artists develop and launch their work, but participation does not guarantee a release through TSC.',
  },
  {
    question: 'Will I receive artist management?',
    answer:
      'No. The Artist Path is not a management agreement. However, exceptional artists may receive future opportunities within the TSC ecosystem.',
  },
  {
    question: 'What is the biggest outcome of the program?',
    answer:
      'Clarity. Artists leave with stronger identity, better music, professional understanding, audience-building systems, industry relationships, and a roadmap for sustainable growth.',
  },
] as const;

export const opportunityBullets = [
  'Release globally',
  'Build audiences directly',
  'Own their rights',
  'Monetize their work',
  'Perform across growing live circuits',
] as const;

/** Distinct from frameworkPillars — market-level career dimensions */
export const careerPillars = ['Identity', 'Craft', 'Audience', 'Industry', 'Opportunity'] as const;

export const notThisProgram = [
  'This is not a music course.',
  'This is not artist management.',
  'This is not a competition.',
] as const;

export const pathwayOutcomes = [
  'Discover who they are',
  'Create meaningful work',
  'Release professionally',
  'Build audience connection',
  'Understand the business of music',
  'Unlock opportunities',
] as const;

export const programGlance = [
  { label: 'Duration', value: artistPathProgram.duration },
  { label: 'Starts', value: artistPathProgram.startDate },
  { label: 'Apply By', value: artistPathProgram.registrationDeadline },
  { label: 'Format', value: artistPathProgram.format },
  { label: 'Total Seats', value: artistPathProgram.totalSeats },
  { label: 'Scholarship Seats', value: artistPathProgram.scholarshipSeats },
  { label: 'Program Fees', value: artistPathProgram.programFees },
  { label: 'Time Commitment', value: artistPathProgram.timeCommitment },
] as const;
