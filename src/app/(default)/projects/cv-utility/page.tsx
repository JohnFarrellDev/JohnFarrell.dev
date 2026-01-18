import { PageContentContainer } from '@/Components/Layout/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { CvBase } from '@/Components/Projects/CvUtility/CvBase';
import { produceMetaData } from '@/Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'CV Utility',
  description: 'Make Keeping My CV Up to Date Easy',
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
