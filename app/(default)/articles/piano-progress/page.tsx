import { CurrentyLearning } from '../../../../Components/Articles/PianoProgress/CurrentyLearning';
import { SongTrackers } from '../../../../Components/Articles/PianoProgress/SongTrackers';
import { Title } from '../../../../Components/Title';
import { produceMetaData } from '../../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Piano Progress Tracker | John Farrell',
  description: 'My personal tracker for piano progression',
  image: 'https://i.imgur.com/ikwTfTE.jpeg',
});

export default function PianoProgress() {
  return (
    <section>
      <div className="page-center">
        <Title title="Piano Progress" />
        <CurrentyLearning />
        <SongTrackers />
      </div>
    </section>
  );
}
