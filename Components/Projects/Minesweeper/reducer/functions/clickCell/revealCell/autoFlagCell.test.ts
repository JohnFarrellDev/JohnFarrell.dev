import { State } from '../../..'
import { minesweeperStateFactory } from '../../../../../../../factories/minesweeperState'
import { generateBoard } from '../../../../functions/generateBoard'
import { calculateNeighborInformation } from '../calculateNeighborInformation'
import { autoFlagCells } from './autoFlagCells'

const startingState = minesweeperStateFactory.build({
  allowedOperations: {
    AutoFlag: true,
    CalculateNeighbors: true,
  },
  rows: 3,
  columns: 3,
})
generateBoard(startingState)
calculateNeighborInformation(startingState)

describe('auto flag cell', () => {
  let state: State

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: {
        AutoFlag: true,
        CalculateNeighbors: true,
      },
      rows: 3,
      columns: 3,
    })
    generateBoard(state)
    calculateNeighborInformation(state)
  })

  it('should do nothing if AutoFlag is not an allowed operation', () => {
    state.allowedOperations.AutoFlag = false

    autoFlagCells(state)

    expect(state.board).toEqual(startingState.board)
  })

  it('should flag cells that must be a bomb', () => {
    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        expect(state.board[r][c].isFlagged).toBe(false)
      }
    }

    state.board[1][1].isCovered = false
    state.board[1][1].neighborBombs = 8
    autoFlagCells(state)

    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        if (r === 1 && c === 1) {
          expect(state.board[r][c].isFlagged).toBe(false)
        } else {
          expect(state.board[r][c].isFlagged).toBe(true)
        }
      }
    }
  })

  it('should not flag cells when there are more uncovered cells that known neighbor bombs', () => {
    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        expect(state.board[r][c].isFlagged).toBe(false)
      }
    }

    state.board[1][1].isCovered = false
    state.board[1][1].neighborBombs = 7
    autoFlagCells(state)

    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        expect(state.board[r][c].isFlagged).toBe(false)
      }
    }
  })
})
