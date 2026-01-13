import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

export default {
  title: 'Utilities/Title',
  component: Title,
} as Meta<typeof Title>;

export const Primary: StoryObj<typeof Title> = {
  args: {
    title: 'Hello world',
  },
};
