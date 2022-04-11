import { Action } from '..'
import { PrimeAction, State } from '../../types'

export const visualStep = (state: State, action: Action) => {
  if (action.type !== 'VisualStep') return state

  const visualStep = state.visualSteps.pop()
  if (!visualStep) return state

  switch (visualStep.action) {
    case PrimeAction.SetPrimes:
      visualStep.indexes.forEach((index) => {
        state.potentialPrimes[index].isPrime = true
      })
      return {
        ...state
      }

    case PrimeAction.SetPrime:
      state.potentialPrimes[visualStep.index].isPrime = true
      return {
        ...state
      }
    case PrimeAction.SetNotPrime:
      state.potentialPrimes[visualStep.index].isPrime = false
      return {
        ...state
      }
    case PrimeAction.SetMessage:
      return {
        ...state,
        message: visualStep.message
      }
    case PrimeAction.HighlightCell:
      state.potentialPrimes[visualStep.index].isHighlighted = true
      return {
        ...state
      }
    case PrimeAction.HighlightCellNotPrime:
      state.potentialPrimes[visualStep.index].isHighlightedNotPrime = true
      return {
        ...state
      }
    case PrimeAction.SetNotPrimeMultiple:
      visualStep.indexes.forEach((index) => {
        state.potentialPrimes[index].isPrime = false
      })
      return {
        ...state
      }
    case PrimeAction.RemoveHighlights:
      state.potentialPrimes.forEach((potentialPrime) => {
        potentialPrime.isHighlighted = false
        potentialPrime.isHighlightedNotPrime = false
      })
      return {
        ...state
      }
    default:
      return state
  }
}
