import type { Meta, StoryObj } from '@storybook/react';

import { FaceType, GameTracking } from './GameTracking';

export default {
  title: 'Projects/Minesweeper/GameTracking',
  component: GameTracking,
} as Meta<typeof GameTracking>;

export const Playing: StoryObj<typeof GameTracking> = {
  args: {
    isDead: false,
    isWinner: false,
    isPlaying: true,
    isHoldingDown: false,
    faceType: FaceType.Human,
    switchFaceType: () => {},
    flagsPlaced: 2,
    totalBombs: 10,
  },
};

export const Dead: StoryObj<typeof GameTracking> = {
  args: {
    isDead: true,
    isWinner: false,
    isPlaying: true,
    isHoldingDown: false,
    faceType: FaceType.Human,
    switchFaceType: () => {},
    flagsPlaced: 3,
    totalBombs: 10,
  },
};

export const Winner: StoryObj<typeof GameTracking> = {
  args: {
    isDead: false,
    isWinner: true,
    isPlaying: true,
    isHoldingDown: false,
    faceType: FaceType.Human,
    switchFaceType: () => {},
    flagsPlaced: 10,
    totalBombs: 10,
  },
};

export const CatFace: StoryObj<typeof GameTracking> = {
  args: {
    isDead: false,
    isWinner: false,
    isPlaying: true,
    isHoldingDown: false,
    faceType: FaceType.Cat,
    switchFaceType: () => {},
    flagsPlaced: 0,
    totalBombs: 10,
  },
};
