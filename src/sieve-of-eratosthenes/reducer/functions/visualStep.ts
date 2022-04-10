import { Action } from '..'
import { PrimeAction, State } from '../../types'

export const visualStep = (state: State, action: Action) => {
  if (action.type !== 'VisualStep') return state

  const visualStep = state.visualSteps.pop()
  console.log('🚀 ~ file: visualStep.ts ~ line 8 ~ visualStep ~ visualStep', visualStep)
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
    default:
      return state
  }
}
