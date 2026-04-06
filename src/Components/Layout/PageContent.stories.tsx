import type { Meta, StoryObj } from '@storybook/react';

import { PageContentContainer } from './PageContent';

export default {
  title: 'Layout/PageContentContainer',
  component: PageContentContainer,
} as Meta<typeof PageContentContainer>;

export const Default: StoryObj<typeof PageContentContainer> = {
  args: {
    children: (
      <div className="bg-green-100 p-4">
        <p>Content with standard page padding applied.</p>
      </div>
    ),
  },
};
