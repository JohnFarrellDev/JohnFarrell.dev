import { AnimationColor, State } from '../..'
import { minesweeperStateFactory } from '../../../../../../factories/minesweeperState'
import { generateBoard } from '../../../functions/generateBoard'
import { calculateNeighborInformation } from './calculateNeighborInformation'

describe('calculate neighbor information', () => {
  let state: State

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: { CalculateNeighbors: true },
      customAnimations: { CalculateNeighbors: true },
      rows: 5,
      columns: 5,
    })
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

    expect(state.changesToApply.length).toBe(0)
  })

  it('should return animation steps if custom animations is selected for CalculateNeighbors - bordered mode', () => {
    calculateNeighborInformation(state)

    expect(state.changesToApply.length).toBe(75)

    expect(state.changesToApply.toArray()[0].time).toBe(400)
    expect(state.changesToApply.toArray()[0].changes.length).toBe(1)
    expect(state.changesToApply.toArray()[0].changes[0]).toEqual({
      columnIndex: 0,
      rowIndex: 0,
      color: AnimationColor.SelectedCell,
    })

    expect(state.changesToApply.toArray()[1].time).toBe(400)
    expect(state.changesToApply.toArray()[1].changes.length).toBe(3)
    expect(state.changesToApply.toArray()[1].changes[0]).toEqual({
      columnIndex: 1,
      rowIndex: 0,
      color: AnimationColor.SelectedNeighborCell,
    })
    expect(state.changesToApply.toArray()[1].changes[1]).toEqual({
      columnIndex: 0,
      rowIndex: 1,
      color: AnimationColor.SelectedNeighborCell,
    })
    expect(state.changesToApply.toArray()[1].changes[2]).toEqual({
      columnIndex: 1,
      rowIndex: 1,
      color: AnimationColor.SelectedNeighborCell,
    })

    expect(state.changesToApply.toArray()[2].time).toBe(400)
    expect(state.changesToApply.toArray()[2].changes).toBe('WIPE')
  })

  it('should return animation steps if custom animations is selected for CalculateNeighbors - borderless mode', () => {
    state.borderlessMode = true

    calculateNeighborInformation(state)

    expect(state.changesToApply.length).toBe(75)

    expect(state.changesToApply.toArray()[0].time).toBe(400)
    expect(state.changesToApply.toArray()[0].changes.length).toBe(1)
    expect(state.changesToApply.toArray()[0].changes[0]).toEqual({
      columnIndex: 0,
      rowIndex: 0,
      color: AnimationColor.SelectedCell,
    })
    expect(state.changesToApply.toArray()[1].time).toBe(400)
    expect(state.changesToApply.toArray()[1].changes.length).toBe(8)

    expect(state.changesToApply.toArray()[1].changes[0]).toEqual({
      columnIndex: 4,
      rowIndex: 4,
      color: AnimationColor.SelectedNeighborCell,
    })
    expect(state.changesToApply.toArray()[1].changes[1]).toEqual({
      columnIndex: 0,
      rowIndex: 4,
      color: AnimationColor.SelectedNeighborCell,
    })
    expect(state.changesToApply.toArray()[1].changes[2]).toEqual({
      columnIndex: 1,
      rowIndex: 4,
      color: AnimationColor.SelectedNeighborCell,
    })
    expect(state.changesToApply.toArray()[1].changes[3]).toEqual({
      columnIndex: 4,
      rowIndex: 0,
      color: AnimationColor.SelectedNeighborCell,
    })
    expect(state.changesToApply.toArray()[1].changes[4]).toEqual({
      columnIndex: 1,
      rowIndex: 0,
      color: AnimationColor.SelectedNeighborCell,
    })
    expect(state.changesToApply.toArray()[1].changes[5]).toEqual({
      columnIndex: 4,
      rowIndex: 1,
      color: AnimationColor.SelectedNeighborCell,
    })
    expect(state.changesToApply.toArray()[1].changes[6]).toEqual({
      columnIndex: 0,
      rowIndex: 1,
      color: AnimationColor.SelectedNeighborCell,
    })
    expect(state.changesToApply.toArray()[1].changes[7]).toEqual({
      columnIndex: 1,
      rowIndex: 1,
      color: AnimationColor.SelectedNeighborCell,
    })

    expect(state.changesToApply.toArray()[2].time).toBe(400)
    expect(state.changesToApply.toArray()[2].changes).toBe('WIPE')
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
