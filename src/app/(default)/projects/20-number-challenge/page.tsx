import { PageContentContainer } from '@/Components/Layout/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { Game20 } from '@/Components/Projects/DescendingInsanity/Game20';
import { Title } from '@/Components/Title';
import { produceMetaData } from '@/Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Twenty Number Challenge',
  description: 'Fun numbers game',
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/og-images/og-image-twenty-number-challenge.png',
});

export default function TwentyNumberChallenge() {
  return (
    <PageWidthContainer>
      <PageContentContainer>
        <Title title="Twenty Number Challenge" />
        <Game20 />
      </PageContentContainer>
    </PageWidthContainer>
  );
}
