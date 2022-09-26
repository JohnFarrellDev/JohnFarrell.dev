import { RightClickCellAction, State } from '..'
import { FaceType } from '../../Components/GameTracking/GameTracking'
import { generateBoard } from '../../functions/generateBoard'
import { rightClickCell } from './rightClickCell'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  board: [],
  columns: 5,
  rows: 5,
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false,
  },
  allowedOperations: {
    FlagCell: true,
    CalculateNeighbors: false,
    PlaceBombs: true,
    RevealCell: true,
    RecursiveReveal: false
  },
  isDead: false,
  isPlaying: true,
  isWinner: false,
  isHoldingDown: false,
  numberOfBombs: 5,
  borderlessMode: false,
  faceType: FaceType.Human
}

const startingAction: RightClickCellAction = {
  type: 'RightClickCell',
  rowIndex: 0,
  columnIndex: 0,
}

describe('right click cell', () => {
  let state = { ...startingState }
  let action = { ...startingAction }

  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      allowedOperations: {
        ...startingState.allowedOperations,
      },
      customAnimations: {
        ...startingState.customAnimations,
      },
    }
    generateBoard(state)
    action = { ...startingAction }
  })

  it('should do nothing if the state isPlaying is not true', () => {
    state.isPlaying = false

    rightClickCell(state, action)

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false)
  })

  it('should do nothing if the state isDead is true', () => {
    state.isDead = true

    rightClickCell(state, action)

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false)
  })

  it('should do nothing if the state isWinner is true', () => {
    state.isWinner = true

    rightClickCell(state, action)

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false)
  })

  it('should do nothing if the state operation for FlagCell is not true', () => {
    state.allowedOperations.FlagCell = false

    rightClickCell(state, action)

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false)
  })

  it('should do nothing if the cell is already uncovered', () => {
    state.board[0][0].isCovered = false

    rightClickCell(state, action)

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false)
  })

  it('should do nothing if there are animations to apply', () => {
    state.animationToApply.push({ time: 0, animations: 'WIPE' })

    rightClickCell(state, action)

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false)
  })

  it('should be able to flag a cell', () => {
    expect(state.board[0][0].isFlagged).toBe(false)

    rightClickCell(state, action)

    expect(state.board[0][0].isFlagged).toBe(true)
  })

  it('should be able to unflag a cell', () => {
    expect(state.board[0][0].isFlagged).toBe(false)
    state.board[0][0].isFlagged = true
    expect(state.board[0][0].isFlagged).toBe(true)

    rightClickCell(state, action)

    expect(state.board[0][0].isFlagged).toBe(false)
  })
})
