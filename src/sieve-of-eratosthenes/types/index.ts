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
  isHighlightedNotPrime: boolean
}

export interface CellI {
  isPrime: boolean
  isHighlighted: boolean
  isHighlightedNotPrime: boolean
}

export type Operation =
  | OperationSetPrimes
  | OperationSetPrime
  | OperationSetNotPrime
  | OperationSetMultipleNotPrime
  | OperationSetMessage
  | OperationHighlightCell
  | OperationHighlightCellNotPrime
  | OperationRemoveHighlights

export interface OperationSetPrimes {
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

interface OperationSetMultipleNotPrime {
  action: PrimeAction.SetNotPrimeMultiple
  intervalMs: number
  indexes: number[]
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

interface OperationHighlightCellNotPrime {
  action: PrimeAction.HighlightCellNotPrime
  intervalMs: number
  index: number
}

interface OperationRemoveHighlights {
  action: PrimeAction.RemoveHighlights
  intervalMs: number
}

export enum PrimeAction {
  SetMessage,
  SetPrimes,
  SetPrime,
  SetNotPrime,
  SetNotPrimeMultiple,
  HighlightCell,
  HighlightCellNotPrime,
  RemoveHighlights
}
