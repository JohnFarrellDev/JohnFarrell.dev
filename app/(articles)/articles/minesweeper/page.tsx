import { Minesweeper as MinesweeperArticle } from '../../../../Components/Articles/Minesweeper';
import { produceMetaData } from '../../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Solving Minesweeper | John Farrell',
  description: 'Algorithmically solving minesweeper and visualizing the algorithms',
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/og-images/og-image-minesweeper.png',
});

export default function Minesweeper() {
  return <MinesweeperArticle />;
}
