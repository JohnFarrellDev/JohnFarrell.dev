import { ChangeNumberOfBombsAction, State } from '..'
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState'
import { generateBoard } from '../../functions/generateBoard'
import { changeNumberOfBombs } from './changeNumberOfBombs'

const startingState = minesweeperStateFactory.build({})
generateBoard(startingState)

const startingAction: ChangeNumberOfBombsAction = {
  type: 'ChangeNumberOfBombs',
  newNumberOfBombs: 10,
}

describe('change number of bombs', () => {
  let state: State
  let action: ChangeNumberOfBombsAction

  beforeEach(() => {
    state = minesweeperStateFactory.build({})
    generateBoard(state)
    action = { ...startingAction }
  })

  it('should allow number of bombs to change if isPlaying is true but isWinner is also true', () => {
    state.isPlaying = true
    state.isWinner = true

    changeNumberOfBombs(state, action)

    expect(state.numberOfBombs).toEqual(action.newNumberOfBombs)
  })

  it('should allow number of bombs to change if isPlaying is true but isDead is also true', () => {
    state.isPlaying = true
    state.isDead = true

    changeNumberOfBombs(state, action)

    expect(state.numberOfBombs).toEqual(action.newNumberOfBombs)
  })

  it('should update the number of bombs based on the passed in action param', () => {
    expect(state.numberOfBombs).toBe(5)

    changeNumberOfBombs(state, action)

    expect(state.numberOfBombs).toBe(action.newNumberOfBombs)
  })

  it('should allow one bomb as a minimum', () => {
    expect(state.numberOfBombs).toBe(5)
    action.newNumberOfBombs = 10

    changeNumberOfBombs(state, action)

    expect(state.numberOfBombs).toBe(action.newNumberOfBombs)
  })

  it('should allow one less bomb than number of cells as a maximum', () => {
    expect(state.numberOfBombs).toBe(5)
    action.newNumberOfBombs = state.rows * state.columns - 1

    changeNumberOfBombs(state, action)

    expect(state.numberOfBombs).toBe(action.newNumberOfBombs)
  })
})
