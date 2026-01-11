import { PageContentContainer } from '@/Components/Layout/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import Minesweeper from '@/Components/Projects/Minesweeper/Minesweeper';
import { produceMetaData } from '@/Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Minesweeper',
  description: "Implementing minesweeper and it's automated solving algorithms visualised.",
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/og-images/og-image-minesweeper.png',
});

export default function MinesweeperProject() {
  return (
    <PageWidthContainer>
      <PageContentContainer>
        <Minesweeper />
      </PageContentContainer>
    </PageWidthContainer>
  );
}
