import { Title } from '../../../../Components/Title';
import { GameWithLevels } from '../../../../Components/Projects/DescendingInsanity/GameWithLevels';
import { produceMetaData } from '../../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Descending Insanity',
  description: 'How far can you go?',
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/og-images/og-image-descending-insanity.png',
});

export default function TwentyNumberChallenge() {
  return (
    <div>
      <Title title="Descending Insanity" />
      <GameWithLevels />
    </div>
  );
}
