import type { Meta, StoryObj } from '@storybook/react';

import { Banner } from './Banner';

export default {
  title: 'Banner',
  component: Banner,
} as Meta<typeof Banner>;

export const Information: StoryObj<typeof Banner> = {
  args: {
    type: 'information',
    message: 'This is an informational message.',
  },
};

export const Warning: StoryObj<typeof Banner> = {
  args: {
    type: 'warning',
    message: 'This is a warning message. Please proceed with caution.',
  },
};
