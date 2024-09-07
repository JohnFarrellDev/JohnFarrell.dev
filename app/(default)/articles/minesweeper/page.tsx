import { Minesweeper as MinesweeperArticle } from '../../../../Components/Articles/Minesweeper';
import { produceMetaData } from '../../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Solving Minesweeper | John Farrell',
  description: 'Algorithmically solving minesweeper and visualising the algorithms',
  image: 'https://i.imgur.com/NznpTNf.png',
});

export default function Minesweeper() {
  return <MinesweeperArticle />;
}
