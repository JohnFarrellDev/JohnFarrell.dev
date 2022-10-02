import { State, ClickCellAction, AnimationColor } from '../../..'
import { minesweeperStateFactory } from '../../../../../../../factories/minesweeperState'
import { generateBoard } from '../../../../functions/generateBoard'
import { Cell } from '../../../../types'
import { calculateNeighborInformation } from '../calculateNeighborInformation'
import { recursiveRevealCell } from './recursiveRevealCell'

const countUncoveredCells = (board: Cell[][]): number => {
  let count = 0

  board.forEach((row) => {
    row.forEach((cell) => {
      count += Number(!cell.isCovered)
    })
  })
  return count
}

const startingAction: ClickCellAction = {
  type: 'ClickCell',
  columnIndex: 1,
  rowIndex: 1,
}

describe('recursive reveal cell', () => {
  let state: State
  let action = { ...startingAction }

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: {
        RevealCell: true,
        RecursiveReveal: true,
        CalculateNeighbors: true,
      },
      customAnimations: { RecursiveReveal: true },
      rows: 5,
      columns: 5,
    })
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
    expect(state.animationToApply.toArray()[0]).toEqual({
      time: 200,
      animations: [
        { rowIndex: 2, columnIndex: 3, color: AnimationColor.SelectedCell },
      ],
    })
    expect(state.animationToApply.toArray()[1]).toEqual({
      time: 100,
      animations: [
        {
          rowIndex: 3,
          columnIndex: 4,
          color: AnimationColor.RecursiveRevealColor,
        },
      ],
    })
    expect(state.animationToApply.toArray()[state.animationToApply.length - 1]).toEqual({
      time: 2000,
      animations: 'WIPE',
    })
  })
})
