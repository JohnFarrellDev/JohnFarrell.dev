import { State } from '../..'
import { generateBoard } from '../../../functions/generateBoard'
import { calculateNeighborInformation } from './calculateNeighborInformation'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  columns: 5,
  rows: 5,
  customAnimations: {
    CalculateNeighbors: true,
    PlaceBombs: false,
  },
  allowedOperations: {
    CalculateNeighbors: true,
    FlagCell: false,
    PlaceBombs: false,
    RevealCell: false,
  },
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 5,
  borderlessMode: false,
  board: [],
}


describe('calculate neighbor information', () => {
  let state = { ...startingState }

  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      customAnimations: { ...startingState.customAnimations },
      allowedOperations: { ...startingState.allowedOperations }
    }
    generateBoard(state)
  })

  it('should do nothing if the operation CalculateNeighbors is not provided', () => {
    state.allowedOperations.CalculateNeighbors = false

    calculateNeighborInformation(state)

    expect(state.board[0][0].neighbors).toEqual([])
  })

  it('should have no animation steps if customAnimations of CalculateNeighbors is not provided', () => {
    state.customAnimations.CalculateNeighbors = false

    calculateNeighborInformation(state)

    expect(state.animationToApply.length).toBe(0)
  })

  it('should return animation steps if custom animations is selected for CalculateNeighbors - bordered mode', () => {
    calculateNeighborInformation(state)

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

  it('should return animation steps if custom animations is selected for CalculateNeighbors - borderless mode', () => {
    state.borderlessMode = true
    
    calculateNeighborInformation(state)

    expect(state.animationToApply.length).toBe(75)

    expect(state.animationToApply[0].time).toBe(400)
    expect(state.animationToApply[0].animations.length).toBe(1)
    expect(state.animationToApply[0].animations[0]).toEqual({
      columnIndex: 0,
      rowIndex: 0,
      color: '#6699ff',
    })

    expect(state.animationToApply[1].time).toBe(400)
    expect(state.animationToApply[1].animations.length).toBe(8)

    expect(state.animationToApply[1].animations[0]).toEqual({
      columnIndex: 4,
      rowIndex: 4,
      color: '#ff3399',
    })
    expect(state.animationToApply[1].animations[1]).toEqual({
      columnIndex: 0,
      rowIndex: 4,
      color: '#ff3399',
    })
    expect(state.animationToApply[1].animations[2]).toEqual({
      columnIndex: 1,
      rowIndex: 4,
      color: '#ff3399',
    })
    expect(state.animationToApply[1].animations[3]).toEqual({
      columnIndex: 4,
      rowIndex: 0,
      color: '#ff3399',
    })
    expect(state.animationToApply[1].animations[4]).toEqual({
      columnIndex: 1,
      rowIndex: 0,
      color: '#ff3399',
    })
    expect(state.animationToApply[1].animations[5]).toEqual({
      columnIndex: 4,
      rowIndex: 1,
      color: '#ff3399',
    })
    expect(state.animationToApply[1].animations[6]).toEqual({
      columnIndex: 0,
      rowIndex: 1,
      color: '#ff3399',
    })
    expect(state.animationToApply[1].animations[7]).toEqual({
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

      calculateNeighborInformation(state)

      expect(state.board[testedCell[0]][testedCell[1]].neighborBombs).toBe(
        expectedBombs
      )
    }
  )
})
