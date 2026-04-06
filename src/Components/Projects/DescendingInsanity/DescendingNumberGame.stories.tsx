import type { Meta, StoryObj } from '@storybook/react';

import { DescendingNumberGame } from './DescendingNumberGame';

export default {
  title: 'Projects/DescendingInsanity/DescendingNumberGame',
  component: DescendingNumberGame,
} as Meta<typeof DescendingNumberGame>;

export const SetSize: StoryObj<typeof DescendingNumberGame> = {
  args: {
    numberOfSlots: 20,
    refetch: () => {},
    gameType: 'set-size',
    highScore: 0,
    setHighScore: () => {},
  },
};

export const Levels: StoryObj<typeof DescendingNumberGame> = {
  args: {
    numberOfSlots: 5,
    refetch: () => {},
    gameType: 'level',
    level: 1,
    setLevel: () => {},
  },
};
