import { ChangeNumberOfColumnsAction, State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const changeNumberOfColumns = (state: State, action: ChangeNumberOfColumnsAction) => {
  if(state.isPlaying && !(state.isWinner || state.isDead)) return;
  if (
    action.newNumberOfColumns > 50 ||
    action.newNumberOfColumns < 3 ||
    Number.isNaN(action.newNumberOfColumns)
  )
    return

  state.columns = action.newNumberOfColumns
  state.numberOfBombs =
    state.numberOfBombs >= state.rows * action.newNumberOfColumns
      ? state.rows * action.newNumberOfColumns - 1
      : state.numberOfBombs
  generateBoard(state)
}
