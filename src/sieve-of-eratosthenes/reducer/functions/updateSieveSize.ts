import { Action } from '..'
import { PotentialPrime, State } from '../../types'

export const updateSieveSize = (state: State, action: Action): State => {
  if (action.type !== 'UpdateSieveSize') return state
  if (state.calculating) return state

  const newCells: PotentialPrime[] = new Array(Math.round(Number.parseInt(action.newSize) / 50) * 50).fill(null).map((_, i) => {
    return {
      value: i,
      isPrime: false,
      isHighlighted: false
    }
  })

  return {
    ...state,
    potentialPrimes: newCells
  }
}
