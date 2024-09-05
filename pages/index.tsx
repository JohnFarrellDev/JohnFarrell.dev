import { Layout } from '../Components/Layout/Layout';
import { SEO } from '../Components/SEO';
import { Hero } from '../Components/Hero';
import { Skills } from '../Components/Skills/Skills';
import { Experience } from '../Components/Experience/Experience';

const Home = () => {
  return (
    <Layout className="bg-primary-1000">
      <SEO />
      <Hero />
      <Skills />
      <Experience />
    </Layout>
  );
};

export default Home;
