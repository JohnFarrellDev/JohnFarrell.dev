import { useMemo } from 'react';
import { ArticleTimeStamps } from '../../ArticleTimeStamps';
import { Layout } from '../../Layout/Layout';
import { SEO } from '../../SEO';
import { Title } from '../../Title';
import { Game } from './Components/Game/Game';
import { Banner } from '../../Banner';

export default function Minesweeper() {
  const seo = useMemo(
    () => (
      <SEO
        title="Minesweeper"
        description="Implementing minesweeper and it's automated solving algorithms visualised."
        image="https://i.imgur.com/NznpTNf.png"
      />
    ),
    []
  );

  const title = useMemo(() => <Title title="Minesweeper" />, []);

  return (
    <Layout>
      {seo}
      {title}
      <main className="page-center">
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
    </Layout>
  );
}
