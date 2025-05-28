import { cn } from '../lib/utils';

interface ArticleTimeStampsProps {
  createdAt: Date;
  lastUpdated?: Date;
  className?: string;
}

export function ArticleTimeStamps({ createdAt, lastUpdated, className }: ArticleTimeStampsProps) {
  return (
    <div className={cn('mx-auto w-fit space-y-1-p', className)}>
      <p className="text-base font-bold text-gray-800">Published: {toDisplayDate(createdAt)}</p>
      {lastUpdated && <p className="text-base font-bold text-gray-800">Last Updated: {toDisplayDate(lastUpdated)}</p>}
    </div>
  );
}

const threeLetterMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function toDisplayDate(date: Date) {
  return `${threeLetterMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
