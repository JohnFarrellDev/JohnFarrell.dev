import { cn } from '../lib/utils';
import { Underline } from './Underline';

interface TitleProps {
  title: string;
  underlineClassName?: string;
}

export function Title({ title, underlineClassName }: TitleProps) {
  return (
    <div className={'mb-4 text-center'}>
      <h2>{title}</h2>
      <Underline className={cn('mx-auto', underlineClassName)} />
    </div>
  );
}
