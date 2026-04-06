import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCard } from './ArticleCard';

export default {
  title: 'Articles/ArticleCard',
  component: ArticleCard,
} as Meta<typeof ArticleCard>;

export const WithDescription: StoryObj<typeof ArticleCard> = {
  args: {
    title: 'Building a Minesweeper Game with React',
    description: 'A deep dive into building the classic Minesweeper game using React hooks and TypeScript.',
    URL: '/articles/minesweeper',
    createdAt: new Date('2023-03-10T10:00:00.000Z'),
    tags: ['React', 'TypeScript', 'Game'],
    imageURL: '/favicon.ico',
    imageAlt: 'Minesweeper game screenshot',
  },
};

export const WithoutDescription: StoryObj<typeof ArticleCard> = {
  args: {
    title: 'Understanding React Hooks',
    URL: '/articles/react-hooks',
    createdAt: new Date('2023-01-20T10:00:00.000Z'),
    tags: ['React', 'Hooks'],
    imageURL: '/favicon.ico',
    imageAlt: 'React logo',
  },
};

export const WithLastUpdated: StoryObj<typeof ArticleCard> = {
  args: {
    title: 'TypeScript Best Practices',
    description: 'Essential TypeScript patterns and practices for large codebases.',
    URL: '/articles/typescript-best-practices',
    createdAt: new Date('2022-11-01T10:00:00.000Z'),
    lastUpdatedAt: new Date('2024-02-15T10:00:00.000Z'),
    tags: ['TypeScript', 'Best Practices', 'Architecture'],
    imageURL: '/favicon.ico',
    imageAlt: 'TypeScript logo',
  },
};
