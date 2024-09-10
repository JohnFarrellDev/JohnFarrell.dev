import { cn } from '../lib/utils';

interface ArticleTimeStampsProps {
  createdAt: Date;
  lastUpdated?: Date;
  className?: string;
}

export function ArticleTimeStamps({ createdAt, lastUpdated, className }: ArticleTimeStampsProps) {
  return (
    <div className={cn('gap-1-p flex flex-col', className)}>
      <span className="text-base font-bold">Published: {toDisplayDate(createdAt)}</span>
      {lastUpdated && <span className="text-base font-bold">Last Updated: {toDisplayDate(lastUpdated)}</span>}
    </div>
  );
}

const threeLetterMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function toDisplayDate(date: Date) {
  return `${threeLetterMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
