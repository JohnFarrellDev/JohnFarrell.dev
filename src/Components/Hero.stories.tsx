import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';

export default {
  title: 'Hero',
  component: Hero,
} as Meta<typeof Hero>;

export const Default: StoryObj<typeof Hero> = {};
