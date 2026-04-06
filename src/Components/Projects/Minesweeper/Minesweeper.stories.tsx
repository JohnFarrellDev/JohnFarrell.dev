import type { Meta, StoryObj } from '@storybook/react';

import Minesweeper from './Minesweeper';

export default {
  title: 'Projects/Minesweeper',
  component: Minesweeper,
} as Meta<typeof Minesweeper>;

export const Default: StoryObj<typeof Minesweeper> = {};
