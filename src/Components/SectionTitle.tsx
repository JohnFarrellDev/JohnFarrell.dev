import { HTMLAttributes } from 'react';
import { cn } from '@/Utilities/cn';

interface SectionTitleProps extends HTMLAttributes<HTMLElement> {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export function SectionTitle({ children, as = 'h2', className, ...htmlProps }: SectionTitleProps) {
  const Tag = as;
  return (
    <Tag {...htmlProps} className={cn('tracking-normal', className)}>
      {children}
    </Tag>
  );
}
