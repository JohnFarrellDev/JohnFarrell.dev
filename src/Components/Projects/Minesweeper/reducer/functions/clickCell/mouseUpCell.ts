import { State } from '../..';

export const mouseUpCell = (state: State) => {
  if (!state.isPlaying || state.isWinner || state.isDead) return;

  state.isHoldingDown = false;
};
