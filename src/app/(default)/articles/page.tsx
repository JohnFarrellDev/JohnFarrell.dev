import { Fragment } from 'react';
import { ArticleCard } from '../../../Components/Articles/ArticleCard';
import { Title } from '../../../Components/Title';
import { produceMetaData } from '../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Articles | John Farrell',
  description: 'Articles (mostly about software engineering) written by John Farrell',
});

export default function Articles() {
  return (
    <section className="container">
      <Title title="Articles" className="text-3xl" />
      <div>
        {allArticles.map(({ year, articles }) => (
          <Fragment key={year}>
            <h2 className="my-2 text-center text-xl font-bold">{year}</h2>
            <ul className="mx-auto flex flex-col gap-4">
              {articles.map((article) => (
                <ArticleCard key={article.URL} {...article} className="bg-stone-100" />
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

const allArticles = [
  {
    year: 'Continually Updated',
    articles: [
      {
        URL: '/articles/piano-progress',
        title: 'Piano Progress',
        description: 'A look at my progress learning piano',
        createdAt: new Date('2023-01-30T22:19:37.934Z'),
        tags: ['piano', 'non technical'],
        imageURL:
          'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/article-thumbnails/article-card-piano-progress.jpeg',
        imageAlt: 'upright piano in a sunlit room',
      },
    ],
  },
  {
    year: '2024',
    articles: [
      {
        URL: '/articles/optimizing-youtube',
        title: 'Optimizing YouTube',
        description: 'How I personalize my YouTube experience',
        createdAt: new Date('2024-06-19T19:35:38.114Z'),
        tags: ['Firefox', 'extensions', 'web'],
        imageURL:
          'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/article-thumbnails/optimizing-youtube.png',
        imageAlt: 'Santa writing code at his desktop computer',
      },
    ],
  },
  {
    year: '2023',
    articles: [
      {
        URL: '/articles/advent-of-code-2023',
        title: 'Advent of Code 2023',
        description: 'A detailed look at my solutions for Advent of Code 2023',
        createdAt: new Date('2023-11-07T16:56:37.934Z'),
        tags: ['typescript', 'problem solving', 'algorithms', 'advent of code'],
        imageURL:
          'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/article-thumbnails/article-card-advent-of-code-2023.jpeg',
        imageAlt: 'Santa writing code at his desktop computer',
      },
    ],
  },
  {
    year: '2022',
    articles: [
      {
        URL: '/articles/minesweeper',
        title: 'Visualisation Algorithms for Minesweeper',
        description:
          'Explore algorithms that strategically solve Minesweeper with every algorithm visualised in this article.',
        createdAt: new Date('2022-10-09T22:19:37.934Z'),
        tags: ['react', 'typescript', 'problem solving', 'algorithms'],
        imageURL:
          'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/article-thumbnails/article-card-minesweeper.jpeg',
        imageAlt: 'man hunched over a board trying to solve a puzzle game',
      },
      {
        URL: '/articles/react-project-structure',
        title: 'Preferred React Project Structure',
        description: 'A look at how I like to structure my React projects',
        createdAt: new Date('2022-08-01T14:15:28.433Z'),
        tags: ['react', 'typescript'],
        imageURL:
          'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/article-thumbnails/article-card-react.png',
        imageAlt: 'react logo',
      },
      {
        URL: '/articles/userscript-udemy-copy-out-quizzes',
        title: 'Extract Udemy Quizzes with a Custom Userscript',
        description: 'A look at how I created a UserScript to copy Quiz Questions and Answers from Udemy',
        createdAt: new Date('2022-05-27T11:16:06.761Z'),
        tags: ['javascript'],
        imageURL:
          'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/article-thumbnails/article-card-udemy.jpeg',
        imageAlt: 'Breaking free from technological prison',
      },
    ],
  },
];
