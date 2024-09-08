import { Fragment } from 'react';
import { ArticleCard } from '../../../Components/Articles/ArticleCard';
import { Title } from '../../../Components/Title';
import { produceMetaData } from '../../../Utilities/produceMetaData';

const allProjects = [
  {
    year: '2023',
    projects: [
      {
        title: 'Descending Insanity',
        description: 'How far can you go?',
        URL: '/projects/descending-insanity',
        imageURL: 'https://i.imgur.com/FP0vUEg.png',
        imageAlt: '',
        createdAt: new Date('2023-12-26T20:00:00.000Z'),
        tags: [],
      },
      {
        title: 'Twenty Number Challenge',
        description: 'A simple luck based number game',
        URL: '/projects/20-number-challenge',
        imageURL: 'https://i.imgur.com/kp6xRVV.png',
        imageAlt: '',
        createdAt: new Date('2023-12-24T15:00:00.000Z'),
        tags: [],
      },
    ],
  },
  {
    year: '2022',
    projects: [
      {
        title: 'Minesweeper solved and visualised',
        description: "Implementing minesweeper and it's automated solving algorithms visualised.",
        URL: '/projects/minesweeper',
        imageURL: 'https://i.imgur.com/OjqgY02.jpg',
        imageAlt: '',
        createdAt: new Date('2022-10-09T22:19:37.934Z'),
        tags: [],
      },
    ],
  },
];

export const metadata = produceMetaData({
  title: 'Projects | John Farrell',
  description: 'Software engineering projects created by John Farrell',
});

export default function Projects() {
  return (
    <section className="page-center">
      <Title title="Projects" />
      <div>
        {allProjects.map(({ year, projects }) => (
          <Fragment key={year}>
            <h2 className="my-3 text-center text-xl">{year}</h2>
            <ul className="mx-auto my-0 flex flex-col gap-5">
              {projects.map((project) => (
                <ArticleCard key={project.URL} {...project} />
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
