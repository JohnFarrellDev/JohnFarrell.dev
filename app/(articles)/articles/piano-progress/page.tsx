import { CurrentyLearning } from '../../../../Components/Articles/PianoProgress/CurrentyLearning';
import { SongTrackers } from '../../../../Components/Articles/PianoProgress/SongTrackers';
import { Title } from '../../../../Components/Title';
import { produceMetaData } from '../../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Piano Progress Tracker | John Farrell',
  description: 'My personal tracker for piano progression',
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/og-images/og-image-piano-progress.png',
});

export default function PianoProgress() {
  return (
    <section className="page-center">
      <Title title="Piano Progress" underlineClassName="bg-orange-400" />
      <CurrentyLearning />
      <SongTrackers />
    </section>
  );
}
