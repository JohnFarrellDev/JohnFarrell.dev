import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBanner } from './ArticleBanner';

export default {
  title: 'ArticleBanner',
  component: ArticleBanner,
} as Meta<typeof ArticleBanner>;

export const TitleOnly: StoryObj<typeof ArticleBanner> = {
  args: {
    title: 'How to Build a React Application from Scratch',
  },
};

export const WithDates: StoryObj<typeof ArticleBanner> = {
  args: {
    title: 'Understanding TypeScript Generics',
    createdAt: new Date('2024-01-15T10:00:00.000Z'),
    lastUpdated: new Date('2024-06-20T12:00:00.000Z'),
  },
};
