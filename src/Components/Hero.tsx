import Link from 'next/link';
import { SocialLinks } from './SocialLinks';
import { Robot } from './Robot';

export function Hero() {
  return (
    <header className="relative h-svh bg-primary-100">
      <div className="container grid h-full items-center md:grid-cols-2">
        <article className="bg-primary-100">
          <div className="text-center md:text-left">
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
        </article>
        <div className="hidden md:block">
          <Robot />
        </div>
      </div>
    </header>
  );
}
