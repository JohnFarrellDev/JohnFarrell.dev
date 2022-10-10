import { State, ValidateChangeAction } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const validateChange = (
  state: State,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: ValidateChangeAction
): void => {
  if (state.columns > 50) {
    state.columns = 50
  }

  if (state.columns < 3) {
    state.columns = 3
  }

  if (state.rows < 3) {
    state.rows = 3
  }

  if (state.rows > 30) {
    state.rows = 30
  }

  state.numberOfBombs =
    state.numberOfBombs >= state.rows * state.columns
      ? state.rows * state.columns - 1
      : state.numberOfBombs < 1
      ? 1
      : state.numberOfBombs

  generateBoard(state)
}
