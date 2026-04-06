import type { Meta, StoryObj } from '@storybook/react';

import { PageWidthContainer } from './PageWidthContainer';

export default {
  title: 'Layout/PageWidthContainer',
  component: PageWidthContainer,
} as Meta<typeof PageWidthContainer>;

export const Default: StoryObj<typeof PageWidthContainer> = {
  args: {
    children: <div className="bg-blue-100 p-4">Page width constrained content</div>,
  },
};
