import { Action, State } from '..'

export const changeNumberOfBombs = (state: State, action: Action) => {
  if (action.type !== 'ChangeNumberOfBombs') return
  if(action.newNumberOfBombs <= 0 || action.newNumberOfBombs >= state.rows * state.columns || Number.isNaN(action.newNumberOfBombs)) return;
  if(state.isPlaying) return;

  state.numberOfBombs = action.newNumberOfBombs
}
