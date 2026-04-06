import { cn } from '@/Utilities/cn';

interface TitleProps {
  title: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Title({ title, className, as = 'h1' }: TitleProps) {
  const Heading = as;
  return (
    <Heading
      className={cn(
        'decoration-primary-600 mb-4 w-full text-center underline decoration-4 underline-offset-12',
        className
      )}
    >
      {title}
    </Heading>
  );
}
