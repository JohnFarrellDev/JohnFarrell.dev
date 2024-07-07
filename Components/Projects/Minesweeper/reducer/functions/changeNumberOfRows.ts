import { ChangeNumberOfRowsAction, State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const changeNumberOfRows = (state: State, action: ChangeNumberOfRowsAction) => {
  if (state.isPlaying && !(state.isWinner || state.isDead)) return

  state.rows = action.newNumberOfRows

  generateBoard(state)
}
