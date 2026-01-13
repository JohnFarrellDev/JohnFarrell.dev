import { SocialLinks } from '../SocialLinks';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { PageContentContainer } from '@/Components/Layout/PageContent';

export function Footer() {
  return (
    <PageWidthContainer as="footer" className="grid h-36 place-items-center bg-gray-900 text-center">
      <PageContentContainer>
        <SocialLinks className="mx-auto mt-0 mb-4 flex justify-center gap-4" styleLinks="text-white w-8" />
        <p className="mt-2 font-normal text-white uppercase">
          copyright&copy;2020-{new Date().getFullYear()} <span className="text-primary-600">John Farrell</span> all
          rights reserved
        </p>
      </PageContentContainer>
    </PageWidthContainer>
  );
}
