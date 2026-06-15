import { cn } from '@/lib/utils';

type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'muted' | 'accent' | 'glass-dark';
};

export function SurfaceCard({
  children,
  className,
  hover = false,
  variant = 'default',
}: SurfaceCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-200',
        variant === 'default' && 'border-brand-teal-deep/10 bg-white shadow-[0_4px_24px_-8px_rgba(8,61,58,0.12)]',
        variant === 'muted' && 'border-brand-teal-deep/10 bg-brand-cream-muted/60',
        variant === 'accent' && 'border-brand-pumpkin/20 bg-gradient-to-br from-brand-pumpkin-soft to-white shadow-sm',
        variant === 'glass-dark' &&
          'border-brand-cream/15 bg-brand-teal-mid/35 backdrop-blur-md shadow-[0_8px_32px_-12px_rgba(0,0,0,0.25)]',
        hover && 'hover:-translate-y-0.5 hover:border-brand-teal-deep/20 hover:shadow-[0_12px_40px_-12px_rgba(8,61,58,0.18)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
