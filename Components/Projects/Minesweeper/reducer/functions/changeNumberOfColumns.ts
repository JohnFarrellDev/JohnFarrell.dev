import { Action, State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const changeNumberOfColumns = (state: State, action: Action) => {
  if (action.type !== 'ChangeNumberOfColumns') return
  if (state.isPlaying) return
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
