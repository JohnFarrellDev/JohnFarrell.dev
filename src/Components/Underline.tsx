import React from 'react';
import { cn } from '../Utilities/cn';

interface UnderlineProps {
  className?: string;
}

export const Underline = ({ className }: UnderlineProps) => {
  return <div className={cn('mb-2 h-1 w-60 max-w-full bg-primary-600', className)} />;
};
