import { Title } from '@/Components/Title';
import { GameWithLevels } from '@/Components/Projects/DescendingInsanity/GameWithLevels';
import { produceMetaData } from '@/Utilities/produceMetaData';
import { PageContentContainer } from '@/Components/Layout/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';

export const metadata = produceMetaData({
  title: 'Descending Insanity',
  description: 'How far can you go?',
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/og-images/og-image-descending-insanity.png',
});

export default function TwentyNumberChallenge() {
  return (
    <PageWidthContainer>
      <PageContentContainer>
        <Title title="Descending Insanity" />
        <GameWithLevels />
      </PageContentContainer>
    </PageWidthContainer>
  );
}
