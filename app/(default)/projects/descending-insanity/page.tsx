import { Title } from '../../../../Components/Title';
import { GameWithLevels } from '../../../../Components/Projects/DescendingInsanity/GameWithLevels';
import { produceMetaData } from '../../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Descending Insanity',
  description: 'How far can you go?',
  image: 'https://i.imgur.com/ApXjd6C.png',
});

export default function TwentyNumberChallenge() {
  return (
    <div className="pt-20">
      <Title title="Descending Insanity" />
      <GameWithLevels />
    </div>
  );
}
