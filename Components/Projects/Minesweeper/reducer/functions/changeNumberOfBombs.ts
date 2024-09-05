import { ChangeNumberOfBombsAction, State } from '..';

export const changeNumberOfBombs = (state: State, action: ChangeNumberOfBombsAction) => {
  if (state.isPlaying && !(state.isWinner || state.isDead)) return;

  state.numberOfBombs = action.newNumberOfBombs;
};
