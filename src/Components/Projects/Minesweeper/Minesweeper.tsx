import { ArticleTimeStamps } from '../../ArticleTimeStamps';
import { Title } from '../../Title';
import { Game } from './Components/Game/Game';
import { Banner } from '../../Banner';

export default function Minesweeper() {
  return (
    <>
      <Title title="Minesweeper" />
      <main className="container">
        <ArticleTimeStamps createdAt={new Date('2022-10-09T22:19:37.934Z')} />
        <Banner
          type="warning"
          message="This is a work in progress! (highly recommend for now using a PC and not mobile to view)"
        />
        <div>
          <Game
            columns={20}
            rows={20}
            numberOfBombs={10}
            hasCustomControls={true}
            transparentSideView={false}
            customAnimations={{
              CalculateNeighbors: false,
              PlaceBombs: false,
              RecursiveReveal: false,
              FlagCell: false,
              BasicAutoClick: false,
            }}
            allowedOperations={{
              PlaceBombs: true,
              CalculateNeighbors: true,
              FlagCell: true,
              RevealCell: true,
              RecursiveReveal: true,
              AutoFlag: false,
              BasicAutoClick: false,
            }}
            borderlessMode={false}
          />
        </div>
      </main>
    </>
  );
}
