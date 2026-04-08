import { ArticleStyles } from '@/Components/Article/Article';
import { ArticleBanner } from '@/Components/ArticleBanner/ArticleBanner';
import { ArticleSidebarToc } from '@/Components/ArticleSidebarToc/ArticleSidebarToc';
import { PageContentContainer } from '@/Components/Layout/PageContent/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer/PageWidthContainer';

interface TocEntry {
  display: string;
  url: string;
  nestedContent?: TocEntry[];
}

interface ArticleLayoutProps {
  title: string;
  createdAt: Date;
  lastUpdated?: Date;
  toc?: TocEntry[];
  children: React.ReactNode;
}

export function ArticleLayout({ title, createdAt, lastUpdated, toc, children }: ArticleLayoutProps) {
  return (
    <PageWidthContainer as="article">
      <ArticleBanner title={title} createdAt={createdAt} lastUpdated={lastUpdated} />
      <PageContentContainer>
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-8">
          <ArticleStyles>{children}</ArticleStyles>
          {toc && <ArticleSidebarToc content={toc} />}
        </div>
      </PageContentContainer>
    </PageWidthContainer>
  );
}
