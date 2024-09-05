import { Underline } from './Underline';

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <div className="mb-4 text-center">
      <h2>{title}</h2>
      <Underline className="mx-auto" />
    </div>
  );
}
