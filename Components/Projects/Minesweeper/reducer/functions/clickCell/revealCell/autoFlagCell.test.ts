import { AnimationColor, State } from '../../..'
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

  it('should apply no animation steps when there are no cells to automatically flag', () => {
    state.customAnimations.FlagCell = true
    state.board[1][1].isCovered = false
    state.board[1][1].neighborBombs = 7

    autoFlagCells(state)

    expect(state.changesToApply.length).toBe(0)
  })

  it('should supply animations for cells to flag', () => {
    state.customAnimations.FlagCell = true
    state.board[1][1].isCovered = false
    state.board[1][1].neighborBombs = 8

    autoFlagCells(state)

    const animations = state.changesToApply.toArray()

    expect(animations.length).toBe(10)
    expect(animations[0]).toEqual({
      time: 500,
      changes: [
        {
          rowIndex: 1,
          columnIndex: 1,
          color: AnimationColor.SelectedCell,
        },
      ],
    })
    expect(animations[1]).toEqual({
      time: 250,
      changes: [
        {
          rowIndex: 0,
          columnIndex: 0,
          color: AnimationColor.PlaceBombColor,
        },
      ],
    })
    expect(animations[animations.length - 1]).toEqual({
      time: 500,
      animations: 'WIPE',
    })
  })
})
