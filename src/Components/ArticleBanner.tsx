import { FullBleedContainer } from '@/Components/Layout/FullBleed';
import { PageContentContainer } from '@/Components/Layout/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { cn } from '@/Utilities/cn';

import { ArticleTimeStamps } from './ArticleTimeStamps';
import { Title } from './Title';
import { Underline } from './Underline';

interface ArticleBannerProps {
  title: string;
  createdAt?: Date;
  lastUpdated?: Date;
  className?: string;
}

export function ArticleBanner({ title, createdAt, lastUpdated, className }: ArticleBannerProps) {
  return (
    <FullBleedContainer
      as="header"
      className={cn('relative mb-6 bg-linear-to-r from-blue-100 to-blue-200 py-8', className)}
    >
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
      <PageWidthContainer>
        <PageContentContainer className="relative mx-auto">
          <Title
            as="h1"
            title={title}
            className="max-w-[55ch] text-center text-3xl text-balance no-underline md:text-4xl"
          />
          <Underline className="mx-auto" />
          {createdAt && (
            <div className="mt-4 text-center">
              <ArticleTimeStamps createdAt={createdAt} lastUpdated={lastUpdated} />
            </div>
          )}
        </PageContentContainer>
      </PageWidthContainer>
    </FullBleedContainer>
  );
}
