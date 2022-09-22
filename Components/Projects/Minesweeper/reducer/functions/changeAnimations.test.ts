import { Action, State } from '..'
import { changeAnimations } from './changeAnimations'

describe('change animations', () => {
  const gameState: State = {
    animationToApply: [],
    animationTime: 0,
    columns: 5,
    rows: 5,
    isDead: false,
    isPlaying: false,
    isWinner: false,
    numberOfBombs: 5,
    board: [],
    customAnimations: new Map([["PlaceBombs", false]]),
    allowedOperations: new Map(),
    borderlessMode: false
  }

  const action: Action = {
    type: 'ChangeAnimations',
    animationOption: "PlaceBombs"
  }

  it("should do nothing if the action type is not ChangeAnimations", () => {
    const state = changeAnimations({...gameState, customAnimations: new Map(gameState.customAnimations)}, {...action, type: "Invalid" as "ChangeAnimations"})

    expect(state).toEqual(gameState)
  })

  it("should set every animation when all is selected and not every animation is already selected", () => {
    const state = changeAnimations({...gameState, customAnimations: new Map(gameState.customAnimations)}, {...action, animationOption: "All"})

    expect(state).not.toEqual(gameState)
    expect(Array.from(state.customAnimations.values()).every(el => el === true)).toBe(true)
  })

  it("should apply animation allowing it to be set to true then false", () => {
    let state = changeAnimations({...gameState, customAnimations: new Map(gameState.customAnimations)}, action)

    expect(state.customAnimations.get("PlaceBombs")).toBe(true)

    state = changeAnimations(state, action)

    expect(state.customAnimations.get("PlaceBombs")).toBe(false)
  })

  it('should turn of all animations when they are all true then all is submitted', () => {
    let state = changeAnimations({...gameState, customAnimations: new Map(gameState.customAnimations)}, action)

    expect(state.customAnimations.get("PlaceBombs")).toBe(true)

    state = changeAnimations(state, {...action, animationOption: "All"})

    expect(state.customAnimations.get("PlaceBombs")).toBe(false)
  })
})
