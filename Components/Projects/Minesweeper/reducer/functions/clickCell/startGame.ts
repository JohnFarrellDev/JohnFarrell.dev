import { State } from '../..'
import { calculateNeighborInformation } from './calculateNeighborInformation';
import { placeBombs } from './placeBombs';

export const startGame = (state: State, action: { type: 'ClickCell'; rowIndex: number, columnIndex: number }): State => {
  const { board: boardAfterPlacingBombs } = placeBombs(state, state.board, action)

  const {board: boardAfterCalculatingNeighborInformation } = calculateNeighborInformation(state, boardAfterPlacingBombs)
  // calculate neighbor positions
  // calculate number of bombs in neighbor cells

  return {
    ...state,
    board: boardAfterCalculatingNeighborInformation,
    isPlaying: true,
    isDead: false,
    isWinner: false,
    animationToApply: [...state.animationToApply].reverse()
  }
}