import { State } from '../..'
import { generateBoard } from '../../../functions/generateBoard'
import { calculateNeighborInformation } from './calculateNeighborInformation'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  board: generateBoard(5, 5).board,
  columns: 5,
  rows: 5,
  customAnimations: new Map(),
  allowedOperations: new Map([['CalculateNeighbors', true]]),
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 5,
}

let state = { ...startingState }

describe('calculate neighbor information', () => {
  beforeEach(() => {
    state = { ...startingState }
  })

  it('should do nothing if the operation CalculateNeighbors is not provided', () => {
    const { board } = calculateNeighborInformation(
      { ...state, allowedOperations: new Map() },
      state.board
    )

    expect(board[0][0].neighbors).toEqual([])
  })

  it('should correctly know each neighbor cell in the corners on bordered mode', () => {
    const { board } = calculateNeighborInformation(state, state.board)

    expect(board[0][0].neighbors.length).toBe(3)
    expect(board[0][4].neighbors.length).toBe(3)
    expect(board[4][4].neighbors.length).toBe(3)
    expect(board[4][0].neighbors.length).toBe(3)

    expect(board[0][0].neighbors[0].id).toBe(1)
    expect(board[0][0].neighbors[1].id).toBe(5)
    expect(board[0][0].neighbors[2].id).toBe(6)

    expect(board[0][4].neighbors[0].id).toBe(3)
    expect(board[0][4].neighbors[1].id).toBe(8)
    expect(board[0][4].neighbors[2].id).toBe(9)

    expect(board[4][0].neighbors[0].id).toBe(15)
    expect(board[4][0].neighbors[1].id).toBe(16)
    expect(board[4][0].neighbors[2].id).toBe(21)

    expect(board[4][4].neighbors[0].id).toBe(18)
    expect(board[4][4].neighbors[1].id).toBe(19)
    expect(board[4][4].neighbors[2].id).toBe(23)
  })

  it('should correctly now each border neighbor cell on bordered mode', () => {
    const { board } = calculateNeighborInformation(state, state.board)

    expect(board[0][2].neighbors.length).toBe(5)
    expect(board[2][0].neighbors.length).toBe(5)
    expect(board[2][4].neighbors.length).toBe(5)
    expect(board[4][2].neighbors.length).toBe(5)

    expect(board[0][2].neighbors[0].id).toBe(1)
    expect(board[0][2].neighbors[1].id).toBe(3)
    expect(board[0][2].neighbors[2].id).toBe(6)
    expect(board[0][2].neighbors[3].id).toBe(7)
    expect(board[0][2].neighbors[4].id).toBe(8)

    expect(board[2][0].neighbors[0].id).toBe(5)
    expect(board[2][0].neighbors[1].id).toBe(6)
    expect(board[2][0].neighbors[2].id).toBe(11)
    expect(board[2][0].neighbors[3].id).toBe(15)
    expect(board[2][0].neighbors[4].id).toBe(16)

    expect(board[2][4].neighbors[0].id).toBe(8)
    expect(board[2][4].neighbors[1].id).toBe(9)
    expect(board[2][4].neighbors[2].id).toBe(13)
    expect(board[2][4].neighbors[3].id).toBe(18)
    expect(board[2][4].neighbors[4].id).toBe(19)

    expect(board[4][2].neighbors[0].id).toBe(16)
    expect(board[4][2].neighbors[1].id).toBe(17)
    expect(board[4][2].neighbors[2].id).toBe(18)
    expect(board[4][2].neighbors[3].id).toBe(21)
    expect(board[4][2].neighbors[4].id).toBe(23)
  })
})
