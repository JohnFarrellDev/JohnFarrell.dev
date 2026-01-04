import { SocialLinks } from '../SocialLinks';

export function Footer() {
  return (
    <footer className="grid h-36 place-items-center bg-gray-900 text-center">
      <div>
        <SocialLinks className="mx-auto mb-4 mt-0 flex justify-center gap-4" styleLinks="text-white w-8" />
        <p className="mt-2 font-normal uppercase text-white">
          copyright&copy;2020-{new Date().getFullYear()} <span className="text-primary-600">John Farrell</span> all
          rights reserved
        </p>
      </div>
    </footer>
  );
}
