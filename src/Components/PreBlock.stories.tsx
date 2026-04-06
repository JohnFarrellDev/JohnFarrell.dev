import type { Meta, StoryObj } from '@storybook/react';

import { PreBlock } from './PreBlock';

export default {
  title: 'PreBlock',
  component: PreBlock,
} as Meta<typeof PreBlock>;

export const Default: StoryObj<typeof PreBlock> = {
  args: {
    lines: ['npm install', 'npm run dev', 'npm run build'],
  },
};

export const SingleLine: StoryObj<typeof PreBlock> = {
  args: {
    lines: ['git clone https://github.com/example/repo.git'],
  },
};
