import { State } from '../..'

export const mouseDownCell = (state: State) => {
  if (!state.isPlaying) return

  state.isHoldingDown = true
}
