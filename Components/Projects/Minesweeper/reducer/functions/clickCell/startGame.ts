import { State } from '../..'
import { generateBoard } from '../../../functions/generateBoard';
import { calculateNeighborInformation } from './calculateNeighborInformation';
import { placeBombs } from './placeBombs';

export const startGame = (state: State, action: { type: 'ClickCell'; rowIndex: number, columnIndex: number }): State => {
  state.board = generateBoard(state.rows, state.columns).board
  const { board: boardAfterPlacingBombs } = placeBombs(state, state.board, action)

  const {board: boardAfterCalculatingNeighborInformation } = calculateNeighborInformation(state, boardAfterPlacingBombs)

  return {
    ...state,
    board: boardAfterCalculatingNeighborInformation,
    isPlaying: Boolean(state.allowedOperations.get("RevealCell")),
    isDead: false,
    isWinner: false,
    animationToApply: [...state.animationToApply].reverse()
  }
}