import { ClickCellAction, State } from '../..'
import { applyChanges } from '../applyChanges'
import { revealCell } from './revealCell/revealCell'
import { startGame } from './startGame'

export const clickCell = (state: State, action: ClickCellAction) => {
  if (state.changesToApply.length > 0) {
    applyChanges(state, action, true)
    return
  }

  if (!state.isPlaying || state.isDead || state.isWinner)
    return startGame(state, action)

  revealCell(state, action)
}
