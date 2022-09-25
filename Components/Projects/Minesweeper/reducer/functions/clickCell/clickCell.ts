import { ClickCellAction, State } from '../..'
import { revealCell } from './revealCell/revealCell'
import { startGame } from './startGame'

export const clickCell = (state: State, action: ClickCellAction) => {
  if(state.animationToApply.length > 0) return

  if (!state.isPlaying || state.isDead || state.isWinner) return startGame(state, action)

  revealCell(state, action)
}
