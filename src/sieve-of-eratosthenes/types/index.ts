export interface State {
  potentialPrimes: PotentialPrime[]
  calculating: boolean
  message: string
  visualSteps: Operation[]
}

export interface PotentialPrime {
  isPrime: boolean
  value: number
  isHighlighted: boolean
}

export interface CellI {
  isPrime: boolean
  isHighlighted: boolean
}

export type Operation = OperationSetPrimes | OperationSetPrime | OperationSetNotPrime | OperationSetMessage | OperationHighlightCell

interface OperationSetPrimes {
  action: PrimeAction.SetPrimes
  intervalMs: number
  indexes: number[]
}

interface OperationSetPrime {
  action: PrimeAction.SetPrime
  intervalMs: number
  index: number
}

interface OperationSetNotPrime {
  action: PrimeAction.SetNotPrime
  intervalMs: number
  index: number
}

interface OperationSetMessage {
  action: PrimeAction.SetMessage
  intervalMs: number
  message: string
}

interface OperationHighlightCell {
  action: PrimeAction.HighlightCell
  intervalMs: number
  index: number
}

export enum PrimeAction {
  SetMessage,
  SetPrimes,
  SetPrime,
  SetNotPrime,
  HighlightCell
}
