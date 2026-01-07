import { ArticleTimeStamps } from '@/Components/ArticleTimeStamps';
import { Title } from '@/Components/Title';
import { Game } from '@/Components/Projects/Minesweeper/Components/Game/Game';
import { Banner } from '@/Components/Banner';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { PageContentContainer } from '@/Components/Layout/PageContent';

export default function Minesweeper() {
  return (
    <PageWidthContainer>
      <PageContentContainer>
        <Title title="Minesweeper" />
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
      </PageContentContainer>
    </PageWidthContainer>
  );
}
