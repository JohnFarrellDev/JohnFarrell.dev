import { State } from '../..'
import { generateBoard } from '../../../functions/generateBoard'
import { calculateNeighborInformation } from './calculateNeighborInformation'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  board: generateBoard(5, 5).board,
  columns: 5,
  rows: 5,
  customAnimations: new Map([['CalculateNeighbors', true]]),
  allowedOperations: new Map([['CalculateNeighbors', true]]),
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 5,
  borderlessMode: false,
}

let state = { ...startingState }

describe('calculate neighbor information', () => {
  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      board: generateBoard(5, 5).board,
    }
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

  it('should return animation steps if custom animations is selected for CalculateNeighbors', () => {
    calculateNeighborInformation(state, state.board)

    expect(state.animationToApply.length).toBe(75)

    expect(state.animationToApply[0].time).toBe(400)
    expect(state.animationToApply[0].animations.length).toBe(1)
    expect(state.animationToApply[0].animations[0]).toEqual({
      columnIndex: 0,
      rowIndex: 0,
      color: '#6699ff',
    })

    expect(state.animationToApply[1].time).toBe(400)
    expect(state.animationToApply[1].animations.length).toBe(3)
    expect(state.animationToApply[1].animations[0]).toEqual({
      columnIndex: 1,
      rowIndex: 0,
      color: '#ff3399',
    })
    expect(state.animationToApply[1].animations[1]).toEqual({
      columnIndex: 0,
      rowIndex: 1,
      color: '#ff3399',
    })
    expect(state.animationToApply[1].animations[2]).toEqual({
      columnIndex: 1,
      rowIndex: 1,
      color: '#ff3399',
    })

    expect(state.animationToApply[2].time).toBe(400)
    expect(state.animationToApply[2].animations).toBe('WIPE')
  })

  it.each`
    testedCell | testedArea               | expectedBombs | borderlessMode | bombsToPlace
    ${[0, 0]}  | ${'top left corner'}     | ${3}          | ${false}       | ${[[0, 1], [0, 4], [1, 0], [1, 1], [1, 4], [4, 0], [4, 1], [4, 4]]}
    ${[0, 0]}  | ${'top left corner'}     | ${8}          | ${true}        | ${[[0, 1], [0, 4], [1, 0], [1, 1], [1, 4], [4, 0], [4, 1], [4, 4]]}
    ${[4, 0]}  | ${'bottom left corner'}  | ${3}          | ${false}       | ${[[4, 1], [3, 0], [3, 1], [0, 0], [0, 1], [4, 4], [3, 4], [0, 4]]}
    ${[4, 0]}  | ${'bottom left corner'}  | ${8}          | ${true}        | ${[[4, 1], [3, 0], [3, 1], [0, 0], [0, 1], [4, 4], [3, 4], [0, 4]]}
    ${[0, 4]}  | ${'top right corner'}    | ${3}          | ${false}       | ${[[0, 3], [1, 3], [1, 4], [0, 0], [1, 0], [4, 0], [4, 3], [4, 4]]}
    ${[0, 4]}  | ${'top right corner'}    | ${8}          | ${true}        | ${[[0, 3], [1, 3], [1, 4], [0, 0], [1, 0], [4, 0], [4, 3], [4, 4]]}
    ${[4, 4]}  | ${'bottom right corner'} | ${3}          | ${false}       | ${[[4, 3], [3, 3], [3, 4], [0, 3], [0, 4], [4, 0], [3, 0], [0, 0]]}
    ${[4, 4]}  | ${'bottom right corner'} | ${8}          | ${true}        | ${[[4, 3], [3, 3], [3, 4], [0, 3], [0, 4], [4, 0], [3, 0], [0, 0]]}
    ${[0, 2]}  | ${'top middle'}          | ${5}          | ${false}       | ${[[0, 1], [0, 3], [1, 1], [1, 2], [1, 3], [4, 1], [4, 2], [4, 3]]}
    ${[0, 2]}  | ${'top middle'}          | ${8}          | ${true}        | ${[[0, 1], [0, 3], [1, 1], [1, 2], [1, 3], [4, 1], [4, 2], [4, 3]]}
    ${[2, 0]}  | ${'left middle'}         | ${5}          | ${false}       | ${[[1, 0], [1, 1], [2, 1], [3, 0], [3, 1], [1, 4], [2, 4], [3, 4]]}
    ${[2, 0]}  | ${'left middle'}         | ${8}          | ${true}        | ${[[1, 0], [1, 1], [2, 1], [3, 0], [3, 1], [1, 4], [2, 4], [3, 4]]}
    ${[2, 4]}  | ${'right middle'}        | ${5}          | ${false}       | ${[[1, 4], [1, 3], [2, 3], [3, 3], [3, 4], [1, 0], [2, 0], [3, 0]]}
    ${[2, 4]}  | ${'right middle'}        | ${8}          | ${true}        | ${[[1, 4], [1, 3], [2, 3], [3, 3], [3, 4], [1, 0], [2, 0], [3, 0]]}
    ${[4, 2]}  | ${'bottom middle'}       | ${5}          | ${false}       | ${[[4, 1], [3, 1], [3, 2], [3, 3], [4, 3], [0, 1], [0, 2], [0, 3]]}
    ${[4, 2]}  | ${'bottom middle'}       | ${8}          | ${true}        | ${[[4, 1], [3, 1], [3, 2], [3, 3], [4, 3], [0, 1], [0, 2], [0, 3]]}
  `(
    'should have $expectedBombs neighbor bombs in the the $testedArea when borderless mode is $borderlessMode',
    ({
      testedCell,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      testedArea,
      expectedBombs,
      borderlessMode,
      bombsToPlace,
    }: {
      testedCell: [number, number]
      testedArea: string
      expectedBombs: number
      borderlessMode: boolean
      bombsToPlace: [number, number][]
    }) => {
      bombsToPlace.forEach(([row, column]) => {
        state.board[row][column].isBomb = true
      })
      state.borderlessMode = borderlessMode

      const { board } = calculateNeighborInformation(state, state.board)

      expect(board[testedCell[0]][testedCell[1]].neighborBombs).toBe(
        expectedBombs
      )
    }
  )
})
