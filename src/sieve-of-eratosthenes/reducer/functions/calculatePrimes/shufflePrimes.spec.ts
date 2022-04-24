import * as shuffle from '../../../../utils/shuffle'
import { INITIAL_NUMBER_OF_PRIMES, NUMBER_OF_PRIME_SHUFFLE_VISUAL_STEPS } from '../../../constants'
import { OperationSetPrimes, PotentialPrime, PrimeAction } from '../../../types'
import { shufflePrimes } from './shufflePrimes'

describe('shufflePrimes', () => {
  let potentialPrimes: PotentialPrime[] = []
  let operations: OperationSetPrimes[] = []

  beforeEach(() => {
    potentialPrimes = new Array(INITIAL_NUMBER_OF_PRIMES).fill(null).map((_, i) => {
      return {
        value: i,
        isHighlighted: false,
        isHighlightedNotPrime: false,
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

  it('Should create number of operations length equal to NUMBER_OF_PRIME_SHUFFLE_VISUAL_STEPS', () => {
    expect(operations.length).toBe(0)
    shufflePrimes(potentialPrimes, operations)
    expect(operations.length).toBe(NUMBER_OF_PRIME_SHUFFLE_VISUAL_STEPS)
  })

  it('should assign an equal amount of indexes to each operation', () => {
    shufflePrimes(potentialPrimes, operations)

    operations.forEach((operation) => {
      expect(operation.indexes.length).toBe(INITIAL_NUMBER_OF_PRIMES / NUMBER_OF_PRIME_SHUFFLE_VISUAL_STEPS)
    })
  })

  it('should have an operation for every index', () => {
    const allIndex = new Set(new Array(200).fill(INITIAL_NUMBER_OF_PRIMES).map((_, index) => index))
    shufflePrimes(potentialPrimes, operations)

    expect(allIndex.size).toBe(INITIAL_NUMBER_OF_PRIMES)

    operations.forEach((operation) => {
      operation.indexes.forEach((index) => {
        allIndex.delete(index)
      })
    })

    expect(allIndex.size).toBe(0)
  })

  it('should have the SetPrimes action on the operation', () => {
    shufflePrimes(potentialPrimes, operations)

    operations.forEach((operation) => {
      expect(operation.action).toBe(PrimeAction.SetPrimes)
    })
  })

  it('should call the shuffle function against our potential primes', () => {
    const spy = jest.spyOn(shuffle, 'shuffle')

    shufflePrimes(potentialPrimes, operations)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
