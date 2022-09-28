import { ChangeNumberOfRowsAction, State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const changeNumberOfRows = (state: State, action: ChangeNumberOfRowsAction) => {
  if(state.isPlaying && !(state.isWinner || state.isDead)) return;
  if(action.newNumberOfRows > 30 || action.newNumberOfRows < 3 || Number.isNaN(action.newNumberOfRows)) return;

  state.rows = action.newNumberOfRows
  state.numberOfBombs =
    state.numberOfBombs >= state.columns * action.newNumberOfRows
      ? state.columns * action.newNumberOfRows - 1
      : state.numberOfBombs
  generateBoard(state)
}
