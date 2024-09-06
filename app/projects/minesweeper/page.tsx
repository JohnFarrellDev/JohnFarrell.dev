import Minesweeper from '../../../Components/Projects/Minesweeper/Minesweeper';
import { produceMetaData } from '../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Minesweeper',
  description: "Implementing minesweeper and it's automated solving algorithms visualised.",
  image: 'https://i.imgur.com/NznpTNf.png',
});

export default function MinesweeperProject() {
  return (
    <div className="pt-20">
      <Minesweeper />
    </div>
  );
}
