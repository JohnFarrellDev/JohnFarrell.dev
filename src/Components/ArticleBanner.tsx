import { ArticleTimeStamps } from './ArticleTimeStamps';
import { Title } from './Title';

interface ArticleBannerProps {
  title: string;
  createdAt?: Date;
  lastUpdated?: Date;
}

export function ArticleBanner({ title, createdAt, lastUpdated }: ArticleBannerProps) {
  return (
    <header className="relative mb-6-p bg-gradient-to-r from-blue-100 to-blue-200 py-8 full-bleed">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
                45deg,
                white,
                white 20px,
                transparent 20px,
                transparent 40px
              )`,
          opacity: 0.3,
        }}
      />
      <div className="relative">
        <div className="mx-auto w-fit">
          <Title as="h1" title={title} className="max-w-[50ch] text-balance text-center text-3xl md:text-4xl" />
        </div>
        {createdAt && (
          <div className="mt-4 text-center">
            <ArticleTimeStamps createdAt={createdAt} lastUpdated={lastUpdated} />
          </div>
        )}
      </div>
    </header>
  );
}
