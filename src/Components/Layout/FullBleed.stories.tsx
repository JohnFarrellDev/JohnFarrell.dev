import type { Meta, StoryObj } from '@storybook/react';

import { FullBleedContainer } from './FullBleed';

export default {
  title: 'Layout/FullBleedContainer',
  component: FullBleedContainer,
} as Meta<typeof FullBleedContainer>;

export const Default: StoryObj<typeof FullBleedContainer> = {
  args: {
    children: <div className="bg-blue-100 p-8 text-center">Full bleed content spanning the entire width</div>,
  },
};

export const AsSection: StoryObj<typeof FullBleedContainer> = {
  args: {
    as: 'section',
    className: 'bg-gray-100 py-12',
    children: <div className="p-8 text-center">Full bleed section element</div>,
  },
};
