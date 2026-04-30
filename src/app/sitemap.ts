import { MetadataRoute } from 'next';

const baseUrl = 'https://www.johnfarrell.dev';

const routes = [
  '/',
  '/about-me',
  '/cv',
  '/articles',
  '/articles/advent-of-code-2023',
  '/articles/advent-of-code-2023/day-1',
  '/articles/advent-of-code-2023/day-6',
  '/articles/excalidraw-svg-to-react',
  '/articles/minesweeper',
  '/articles/optimizing-youtube',
  '/articles/piano-progress',
  '/articles/react-project-structure',
  '/articles/userscript-udemy-copy-out-quizzes',
  '/projects',
  '/projects/20-number-challenge',
  '/projects/descending-insanity',
  '/projects/minesweeper',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'daily',
    priority: 0.7,
  }));
}
