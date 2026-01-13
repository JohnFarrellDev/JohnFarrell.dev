import { Experience } from '@/Components/Experience/Experience';
import { Hero } from '@/Components/Hero';
import { Skills } from '@/Components/Skills/Skills';
import { produceMetaData } from '@/Utilities/produceMetaData';

export const metadata = produceMetaData();

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
    </>
  );
}
