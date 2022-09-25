import { State } from '../..'

export const mouseUpCell = (state: State) => {
  if (!state.isPlaying) return

  state.isHoldingDown = false
}
