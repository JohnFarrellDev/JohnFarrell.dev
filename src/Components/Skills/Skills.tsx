import { Title } from '@/Components/Title';
import { skills } from './Constants/skills';
import { Button } from '@/Components/Button';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { PageContentContainer } from '@/Components/Layout/PageContent';

export function Skills() {
  return (
    <PageWidthContainer as="section">
      <PageContentContainer className="py-8">
        <Title title="Tech Skills" className="text-center" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ id, title, description, icon, link }) => {
            return (
              <article key={id} className="group rounded-xl bg-white p-4 duration-300 hover:bg-primary-600">
                <div className="flex flex-col justify-center">
                  <div className="m-auto mb-4 text-4xl duration-300 group-hover:text-primary-200">{icon}</div>
                  <h3 className="grow text-center text-2xl font-bold duration-300 group-hover:text-primary-200">
                    {title}
                  </h3>
                </div>

                <p className="text-balance text-center duration-300 group-hover:text-primary-200">{description}</p>
                {link && (
                  <a href={link.url} className="mx-auto block w-fit overflow-hidden rounded-lg uppercase no-underline">
                    <Button>{link.display}</Button>
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </PageContentContainer>
    </PageWidthContainer>
  );
}
