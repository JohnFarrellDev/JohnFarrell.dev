import { Action } from '../..'
import { Operation, PotentialPrime, PrimeAction, State } from '../../../types'
import { loopPrimes } from './loopPrimes'
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

  operations.push({
    action: PrimeAction.SetMessage,
    message: '0 and 1 are considered not prime numbers so we set them to false',
    intervalMs: 3000
  })
  operations.push({
    action: PrimeAction.SetNotPrimeMultiple,
    indexes: [0, 1],
    intervalMs: 1000
  })
  potentialPrimes[0] = { ...potentialPrimes[0], isPrime: false }
  potentialPrimes[1] = { ...potentialPrimes[1], isPrime: false }

  loopPrimes(potentialPrimes, operations)

  return operations.reverse()
}
