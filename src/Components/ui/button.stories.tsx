import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'UI/Button',
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Destructive: StoryObj<typeof Button> = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Ghost: StoryObj<typeof Button> = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Link: StoryObj<typeof Button> = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};
