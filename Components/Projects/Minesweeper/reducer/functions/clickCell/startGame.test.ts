import { ClickCellAction, State } from '../..'
import { startGame } from './startGame'

import { generateBoard } from '../../../functions/generateBoard'
import { calculateNeighborInformation } from './calculateNeighborInformation'
import { placeBombs } from './placeBombs'
import { revealCell } from './revealCell/revealCell'
import { minesweeperStateFactory } from '../../../../../../factories/minesweeperState'

jest.mock('../../../functions/generateBoard')
jest.mock('./calculateNeighborInformation')
jest.mock('./placeBombs')
jest.mock('./revealCell/revealCell')

const startingState = minesweeperStateFactory.build({})
generateBoard(startingState)

describe('start game', () => {
  let state: State
  const action: ClickCellAction = {
    type: 'ClickCell',
    columnIndex: 1,
    rowIndex: 1,
  }

  beforeEach(() => {
    state = minesweeperStateFactory.build({})
    generateBoard(state)
    jest.resetAllMocks()
  })

  it('should set isPlaying to true', () => {
    expect(state.isPlaying).toBe(false)

    startGame(state, action)

    expect(state.isPlaying).toBe(true)
  })

  it('should set isWinner to false', () => {
    state.isWinner = true

    expect(state.isWinner).toBe(true)

    startGame(state, action)

    expect(state.isWinner).toBe(false)
  })

  it('should set isDead to false', () => {
    state.isDead = true

    expect(state.isDead).toBe(true)

    startGame(state, action)

    expect(state.isDead).toBe(false)
  })

  it('should reset flags placed to 0', () => {
    state.flagsPlaced = 5

    expect(state.flagsPlaced).toBe(5)

    startGame(state, action)

    expect(state.flagsPlaced).toBe(0)
  })

  it('should call generateBoard, placeBombs, calculateNeighborInformation and revealCell in the correct order with correct params', () => {
    startGame(state, action)

    expect(generateBoard).toBeCalledTimes(1)
    expect(generateBoard).toBeCalledWith(state)

    expect(placeBombs).toBeCalledTimes(1)
    expect(placeBombs).toBeCalledWith(state, action)

    expect(calculateNeighborInformation).toBeCalledTimes(1)
    expect(calculateNeighborInformation).toBeCalledWith(state)

    expect(revealCell).toBeCalledTimes(1)
    expect(revealCell).toBeCalledWith(state, action)

    expect(generateBoard).toHaveBeenCalledBefore(placeBombs)
    expect(placeBombs).toHaveBeenCalledBefore(calculateNeighborInformation)
    expect(calculateNeighborInformation).toHaveBeenCalledBefore(revealCell)
  })
})
