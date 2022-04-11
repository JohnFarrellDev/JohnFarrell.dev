import { shuffle } from '../../../../utils/shuffle'
import { NUMBER_OF_PRIME_SHUFFLE_VISUAL_STEPS } from '../../../constants'
import { Operation, PotentialPrime, PrimeAction } from '../../../types'

export const shufflePrimes = (primes: PotentialPrime[], operations: Operation[]) => {
  const shuffledPotentialPrimes = shuffle(Array.from(primes))
  const splitShuffledPotentialPrimes: PotentialPrime[][] = []
  while (shuffledPotentialPrimes.length > 0) {
    splitShuffledPotentialPrimes.push(shuffledPotentialPrimes.splice(0, primes.length / NUMBER_OF_PRIME_SHUFFLE_VISUAL_STEPS))
  }

  primes.forEach((prime) => {
    prime.isPrime = true
  })
  splitShuffledPotentialPrimes.forEach((primeSection) => {
    operations.push({
      action: PrimeAction.SetPrimes,
      indexes: primeSection.map((e) => e.value),
      intervalMs: 251
    })
  })
}
