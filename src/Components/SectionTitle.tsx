import React, { HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLElement> {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export const SectionTitle = ({ children, as = 'h2', className, ...htmlProps }: SectionTitleProps) => {
  const Tag = as;
  return (
    <Tag {...htmlProps} className={cn('tracking-normal', className)}>
      {children}
    </Tag>
  );
};
