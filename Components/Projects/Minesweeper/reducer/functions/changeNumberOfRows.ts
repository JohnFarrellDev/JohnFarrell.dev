import { Action, State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const changeNumberOfRows = (state: State, action: Action) => {
  if (action.type !== 'ChangeNumberOfRows') return
  if(state.isPlaying) return
  if(action.newNumberOfRows > 30 || action.newNumberOfRows < 3 || Number.isNaN(action.newNumberOfRows)) return;

  state.rows = action.newNumberOfRows
  state.numberOfBombs =
    state.numberOfBombs >= state.columns * action.newNumberOfRows
      ? state.columns * action.newNumberOfRows - 1
      : state.numberOfBombs
  generateBoard(state)
}
