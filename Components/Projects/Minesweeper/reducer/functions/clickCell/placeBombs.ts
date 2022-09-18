import { State } from '../..'
import { fisherYatesShuffle } from '../../../../../../UtilityFunctions'
import { deepCopy } from '../../../../../../UtilityFunctions/deepCopy'
import { Cell } from '../../../types'

export const placeBombs = (
  state: State,
  board: Cell[][],
  action: { type: 'ClickCell'; rowIndex: number; columnIndex: number }
) => {
  const boardWithBombs = deepCopy(board)

  const possibleBombLocations: number[] = []

  for (let rIndex = 0; rIndex < state.rows; rIndex++) {
    for (let cIndex = 0; cIndex < state.columns; cIndex++) {
      if (rIndex === action.rowIndex && cIndex === action.columnIndex) continue
      possibleBombLocations.push(cIndex + rIndex * state.rows)
    }
  }

  if (state.customAnimations.get('PlaceBombs')) {
    for (let i = 0; i < state.numberOfBombs; i++) {
      const animationLocation = state.columns * state.rows - 1 - i

      const animationLocationColumn = animationLocation % state.columns
      const animationLocationRow = Math.floor(animationLocation / state.columns)

      state.animationToApply.push({
        time: 500,
        animations: [
          {
            columnIndex: animationLocationRow,
            rowIndex: animationLocationColumn,
            color: '#eca1a6',
          },
        ],
      })
    }
  }

  fisherYatesShuffle(possibleBombLocations)

  for (let i = 0; i < state.numberOfBombs; i++) {
    const randomBombLocation = possibleBombLocations.pop() as number
    const randomBombLocationColumn = randomBombLocation % state.columns
    const randomBombLocationRow = Math.floor(randomBombLocation / state.columns)

    const switchHasBomb = boardWithBombs[randomBombLocationRow][randomBombLocationColumn].isBomb

    boardWithBombs[randomBombLocationRow][randomBombLocationColumn] = {
      ...boardWithBombs[randomBombLocationRow][randomBombLocationColumn],
      isBomb: true,
    }

    if (state.customAnimations.get('PlaceBombs')) {

      const animationLocation = state.columns * state.rows - 1 - i
      const animationLocationColumn = animationLocation % state.columns
      const animationLocationRow = Math.floor(animationLocation / state.columns)

      // overwriting it when we make 0th element red but then later element makes it undefined
      state.animationToApply.push({
        time: 500,
        animations: [
          {
            columnIndex: animationLocationRow,
            rowIndex: animationLocationColumn,
            color: switchHasBomb ? '#eca1a6' : undefined,
          },
          {
            columnIndex: randomBombLocationRow,
            rowIndex: randomBombLocationColumn,
            color: '#eca1a6',
          }
        ],
      })
    }

  }

  return {
    board: boardWithBombs,
  }
}
