export interface State {
  potentialPrimes: PotentialPrime[]
  calculating: boolean
  message: string
  visualSteps: Operation[]
}

export interface PotentialPrime {
  isPrime?: boolean
  isNotPrime?: boolean
  value: number
}

export interface CellI {
  isPrime: boolean | undefined
  isNotPrime: boolean | undefined
}

export type Operation = OperationSetPrimes | OperationSetPrime | OperationSetNotPrime | OperationSetMessage

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

export enum PrimeAction {
  SetMessage,
  SetPrimes,
  SetPrime,
  SetNotPrime
}
