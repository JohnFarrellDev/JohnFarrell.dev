import { Game20 } from '../../../../Components/Projects/DescendingInsanity/Game20';
import { Title } from '../../../../Components/Title';
import { produceMetaData } from '../../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Twenty Number Challenge',
  description: 'Fun numbers game',
  image: 'https://i.imgur.com/xm1cgR9.png',
});

export default function TwentyNumberChallenge() {
  return (
    <>
      <Title title="Twenty Number Challenge" />
      <main>
        <Game20 />
      </main>
    </>
  );
}
