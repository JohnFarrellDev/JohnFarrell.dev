import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTimeStamps } from './ArticleTimeStamps';

const meta = {
  title: 'Utilities/ArticleTimeStamps',
  component: ArticleTimeStamps,
} as Meta<typeof ArticleTimeStamps>;
export default meta;

export const CreatedAt: StoryObj<typeof ArticleTimeStamps> = {
  args: {
    createdAt: new Date('2022-05-29T19:28:53.185Z'),
  },
};

export const CreatedAtAndLastUpdated: StoryObj<typeof ArticleTimeStamps> = {
  args: {
    createdAt: new Date('2022-05-29T19:28:53.185Z'),
    lastUpdated: new Date('2022-05-30T19:28:53.185Z'),
  },
};
