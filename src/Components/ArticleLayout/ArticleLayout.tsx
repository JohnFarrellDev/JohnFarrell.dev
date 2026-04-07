import { ArticleStyles } from '@/Components/Article/Article';
import { ArticleBanner } from '@/Components/ArticleBanner/ArticleBanner';
import { PageContentContainer } from '@/Components/Layout/PageContent/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer/PageWidthContainer';

interface ArticleLayoutProps {
  title: string;
  createdAt: Date;
  lastUpdated?: Date;
  children: React.ReactNode;
}

export function ArticleLayout({ title, createdAt, lastUpdated, children }: ArticleLayoutProps) {
  return (
    <PageWidthContainer as="article">
      <ArticleBanner title={title} createdAt={createdAt} lastUpdated={lastUpdated} />
      <PageContentContainer>
        <ArticleStyles>{children}</ArticleStyles>
      </PageContentContainer>
    </PageWidthContainer>
  );
}
