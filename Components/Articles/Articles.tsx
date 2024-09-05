import { Fragment } from 'react';
import { Title } from '../Title';
import { ArticleCard } from './ArticleCard';

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
        imageURL: 'https://i.imgur.com/1AVIQeM.jpg',
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
        imageURL: 'https://i.imgur.com/ebiwJDK.jpg',
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
        imageURL: 'https://i.imgur.com/OjqgY02.jpg',
        imageAlt: 'man hunched over a board trying to solve a puzzle game',
      },
      {
        URL: '/articles/react-project-structure',
        title: 'Preferred React Project Structure',
        description: 'A look at how I like to structure my React projects',
        createdAt: new Date('2022-08-01T14:15:28.433Z'),
        tags: ['react', 'typescript'],
        imageURL: 'https://i.imgur.com/BRkhyeG.png',
        imageAlt: 'react logo',
      },
      {
        URL: '/articles/userscript-udemy-copy-out-quizzes',
        title: 'Extract Udemy Quizzes with a Custom Userscript',
        description: 'A look at how I created a UserScript to copy Quiz Questions and Answers from Udemy',
        createdAt: new Date('2022-05-27T11:16:06.761Z'),
        tags: ['javascript'],
        imageURL: 'https://i.imgur.com/xPyjZf5.jpg',
        imageAlt: 'Breaking free from technological prison',
      },
    ],
  },
];

export function Articles() {
  return (
    <section>
      <Title title="Articles" />
      <div className="page-center">
        {allArticles.map(({ year, articles }) => (
          <Fragment key={year}>
            <h2 className="my-2 text-center text-xl font-bold">{year}</h2>
            <ul className="mx-auto flex flex-col gap-4">
              {articles.map((article) => (
                <ArticleCard key={article.URL} {...article} />
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
