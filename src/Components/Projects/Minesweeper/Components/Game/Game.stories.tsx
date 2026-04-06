import type { Meta, StoryObj } from '@storybook/react';

import { Game } from './Game';

export default {
  title: 'Projects/Minesweeper/Game',
  component: Game,
} as Meta<typeof Game>;

export const Default: StoryObj<typeof Game> = {
  args: {
    columns: 9,
    rows: 9,
    numberOfBombs: 10,
    hasCustomControls: false,
    transparentSideView: false,
    customAnimations: {
      PlaceBombs: false,
      CalculateNeighbors: false,
      RecursiveReveal: false,
      FlagCell: false,
      BasicAutoClick: false,
    },
    allowedOperations: {
      PlaceBombs: true,
      CalculateNeighbors: true,
      RevealCell: true,
      RecursiveReveal: true,
      FlagCell: true,
      AutoFlag: true,
      BasicAutoClick: true,
    },
    borderlessMode: false,
  },
};

export const WithCustomControls: StoryObj<typeof Game> = {
  args: {
    columns: 9,
    rows: 9,
    numberOfBombs: 10,
    hasCustomControls: true,
    transparentSideView: false,
    customAnimations: {
      PlaceBombs: false,
      CalculateNeighbors: false,
      RecursiveReveal: false,
      FlagCell: false,
      BasicAutoClick: false,
    },
    allowedOperations: {
      PlaceBombs: true,
      CalculateNeighbors: true,
      RevealCell: true,
      RecursiveReveal: true,
      FlagCell: true,
      AutoFlag: true,
      BasicAutoClick: true,
    },
    borderlessMode: false,
  },
};
