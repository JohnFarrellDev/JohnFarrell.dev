import { INITIAL_NUMBER_OF_PRIMES } from '../../../constants'
import { Operation, PotentialPrime } from '../../../types'
import { shufflePrimes } from './shufflePrimes'

describe('shufflePrimes', () => {
  let potentialPrimes: PotentialPrime[] = []
  let operations: Operation[] = []

  beforeEach(() => {
    potentialPrimes = new Array(INITIAL_NUMBER_OF_PRIMES).fill(null).map((_, i) => {
      return {
        value: i,
        isHighlighted: false,
        isPrime: false
      }
    })

    operations = []
  })

  it('Should set all the prime values to true', () => {
    potentialPrimes.forEach((potentialPrime) => {
      expect(potentialPrime.isPrime).toBeFalsy()
    })

    shufflePrimes(potentialPrimes, operations)

    potentialPrimes.forEach((potentialPrime) => {
      expect(potentialPrime.isPrime).toBeTruthy()
    })
  })
})
