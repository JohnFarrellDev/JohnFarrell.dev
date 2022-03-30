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
      return {
        ...state
      }
    case PrimeAction.SetMessage:
      return {
        ...state,
        message: visualStep.message
      }
    default:
      return state
  }
}

// if (operations.length) {
//   setTimeout(() => {
//     const operation = operations.pop()
//     const updatedCells = [...cells]

//     switch (operation.action) {
//       case Action.SetMessage:
//         setMessage(operation.message)
//         break
//       case Action.SetPrime:
//         updatedCells[operation.index] = {
//           ...updatedCells[operation.index],
//           isPrime: true
//         }
//         setCells(updatedCells)
//         break
//       case Action.SetNotPrime:
//         updatedCells[operation.index] = {
//           ...updatedCells[operation.index],
//           isNotPrime: true,
//           isPrime: false
//         }
//         setCells(updatedCells)
//         break
//       default:
//         break
//     }
//   }, operation.interval)

//   if (!operation.length && isCalculating) {
//     setIsCalculating(false)
//   }
// }
