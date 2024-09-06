import { ReactProjectStructure as ReactProjectStructureArticle } from '../../../Components/Articles/ReactProjectStructure/ReactProjectStructure';
import { produceMetaData } from '../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'React Project Structure | John Farrell',
  description: 'How I like to set up a React project for the best developer experience.',
  image: 'https://i.imgur.com/3fy0xbC.png',
});

export default function ReactProjectStructure() {
  return <ReactProjectStructureArticle />;
}
