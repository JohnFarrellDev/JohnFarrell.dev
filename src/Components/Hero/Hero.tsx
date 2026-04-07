import Link from 'next/link';

import { PageContentContainer } from '@/Components/Layout/PageContent/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer/PageWidthContainer';

import { Robot } from '@/Components/Robot/Robot';
import { SocialLinks } from '@/Components/SocialLinks/SocialLinks';

export function Hero() {
  return (
    <PageWidthContainer as="header" className="min-h-svh bg-primary-100">
      <PageContentContainer as="article" className="grid h-full items-center text-center md:grid-cols-2 md:text-left">
        <div>
          <h1 className="text-7xl font-bold">Hello, I'm John</h1>
          <h2 className="text-lg text-gray-600">I'm a software developer with a focus on the web</h2>
          <Link
            href="/contact"
            className="bg-primary-800 text-primary-100 hover:bg-primary-300 hover:text-primary-1000 mx-auto mt-5 block w-fit rounded-md px-3.5 py-3.5 font-bold tracking-[0.2rem] uppercase no-underline shadow-lg transition-all duration-500 md:mx-0 md:block"
          >
            Contact Me
          </Link>
          <SocialLinks className="flex w-full justify-center gap-4 md:justify-start" styleLinks="w-8" />
        </div>
        <div className="hidden md:block">
          <Robot />
        </div>
      </PageContentContainer>
    </PageWidthContainer>
  );
}
