import { ClickCellAction, State } from '../..'
import { fisherYatesShuffle } from '../../../../../../Utilities'
import { extractRowAndColumnFromId } from '../../../functions/extractRowAndColumnFromId'

export const placeBombs = (
  state: State,
  action: ClickCellAction
) => {
  if (!state.allowedOperations.PlaceBombs) return

  if (state.customAnimations.PlaceBombs) {
    for (let i = 0; i < state.numberOfBombs; i++) {
      let animationLocation = state.columns * state.rows - 1 - i

      if(animationLocation <= state.columns * action.rowIndex + action.columnIndex) animationLocation--

      const [animationLocationRow, animationLocationColumn] = extractRowAndColumnFromId(animationLocation, state.columns)

      state.board[animationLocationRow][animationLocationColumn] = {
        ...state.board[animationLocationRow][animationLocationColumn],
        isBomb: true,
      }

      state.animationToApply.push({
        time: 500,
        animations: [
          {
            columnIndex: animationLocationColumn,
            rowIndex: animationLocationRow,
            color: '#eca1a6',
          },
        ],
      })
    }
  }

  const possibleBombLocations: number[] = []

  for (let rIndex = 0; rIndex < state.rows; rIndex++) {
    for (let cIndex = 0; cIndex < state.columns; cIndex++) {
      if (rIndex === action.rowIndex && cIndex === action.columnIndex) continue
      possibleBombLocations.push(cIndex + rIndex * state.columns)
    }
  }

  fisherYatesShuffle(possibleBombLocations)

  for (let i = 0; i < state.numberOfBombs; i++) {
    const randomBombLocation = possibleBombLocations.pop() as number

    const [randomBombLocationRow, randomBombLocationColumn] = extractRowAndColumnFromId(randomBombLocation, state.columns)

    const switchHasBomb =
      state.board[randomBombLocationRow][randomBombLocationColumn].isBomb

      state.board[randomBombLocationRow][randomBombLocationColumn].isBomb = true;

    if (state.customAnimations.PlaceBombs) {
      let animationLocation = state.columns * state.rows - 1 - i

      if(animationLocation <= state.columns * action.rowIndex + action.columnIndex) animationLocation--

      const [animationLocationRow, animationLocationColumn] = extractRowAndColumnFromId(animationLocation, state.columns)

      state.board[animationLocationRow][animationLocationColumn] = {
        ...state.board[animationLocationRow][animationLocationColumn],
        isBomb: switchHasBomb,
      }

      state.animationToApply.push({
        time: 500,
        animations: [
          {
            columnIndex: animationLocationColumn,
            rowIndex: animationLocationRow,
            color: switchHasBomb ? '#eca1a6' : undefined,
          },
          {
            columnIndex: randomBombLocationColumn,
            rowIndex: randomBombLocationRow,
            color: '#eca1a6',
          },
        ],
      })
    }
  }

  if (state.customAnimations.PlaceBombs) {
    state.animationToApply.push({
      time: 500,
      animations: 'WIPE',
    })
  }
}
