import { Title } from '../Title';
import { skills } from './Constants/skills';
import { Button } from '../Button';
import { Underline } from '../Underline';

export function Skills() {
  return (
    <section className="bg-gray-50 py-8">
      <Title title="Tech Skills" className="text-center" />
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ id, title, description, icon, link }) => {
          return (
            <article key={id} className="group rounded-xl bg-white p-4 duration-300 hover:bg-primary-500">
              <div className="flex flex-col justify-center">
                <div className="m-auto mb-4 text-4xl duration-300 group-hover:text-primary-900">{icon}</div>
                <h3 className="grow text-center text-2xl font-bold duration-300 group-hover:text-primary-900">
                  {title}
                </h3>
                <Underline className="mx-auto h-0.5 w-28 duration-300 group-hover:bg-primary-900" />
              </div>

              <p className="text-balance text-center duration-300 group-hover:text-primary-900">{description}</p>
              {link && (
                <a href={link.url} className="mx-auto block w-fit overflow-hidden rounded-lg uppercase no-underline">
                  <Button>{link.display}</Button>
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
