import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './badge';

export default {
  title: 'UI/Badge',
  component: Badge,
} as Meta<typeof Badge>;

export const Default: StoryObj<typeof Badge> = {
  args: {
    children: 'Default',
    variant: 'default',
  },
};

export const Secondary: StoryObj<typeof Badge> = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: StoryObj<typeof Badge> = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Outline: StoryObj<typeof Badge> = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};
