import { AnimationSpeed, Change, ClickCellAction, State } from '../..'
import { fisherYatesShuffle } from '../../../../../../Utilities'
import { extractRowAndColumnFromId } from '../../../functions/extractRowAndColumnFromId'

export const placeBombs = (state: State, action: ClickCellAction) => {
  if (!state.allowedOperations.PlaceBombs) return

  const possibleBombLocationsById: number[] = []

  for (let rIndex = 0; rIndex < state.rows; rIndex++) {
    for (let cIndex = 0; cIndex < state.columns; cIndex++) {
      if (rIndex === action.rowIndex && cIndex === action.columnIndex) continue
      possibleBombLocationsById.push(cIndex + rIndex * state.columns)
    }
  }

  const possibleBombLocations = fisherYatesShuffle(possibleBombLocationsById).map(el => {
    const [bombLocationRow, bombLocationColumn] = extractRowAndColumnFromId(
      el,
      state.columns
    )

    return {
      rowIndex: bombLocationRow,
      columnIndex: bombLocationColumn
    }
  })

  if (!state.customAnimations.PlaceBombs) {
    const bombsToCopy: {rowIndex: number, columnIndex: number}[] = []
    for (let i = 0; i < state.numberOfBombs; i++) {
      const bombLocation =
        possibleBombLocations[possibleBombLocations.length - 1 - i]
      
        bombsToCopy.push(bombLocation)
      state.revealedBoard[bombLocation.rowIndex][bombLocation.columnIndex].isBomb = true
    }

    state.changesToApply.enqueue({
      time: 0,
      changes: [{ action: 'COPYBOMBS', cells: bombsToCopy }],
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
      time: AnimationSpeed.PlaceBomb,
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

    const switchHasBomb =
      state.revealedBoard[bombLocation.rowIndex][bombLocation.columnIndex].isBomb

    state.revealedBoard[bombLocation.rowIndex][bombLocation.columnIndex].isBomb = true

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
        columnIndex: bombLocation.columnIndex,
        rowIndex: bombLocation.rowIndex,
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
      time: AnimationSpeed.PlaceBomb,
      changes
    })
    
  }

  state.changesToApply.enqueue({
    time: 500,
    changes: [{ action: 'WIPEANIMATION' }],
  })
}
