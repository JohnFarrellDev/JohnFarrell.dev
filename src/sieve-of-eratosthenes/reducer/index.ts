import { State } from '../types'
import { calculatePrimes, updateSieveSize, visualStep } from './functions'

export type Action =
  | { type: 'UpdateSieveSize'; newSize: string }
  | { type: 'VisualStep' }
  | { type: 'CalculatePrimes' }
  | { type: 'StopCalculating' }

export const sieveOfEratosthenesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'UpdateSieveSize':
      return updateSieveSize(state, action)
    case 'CalculatePrimes':
      return calculatePrimes(state, action)
    case 'VisualStep':
      return visualStep(state, action)
    case 'StopCalculating':
      return { ...state, calculating: false }
    default:
      return state
  }
}
