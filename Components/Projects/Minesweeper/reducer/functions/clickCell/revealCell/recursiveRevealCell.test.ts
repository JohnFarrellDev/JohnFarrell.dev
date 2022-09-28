import { State, ClickCellAction, AnimationColor } from '../../..'
import { FaceType } from '../../../../Components/GameTracking/GameTracking'
import { generateBoard } from '../../../../functions/generateBoard'
import { Cell } from '../../../../types'
import { calculateNeighborInformation } from '../calculateNeighborInformation'
import { recursiveRevealCell } from './recursiveRevealCell'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  columns: 5,
  rows: 5,
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false,
    RecursiveReveal: true,
  },
  allowedOperations: {
    CalculateNeighbors: true,
    FlagCell: false,
    PlaceBombs: false,
    RevealCell: true,
    RecursiveReveal: true,
  },
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 5,
  borderlessMode: false,
  board: [],
  isHoldingDown: false,
  faceType: FaceType.Human,
  flagsPlaced: 0,
}
generateBoard(startingState)
calculateNeighborInformation(startingState)

const startingAction: ClickCellAction = {
  type: 'ClickCell',
  columnIndex: 1,
  rowIndex: 1,
}

const countUncoveredCells = (board: Cell[][]): number => {
  let count = 0

  board.forEach((row) => {
    row.forEach((cell) => {
      count += Number(!cell.isCovered)
    })
  })
  return count
}

describe('recursive reveal cell', () => {
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
    calculateNeighborInformation(state)
    action = { ...action }
  })

  it('should do nothing if RecursiveReveal is not an allowed operation', () => {
    state.allowedOperations.RecursiveReveal = false

    recursiveRevealCell(state, action)

    const count = countUncoveredCells(state.board)
    expect(count).toBe(0)
  })

  it('should reveal recursively every cell', () => {
    recursiveRevealCell(state, action)

    const count = countUncoveredCells(state.board)
    expect(count).toBe(state.columns * state.rows)
  })

  it('should not recursively reveal a cell if it has bombs for neighbors', () => {
    state.board[0][0].isBomb = true
    calculateNeighborInformation(state)

    recursiveRevealCell(state, action)

    const count = countUncoveredCells(state.board)
    expect(count).toBe(0)
  })

  it('should recursively reveal cells until the cell has a bomb', () => {
    state.board[1][1].isBomb = true
    state.board[4][4].isBomb = true
    action.rowIndex = 2
    action.columnIndex = 3
    calculateNeighborInformation(state)

    recursiveRevealCell(state, action)

    const count = countUncoveredCells(state.board)
    expect(count).toBe(20)
  })

  it('should apply no animations of custom animations is set to false for RecursiveReveal', () => {
    state.customAnimations.RecursiveReveal = false
    calculateNeighborInformation(state)
    recursiveRevealCell(state, action)

    expect(state.animationToApply.length).toBe(0)
  })

  it('should apply no animations of custom animations is set to false for RecursiveReveal', () => {
    state.board[1][1].isBomb = true
    state.board[4][4].isBomb = true
    action.rowIndex = 2
    action.columnIndex = 3
    calculateNeighborInformation(state)

    recursiveRevealCell(state, action)

    expect(state.animationToApply.length).toBe(21)
    expect(state.animationToApply[0]).toEqual({
      time: 200,
      animations: [
        { rowIndex: 2, columnIndex: 3, color: AnimationColor.SelectedCell },
      ],
    })
    expect(state.animationToApply[1]).toEqual({
      time: 100,
      animations: [
        { rowIndex: 3, columnIndex: 4, color: AnimationColor.RecursiveRevealColor },
      ],
    })
    expect(state.animationToApply[state.animationToApply.length-1]).toEqual({
      time: 2000,
      animations: "WIPE"
    })
  })
})
