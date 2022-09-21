import { Action, State } from '../..'
import { generateBoard } from '../../../functions/generateBoard'
import { placeBombs } from './placeBombs'

describe('place bombs', () => {
  const state: State = {
    animationToApply: [],
    animationTime: 0,
    board: generateBoard(10, 10).board,
    columns: 10,
    rows: 10,
    customAnimations: new Map(),
    allowedOperations: new Map([["PlaceBombs", true]]),
    isDead: false,
    isPlaying: false,
    isWinner: false,
    numberOfBombs: 10
  }

  const action: Action = {
    type: 'ClickCell',
    columnIndex: 5,
    rowIndex: 5,
  }

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
    for (let i = 0; i < 20; i++) {
      const localTestState = {
        ...state,
        board: generateBoard(3, 3).board,
        columns: 3,
        rows: 3,
        numberOfBombs: 8,
      }
      const localTestAction = {
        ...action,
        columnIndex: Math.floor(Math.random() * 3),
        rowIndex: Math.floor(Math.random() * 3),
      }

      const { board } = placeBombs(
        localTestState,
        localTestState.board,
        localTestAction
      )

      board.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
          if (
            rowIndex === localTestAction.rowIndex &&
            columnIndex === localTestAction.columnIndex
          ) {
            expect(cell.isBomb).toBe(false)
          } else {
            expect(cell.isBomb).toBe(true)
          }
        })
      })
    }
  })

  it('should apply animation affects', () => {
    const innerState: State = {
      ...state,
      columns: 5,
      rows: 5,
      board: generateBoard(5, 5).board,
      numberOfBombs: 5,
      customAnimations: new Map([['PlaceBombs', true]]),
    }

    placeBombs(innerState, innerState.board, action)

    expect(innerState.animationToApply.length).toBe(32)
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
