import { Operation, PotentialPrime, PrimeAction } from '../../../types'

export const loopPrimes = (potentialPrimes: PotentialPrime[], operations: Operation[]) => {
  operations.push({
    action: PrimeAction.SetMessage,
    message: `We will now loop from 2 to the square root of ${potentialPrimes.length} (rounded up) [${Math.ceil(
      Math.sqrt(potentialPrimes.length)
    )}]`,
    intervalMs: 3000
  })
  operations.push({
    action: PrimeAction.SetMessage,
    message: `Every time we encounter a number that is still marked as prime all multiples of the number can be marked as not prime`,
    intervalMs: 3000
  })

  for (let i = 2; i < Math.ceil(Math.sqrt(potentialPrimes.length)); i++) {
    operations.push({
      action: PrimeAction.RemoveHighlights,
      intervalMs: 500
    })

    if (potentialPrimes[i].isPrime) {
      operations.push({
        action: PrimeAction.HighlightCell,
        intervalMs: 1000,
        index: i
      })

      for (let j = i * 2; j < potentialPrimes.length; j += i) {
        if (potentialPrimes[j].isPrime) {
          operations.push({
            action: PrimeAction.HighlightCellNotPrime,
            intervalMs: 100,
            index: j
          })
          potentialPrimes[j] = { ...potentialPrimes[j], isPrime: false }
        }
      }
      operations.push({
        action: PrimeAction.SetNotPrimeMultiple,
        intervalMs: 1000,
        indexes: potentialPrimes.filter((x) => !x.isPrime).map((x) => x.value)
      })
    }
  }
}
