import { ChangeNumberOfBombsAction, State } from '..'

export const changeNumberOfBombs = (state: State, action: ChangeNumberOfBombsAction) => {
  if(action.newNumberOfBombs <= 0 || action.newNumberOfBombs >= state.rows * state.columns || Number.isNaN(action.newNumberOfBombs)) return;
  if(state.isPlaying) return;

  state.numberOfBombs = action.newNumberOfBombs
}
