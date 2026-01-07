import Link from 'next/link';
import { SocialLinks } from './SocialLinks';
import { Robot } from './Robot';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { PageContentContainer } from '@/Components/Layout/PageContent';

export function Hero() {
  return (
    <PageWidthContainer as="header" className="min-h-[calc(100svh-3.5rem)] bg-primary-100 md:min-h-[calc(100svh-5rem)]">
      <PageContentContainer as="article" className="grid h-full items-center text-center md:grid-cols-2 md:text-left">
        <div>
          <h1 className="text-7xl font-bold">Hello, I'm John</h1>
          <h2 className="text-lg text-gray-600">I'm a software developer with a focus on the web</h2>
          <Link
            href="/contact"
            className="mx-auto mt-5 block w-fit rounded-md bg-primary-800 px-3.5 py-3.5 font-bold uppercase tracking-[0.2rem] text-primary-100 no-underline shadow-lg transition-all duration-500 hover:bg-primary-300 hover:text-primary-1000 md:mx-0 md:block"
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
