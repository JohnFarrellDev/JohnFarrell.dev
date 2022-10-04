import { Change, ClickCellAction, State } from '../..'
import { fisherYatesShuffle } from '../../../../../../Utilities'
import { extractRowAndColumnFromId } from '../../../functions/extractRowAndColumnFromId'

// need to apply all direct state changes to revealedBoard
// animation must look at revealed board to determine moves
// going off state board doesn't work as it lags due to only updating with the animations!

export const placeBombs = (state: State, action: ClickCellAction) => {
  if (!state.allowedOperations.PlaceBombs) return

  const possibleBombLocations: number[] = []

  for (let rIndex = 0; rIndex < state.rows; rIndex++) {
    for (let cIndex = 0; cIndex < state.columns; cIndex++) {
      if (rIndex === action.rowIndex && cIndex === action.columnIndex) continue
      possibleBombLocations.push(cIndex + rIndex * state.columns)
    }
  }

  fisherYatesShuffle(possibleBombLocations)

  if (!state.customAnimations.PlaceBombs) {
    for (let i = 0; i < state.numberOfBombs; i++) {
      const bombLocation =
        possibleBombLocations[possibleBombLocations.length - 1 - i]
      const [bombLocationRow, bombLocationColumn] = extractRowAndColumnFromId(
        bombLocation,
        state.columns
      )
      state.revealedBoard[bombLocationRow][bombLocationColumn].isBomb = true
    }
  }

  if (!state.customAnimations.PlaceBombs) {
    state.changesToApply.enqueue({
      time: 0,
      changes: [{ action: 'COPYBOARD', board: state.revealedBoard }],
    })
    return
  }

  for (let i = 0; i < state.numberOfBombs; i++) {
    let lastNBombLocation = state.columns * state.rows - 1 - i

    if (
      lastNBombLocation <=
      state.columns * action.rowIndex + action.columnIndex
    )
      lastNBombLocation--

    const [animationLocationRow, animationLocationColumn] =
      extractRowAndColumnFromId(lastNBombLocation, state.columns)

    state.revealedBoard[animationLocationRow][animationLocationColumn] = {
      ...state.revealedBoard[animationLocationRow][animationLocationColumn],
      isBomb: true,
    }

    state.changesToApply.enqueue({
      time: 500,
      changes: [
        {
          columnIndex: animationLocationColumn,
          rowIndex: animationLocationRow,
          action: 'PLACEBOMB',
        },
      ],
    })
  }

  for (let i = 0; i < state.numberOfBombs; i++) {
    const bombLocation =
      possibleBombLocations[possibleBombLocations.length - 1 - i]

    const [bombLocationRow, bombLocationColumn] = extractRowAndColumnFromId(
      bombLocation,
      state.columns
    )

    const switchHasBomb =
      state.revealedBoard[bombLocationRow][bombLocationColumn].isBomb

    state.revealedBoard[bombLocationRow][bombLocationColumn].isBomb = true

    let animationLocation = state.columns * state.rows - 1 - i

    if (
      animationLocation <=
      state.columns * action.rowIndex + action.columnIndex
    )
      animationLocation--

    const [animationLocationRow, animationLocationColumn] =
      extractRowAndColumnFromId(animationLocation, state.columns)

    state.revealedBoard[animationLocationRow][animationLocationColumn] = {
      ...state.revealedBoard[animationLocationRow][animationLocationColumn],
      isBomb: switchHasBomb,
    }

    const changes: Change[] = [
      {
        columnIndex: bombLocationColumn,
        rowIndex: bombLocationRow,
        action: 'PLACEBOMB',
      },
    ]

    if(!switchHasBomb) {
      changes.push({
        columnIndex: animationLocationColumn,
        rowIndex: animationLocationRow,
        action: 'REMOVEBOMB',
      })
    }
    
    state.changesToApply.enqueue({
      time: 500,
      changes
    })
    
  }

  state.changesToApply.enqueue({
    time: 500,
    changes: [{ action: 'WIPEANIMATION' }],
  })
}
