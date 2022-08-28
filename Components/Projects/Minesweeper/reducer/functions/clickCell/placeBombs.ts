import { State } from '../..'
import { fisherYatesShuffle } from '../../../../../../UtilityFunctions';
import { Cell } from '../../../types'

export const placeBombs = (
  state: State,
  board: Cell[][],
  action: { type: 'ClickCell'; rowIndex: number; columnIndex: number }
) => {
  const possibleBombLocations: number[] = []

  for (let rIndex = 0; rIndex < state.rows; rIndex++) {
    for (let cIndex = 0; cIndex < state.columns; cIndex++) {
      if (rIndex === action.rowIndex && cIndex === action.columnIndex) continue
      possibleBombLocations.push(cIndex + rIndex * state.rows)
    }
  }
  
  fisherYatesShuffle(possibleBombLocations)
  

  let bombsLeft = state.numberOfBombs
  while (bombsLeft > 0) {
    const randomBombLocation = possibleBombLocations.pop() as number
    const randomBombLocationColumn = randomBombLocation % state.columns
    const randomBombLocationRow = Math.floor(randomBombLocation / state.columns)

    board[randomBombLocationRow][randomBombLocationColumn] = {
      ...board[randomBombLocationRow][randomBombLocationColumn],
      isBomb: true,
    }

    bombsLeft--
  }

  return {
    board,
  }
}
