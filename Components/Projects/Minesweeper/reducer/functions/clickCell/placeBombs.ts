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
      const animationLocation =
        possibleBombLocations[possibleBombLocations.length - 1 - i]

        const animationLocationColumn = animationLocation % state.columns
        const animationLocationRow = Math.floor(animationLocation / state.columns)

      state.animations.push({
        time: 500,
        animations: [{ columnIndex: animationLocationRow, rowIndex: animationLocationColumn, color: 'red' }],
      })
    }
  }

  fisherYatesShuffle(possibleBombLocations)

  

  let bombsLeft = state.numberOfBombs
  while (bombsLeft > 0) {
    const randomBombLocation = possibleBombLocations.pop() as number
    const randomBombLocationColumn = randomBombLocation % state.columns
    const randomBombLocationRow = Math.floor(randomBombLocation / state.columns)

    boardWithBombs[randomBombLocationRow][randomBombLocationColumn] = {
      ...boardWithBombs[randomBombLocationRow][randomBombLocationColumn],
      isBomb: true,
    }

    bombsLeft--
  }

  return {
    board: boardWithBombs,
  }
}
