import { ArticleCard } from '@/Components/Articles/ArticleCard';
import { PageContentContainer } from '@/Components/Layout/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { Title } from '@/Components/Title';
import { produceMetaData } from '@/Utilities/produceMetaData';

const allProjects = [
  {
    year: '2023',
    projects: [
      {
        title: 'Descending Insanity',
        description: 'How far can you go?',
        URL: '/projects/descending-insanity',
        imageURL:
          'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/project-thumbnails/descending-insanity-thumbnail.png',
        imageAlt: '',
        createdAt: new Date('2023-12-26T20:00:00.000Z'),
        tags: [],
      },
      {
        title: 'Twenty Number Challenge',
        description: 'A simple luck based number game',
        URL: '/projects/20-number-challenge',
        imageURL:
          'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/project-thumbnails/twenty-number-game-thumbnail.png',
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
        imageURL:
          'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/project-thumbnails/minesweeper-thumbnail.jpeg',
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
    <PageWidthContainer>
      <PageContentContainer as="section">
        <Title title="Projects" className="mb-8" />
        <div className="mx-auto flex w-fit flex-col gap-6">
          <ul className="mx-auto flex w-fit flex-col gap-6">
            {allProjects
              .flatMap((projectByYear) => projectByYear.projects)
              .map((project) => (
                <ArticleCard key={project.URL} {...project} />
              ))}
          </ul>
        </div>
      </PageContentContainer>
    </PageWidthContainer>
  );
}
