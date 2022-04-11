import { Action } from '../..'
import { Operation, PotentialPrime, PrimeAction, State } from '../../../types'
import { shufflePrimes } from './shufflePrimes'

export const calculatePrimes = (state: State, action: Action): State => {
  if (action.type !== 'CalculatePrimes') return state
  if (state.calculating) return state

  const potentialPrimesCopy: PotentialPrime[] = state.potentialPrimes.map((x) => {
    return {
      ...x
    }
  })

  return {
    ...state,
    calculating: true,
    visualSteps: generateSieveOperations(potentialPrimesCopy)
  }
}

const generateSieveOperations = (potentialPrimes: PotentialPrime[]): Operation[] => {
  const operations: Operation[] = []

  operations.push({
    action: PrimeAction.SetMessage,
    message: 'Initially we act as if all values are primes, obviously this false and we will correct this',
    intervalMs: 10
  })

  shufflePrimes(potentialPrimes, operations)

  potentialPrimes[0] = { ...potentialPrimes[0], isPrime: false }
  // operations.push({
  //   action: PrimeAction.SetMessage,
  //   message: '1 is not a prime number so this we set this to not prime',
  //   intervalMs: 3000
  // })
  // operations.push({
  //   action: PrimeAction.SetNotPrime,
  //   index: 0,
  //   intervalMs: 1000
  // })

  // operations.push({
  //   action: PrimeAction.SetMessage,
  //   message: `We will now loop from 2 to the square root of ${potentialPrimes.length} (rounded up)`,
  //   intervalMs: 3000
  // })
  // operations.push({
  //   action: PrimeAction.SetMessage,
  //   message: `every time we encounter a number that is still marked as prime all multiples of the number can be marked as not prime`,
  //   intervalMs: 3000
  // })

  // for (let i = 2; i < Math.ceil(Math.sqrt(potentialPrimes.length)); i++) {
  //   // Highlight more clearly the cell we are now on
  //   // Highlight the cells we are looping over with a little yellow outline
  //   operations.push({
  //     action: PrimeAction.HighlightCell,
  //     intervalMs: 30,
  //     index: i - 1
  //   })

  //   if (potentialPrimes[i].isPrime) {
  //     for (let j = i * 2; j < potentialPrimes.length; j += i) {
  //       operations.push({
  //         action: PrimeAction.HighlightCell,
  //         intervalMs: 10,
  //         index: j - 1
  //       })
  //       potentialPrimes[j] = { ...potentialPrimes[j], isPrime: false }
  //     }
  //   }
  // }

  return operations.reverse()
}
