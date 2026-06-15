import Image from 'next/image';
import { brandAssets } from '@/lib/brand-assets';
import { cn } from '@/lib/utils';

type ArtistPathLogoProps = {
  variant?: 'mark' | 'lockup';
  className?: string;
  priority?: boolean;
};

const sizes = {
  mark: { width: 80, height: 80, alt: 'The Artist Path mark' },
  lockup: { width: 320, height: 96, alt: 'The Artist Path' },
} as const;

export function ArtistPathLogo({
  variant = 'lockup',
  className,
  priority = false,
}: ArtistPathLogoProps) {
  const src = variant === 'mark' ? brandAssets.mark : brandAssets.lockup;
  const { width, height, alt } = sizes[variant];

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn('h-auto w-auto object-contain', className)}
    />
  );
}
