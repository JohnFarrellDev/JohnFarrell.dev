import type { Meta, StoryObj } from '@storybook/react';

import { GameSettings } from './GameSettings';

export default {
  title: 'Projects/Minesweeper/GameSettings',
  component: GameSettings,
} as Meta<typeof GameSettings>;

export const Default: StoryObj<typeof GameSettings> = {
  args: {
    columns: 9,
    changeNumberOfColumns: () => {},
    rows: 9,
    changeNumberOfRows: () => {},
    numberOfBombs: 10,
    changeNumberOfBombs: () => {},
    validateChange: () => {},
  },
};
