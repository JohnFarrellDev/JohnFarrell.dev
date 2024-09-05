import { Layout } from '../../Components/Layout/Layout';
import { SEO } from '../../Components/SEO';
import { Title } from '../../Components/Title';
import { GameWithLevels } from '../../Components/Projects/DescendingInsanity/GameWithLevels';

export default function TwentyNumberChallenge() {
  return (
    <Layout>
      <SEO title="Descending Insanity" description="How far can you go?" image="https://i.imgur.com/ApXjd6C.png" />
      <Title title="Descending Insanity" />
      <main>
        <GameWithLevels />
      </main>
    </Layout>
  );
}
