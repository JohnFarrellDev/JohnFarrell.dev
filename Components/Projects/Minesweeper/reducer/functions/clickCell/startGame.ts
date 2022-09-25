import { State } from '../..'
import { generateBoard } from '../../../functions/generateBoard';
import { calculateNeighborInformation } from './calculateNeighborInformation';
import { placeBombs } from './placeBombs';
import { revealCell } from './revealCell';

export const startGame = (state: State, action: { type: 'ClickCell'; rowIndex: number, columnIndex: number }): State => {
  generateBoard(state)
  const { board: boardAfterPlacingBombs } = placeBombs(state, state.board, action)

  const {board: boardAfterCalculatingNeighborInformation } = calculateNeighborInformation(state, boardAfterPlacingBombs)

  // revealCell()

  const animationToApply = [...state.animationToApply].reverse()

  for(let i = animationToApply.length - 1; i >= 0; i--) {
    animationToApply[i].time = animationToApply[i-1]?.time || 0;
  }

  return {
    ...state,
    board: boardAfterCalculatingNeighborInformation,
    isPlaying: true,
    isDead: false,
    isWinner: false,
    animationToApply
  }
}