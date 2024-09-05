'use client';

import { SEO } from '../Components/SEO';
import { Hero } from '../Components/Hero';
import { Skills } from '../Components/Skills/Skills';
import { Experience } from '../Components/Experience/Experience';

export default function Home() {
  return (
    <div className="bg-primary-1000 pt-20">
      <SEO />
      <Hero />
      <Skills />
      <Experience />
    </div>
  );
}
