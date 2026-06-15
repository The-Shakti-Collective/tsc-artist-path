import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';

type ApplyButtonProps = {
  className?: string;
  size?: 'default' | 'lg';
};

export function ApplyButton({ className, size = 'default' }: ApplyButtonProps) {
  const externalApply = siteConfig.applyUrl?.trim();
  const href = externalApply || '/apply';
  const isExternal = Boolean(externalApply);

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all',
    'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    size === 'lg' ? 'h-12 px-8 text-base' : 'h-11 px-6 text-sm',
    className,
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        Apply Now
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      Apply Now
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
