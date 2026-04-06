import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
  title: 'Layout/Navbar',
  component: Navbar,
} as Meta<typeof Navbar>;

export const Default: StoryObj<typeof Navbar> = {};
