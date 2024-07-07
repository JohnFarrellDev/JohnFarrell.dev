import { State } from '../..'

export const mouseDownCell = (state: State) => {
  if (!state.isPlaying || state.isWinner || state.isDead) return

  state.isHoldingDown = true
}
