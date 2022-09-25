import { ClickCellAction, State } from '../..'
import { FaceType } from '../../../Components/GameTracking/GameTracking'
import { generateBoard } from '../../../functions/generateBoard'
import { placeBombs } from './placeBombs'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  board: [],
  columns: 10,
  rows: 10,
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false,
  },
  allowedOperations: {
    FlagCell: true,
    CalculateNeighbors: false,
    PlaceBombs: true,
    RevealCell: false,
  },
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 10,
  borderlessMode: false,
  isHoldingDown: false,
  faceType: FaceType.Human
}

const startingAction: ClickCellAction = {
  type: 'ClickCell',
  columnIndex: 5,
  rowIndex: 5,
}

describe('place bombs', () => {
  let state = { ...startingState }
  let action = { ...startingAction }

  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      customAnimations: { ...startingState.customAnimations },
      allowedOperations: { ...startingState.allowedOperations },
    }
    generateBoard(state)
    action = { ...startingAction }
  })

  it('should place as many bombs as the state parameter expects', () => {
    placeBombs(state, action)

    let bombCount = 0

    state.board.forEach((row) => {
      row.forEach((cell) => {
        if (cell.isBomb) bombCount++
      })
    })

    expect(bombCount).toBe(state.numberOfBombs)
  })

  it('should never place a bomb in the rowIndex and columnIndex provided', () => {
    state.columns = 3
    state.rows = 3
    state.numberOfBombs = 8
    generateBoard(state)

    action.columnIndex = 1
    action.rowIndex = 1

    placeBombs(state, action)

    state.board.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (rowIndex === 1 && columnIndex === 1) {
          expect(cell.isBomb).toBe(false)
        } else {
          expect(cell.isBomb).toBe(true)
        }
      })
    })
  })

  it('should never place a bomb in the rowIndex and columnIndex provided when animations are turned on', () => {
    state.columns = 3
    state.rows = 3
    state.numberOfBombs = 8
    state.customAnimations.PlaceBombs = true
    generateBoard(state)

    action.columnIndex = 1
    action.rowIndex = 1

    placeBombs(state, action)

    state.board.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (rowIndex === 1 && columnIndex === 1) {
          expect(cell.isBomb).toBe(false)
        } else {
          expect(cell.isBomb).toBe(true)
        }
      })
    })
  })

  it('should apply animation affects', () => {
    state.customAnimations.PlaceBombs = true;

    placeBombs(state, action)

    expect(state.animationToApply.length).toBe(21)
  })

  it('should add no animation when customAnimation of PlaceBombs is not provided', () => {
    generateBoard(state)

    placeBombs(state, action)

    expect(state.animationToApply.length).toBe(0)
  })

  it('should do nothing if PlaceBombs is not an allowed operation and return the passed in board', () => {
    state.allowedOperations.PlaceBombs = false
    state.customAnimations.PlaceBombs = true
    placeBombs(
      state,
      action
    )

    let bombCount = 0

    state.board.forEach((row) => {
      row.forEach((cell) => {
        if (cell.isBomb) bombCount++
      })
    })

    expect(bombCount).toBe(0)
    expect(state.animationToApply.length).toBe(0)
  })
})
