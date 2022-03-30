import { Action } from '..'
import { shuffle } from '../../../utils/shuffle'
import { NUMBER_OF_PRIME_SHUFFLE_VISUAL_STEPS } from '../../constants'
import { Operation, PotentialPrime, PrimeAction, State } from '../../types'

export const calculatePrimes = (state: State, action: Action): State => {
  if (action.type !== 'CalculatePrimes') return state
  if (state.calculating) return state

  return {
    ...state,
    calculating: true,
    visualSteps: generateSieveOperations(state.potentialPrimes)
  }
}

const generateSieveOperations = (potentialPrimes: PotentialPrime[]): Operation[] => {
  const operations: Operation[] = []

  operations.push({
    action: PrimeAction.SetMessage,
    message: 'Initially we act as if all values are primes, obviously this false and we will correct this',
    intervalMs: 0
  })

  const shuffledPotentialPrimes = shuffle(Array.from(potentialPrimes))
  const splitShuffledPotentialPrimes: PotentialPrime[][] = []
  while (shuffledPotentialPrimes.length > 0) {
    splitShuffledPotentialPrimes.push(shuffledPotentialPrimes.splice(0, potentialPrimes.length / NUMBER_OF_PRIME_SHUFFLE_VISUAL_STEPS))
  }

  splitShuffledPotentialPrimes.forEach((primeSection) => {
    operations.push({
      action: PrimeAction.SetPrimes,
      indexes: primeSection.map((e) => e.value),
      intervalMs: 250
    })
  })

  potentialPrimes[0] = { ...potentialPrimes[0], isPrime: false }
  operations.push({
    action: PrimeAction.SetMessage,
    message: '1 is not a prime number so this we set this to not prime',
    intervalMs: 3000
  })
  operations.push({
    action: PrimeAction.SetNotPrime,
    index: 0,
    intervalMs: 1000
  })

  operations.push({
    action: PrimeAction.SetMessage,
    message: `We will now loop from 2 to the square root of ${potentialPrimes.length} (rounded up)`,
    intervalMs: 3000
  })
  operations.push({
    action: PrimeAction.SetMessage,
    message: `every time we encounter a number that is still marked as prime all multiples of the number can be marked as not prime`,
    intervalMs: 3000
  })

  for (let i = 2; i < Math.sqrt(potentialPrimes.length); i++) {
    if (potentialPrimes[i].isPrime) {
      potentialPrimes[i] = { ...potentialPrimes[i], isPrime: true }

      for (let j = i * 2; j < potentialPrimes.length; j += i) {
        potentialPrimes[j] = { ...potentialPrimes[j], isPrime: false }
      }
    }
  }

  return operations.reverse()
}
