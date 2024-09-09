import { Articles as ArticlesC } from '../../../Components/Articles/Articles';
import { produceMetaData } from '../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Articles | John Farrell',
  description: 'Articles (mostly about software engineering) written by John Farrell',
});

export default function Articles() {
  return (
    <div className="bg-gray-50">
      <ArticlesC />
    </div>
  );
}
