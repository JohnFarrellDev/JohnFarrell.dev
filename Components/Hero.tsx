import Link from 'next/link';
import { SocialLinks } from './SocialLinks';
import { Robot } from './Robot';
import { Button } from './Button';

export function Hero() {
  return (
    <header className="relative h-svh bg-primary-1000">
      <div className="section-center grid h-full items-center md:grid-cols-2">
        <article className="bg-primary-1000">
          <div className="text-center md:text-left">
            <h1 className="text-7xl font-bold">Hello, I'm John</h1>
            <h2 className="text-lg text-grey-300">I'm a software developer with a focus on the web</h2>

            <Link href="/contact" className="inline-block md:block">
              <Button className="mt-5 px-4 py-4 uppercase">Contact Me</Button>
            </Link>

            <SocialLinks className="flex w-full justify-center gap-4 md:justify-start" />
          </div>
        </article>
        <div className="hidden md:block">
          <Robot />
        </div>
      </div>
    </header>
  );
}
