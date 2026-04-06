import type { Meta, StoryObj } from '@storybook/react';

import { GameCell } from './GameCell';

export default {
  title: 'Projects/Minesweeper/GameCell',
  component: GameCell,
} as Meta<typeof GameCell>;

const defaultHandlers = {
  leftClick: () => {},
  rightClick: () => {},
  leftDown: () => {},
  leftUp: () => {},
};

export const Covered: StoryObj<typeof GameCell> = {
  args: {
    rowIndex: 0,
    columnIndex: 0,
    isCovered: true,
    isBomb: false,
    isFlagged: false,
    isWinner: false,
    neighborBombs: 0,
    ...defaultHandlers,
  },
};

export const Uncovered: StoryObj<typeof GameCell> = {
  args: {
    rowIndex: 0,
    columnIndex: 0,
    isCovered: false,
    isBomb: false,
    isFlagged: false,
    isWinner: false,
    neighborBombs: 3,
    ...defaultHandlers,
  },
};

export const Bomb: StoryObj<typeof GameCell> = {
  args: {
    rowIndex: 0,
    columnIndex: 0,
    isCovered: false,
    isBomb: true,
    isFlagged: false,
    isWinner: false,
    neighborBombs: 0,
    ...defaultHandlers,
  },
};

export const Flagged: StoryObj<typeof GameCell> = {
  args: {
    rowIndex: 0,
    columnIndex: 0,
    isCovered: true,
    isBomb: false,
    isFlagged: true,
    isWinner: false,
    neighborBombs: 0,
    ...defaultHandlers,
  },
};
