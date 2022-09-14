import { State } from '../..'
import { placeBombs } from './placeBombs';

export const startGame = (state: State, action: { type: 'ClickCell'; rowIndex: number, columnIndex: number }) => {
  const { board: boardAfterPlacingBombs } = placeBombs(state, state.board, action)

  return {
    ...state,
    board: boardAfterPlacingBombs,
    flagsPlaced: 0,
    isPlaying: true,
    isDead: false,
    isWinner: false
  }
}