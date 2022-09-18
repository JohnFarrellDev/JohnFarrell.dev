import { State } from '../..'
import { placeBombs } from './placeBombs';

export const startGame = (state: State, action: { type: 'ClickCell'; rowIndex: number, columnIndex: number }): State => {
  const { board: boardAfterPlacingBombs } = placeBombs(state, state.board, action)

  return {
    ...state,
    board: boardAfterPlacingBombs,
    isPlaying: true,
    isDead: false,
    isWinner: false,
    animationToApply: [...state.animationToApply].reverse()
  }
}