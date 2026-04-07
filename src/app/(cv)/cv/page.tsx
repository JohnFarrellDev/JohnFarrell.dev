import { PageContentContainer } from '@/Components/Layout/PageContent/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer/PageWidthContainer';
import { CvBase } from '@/Components/Projects/CvUtility/CvBase';
import { produceMetaData } from '@/Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'John Farrell | CV',
  description: 'All variants of my CV',
  image: '',
});

export default function CvUtility() {
  return (
    <PageWidthContainer>
      <PageContentContainer>
        <CvBase />
      </PageContentContainer>
    </PageWidthContainer>
  );
}
