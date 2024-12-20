import { cn } from '../lib/utils';
import { Underline } from './Underline';

interface TitleProps {
  title: string;
  className?: string;
  underlineClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Title({ title, underlineClassName, className, as = 'h1' }: TitleProps) {
  const Heading = as;
  return (
    <>
      <Heading className={cn('mb-4 w-full text-center', className)}>{title}</Heading>
      <Underline className={cn('mx-auto', underlineClassName)} />
    </>
  );
}
