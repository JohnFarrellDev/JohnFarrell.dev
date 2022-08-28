import { State } from '../..'
import { generateBoard } from '../../../functions/generateBoard'
import { placeBombs } from './placeBombs';

export const startGame = (state: State, action: { type: 'ClickCell'; rowIndex: number, columnIndex: number }) => {
  const { board: boardAfterGenerate } = generateBoard(state.rows, state.columns)
  const { board: boardAfterPlacingBombs } = placeBombs(state, boardAfterGenerate, action)

  return {
    ...state,
    board: boardAfterPlacingBombs,
    flagsPlaced: 0,
    isPlaying: true,
    isDead: false,
    isWinner: false
  }
}