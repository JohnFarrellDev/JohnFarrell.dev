import { cn } from '../Utilities/cn';

interface UnderlineProps {
  className?: string;
}

export function Underline({ className }: UnderlineProps) {
  return <div className={cn('bg-primary-600 mb-2 h-1 w-60 max-w-full', className)} />;
}
