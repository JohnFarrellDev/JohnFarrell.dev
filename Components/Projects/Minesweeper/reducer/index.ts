import { Cell } from '../types'
import { init } from './functions/init'

export interface State {
  rows: number
  columns: number
  numberOfBombs: number
  board: Cell[][]
  isPlaying: boolean
  isDead: boolean
  isWinner: boolean
}

export type Action = { type: 'Init' } | { type: 'ClickCell'; cellIndex: number }

export const minesweeperReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Init':
      return init()
    case 'ClickCell':
      return state
    default:
      return state
  }
}
