import { Action, State } from '../..'
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
    PlaceBombs: false
  },
  allowedOperations: {
    FlagCell: true,
    CalculateNeighbors: false,
    PlaceBombs: false,
    RevealCell: false
  },
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 10,
  borderlessMode: false,
}

const action: Action = {
  type: 'ClickCell',
  columnIndex: 5,
  rowIndex: 5,
}

let state = { ...startingState }

describe('place bombs', () => {
  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      customAnimations: {...startingState.customAnimations},
      allowedOperations: {...startingState.allowedOperations},
    }
    generateBoard(state)
  })

  it('should place as many bombs as the state parameter expects', () => {
    const expectedNumberOfBombs = 10
    const { board } = placeBombs(
      { ...state, numberOfBombs: expectedNumberOfBombs },
      state.board,
      action
    )

    let bombCount = 0

    board.forEach((row) => {
      row.forEach((cell) => {
        if (cell.isBomb) bombCount++
      })
    })

    expect(bombCount).toBe(expectedNumberOfBombs)
  })

  it('should never place a bomb in the rowIndex and columnIndex provided', () => {
    const localTestState: State = {
      ...state,
      columns: 3,
      rows: 3,
      numberOfBombs: 8,
      allowedOperations: new Map([['PlaceBombs', true]]),
      customAnimations: new Map()
    }
    generateBoard(localTestState)

    const localTestAction = {
      ...action,
      columnIndex: 1,
      rowIndex: 1,
    }

    const { board } = placeBombs(
      localTestState,
      localTestState.board,
      localTestAction
    )

    board.forEach((row, rowIndex) => {
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
    const localTestState: State = {
      ...state,
      columns: 3,
      rows: 3,
      numberOfBombs: 8,
      allowedOperations: new Map([['PlaceBombs', true]]),
      customAnimations: new Map([['PlaceBombs', true]])
    }
    generateBoard(localTestState)

    const localTestAction = {
      ...action,
      columnIndex: 1,
      rowIndex: 1,
    }

    const { board } = placeBombs(
      localTestState,
      localTestState.board,
      localTestAction
    )

    board.forEach((row, rowIndex) => {
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
    const innerState: State = {
      ...state,
      columns: 5,
      rows: 5,
      numberOfBombs: 5,
      customAnimations: new Map([['PlaceBombs', true]]),
    }
    generateBoard(state)

    placeBombs(innerState, innerState.board, action)

    expect(innerState.animationToApply.length).toBe(11)
  })

  it('should add no animation when customAnimation of PlaceBombs is not provided', () => {
    const innerState: State = {
      ...state,
      columns: 5,
      rows: 5,
      numberOfBombs: 5,
      customAnimations: new Map(),
    }
    generateBoard(state)

    placeBombs(innerState, innerState.board, action)

    expect(innerState.animationToApply.length).toBe(0)
  })

  it('should do nothing if PlaceBombs is not an allowed operation and return the passed in board', () => {
    const { board } = placeBombs(
      { ...state, allowedOperations: new Map() },
      state.board,
      action
    )

    let bombCount = 0

    board.forEach((row) => {
      row.forEach((cell) => {
        if (cell.isBomb) bombCount++
      })
    })

    expect(bombCount).toBe(0)
    expect(state.board).toBe(board)
  })
})
