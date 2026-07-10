import { siteConfig } from '@/lib/config';
import {
  artistBenefits,
  artistPathFaqs,
  businessTopics,
  careerPillars,
  frameworkPillars,
  industryExposure,
  notThisProgram,
  opportunityBullets,
  pathwayOutcomes,
  selectionSteps,
  whoShouldApply,
  workPhases,
} from '@/lib/artist-path-content';

export {
  artistBenefits,
  businessTopics,
  careerPillars,
  frameworkPillars,
  industryExposure,
  notThisProgram,
  opportunityBullets,
  pathwayOutcomes,
  selectionSteps,
  whoShouldApply,
  workPhases,
};

export const faqs = artistPathFaqs.map((faq) => {
  if (faq.question === 'When is the last date to apply?') {
    return {
      ...faq,
      answer: `Registrations are open until ${siteConfig.program.registrationDeadline}. The program begins on ${siteConfig.program.startDate}.`,
    };
  }
  return faq;
});
