import { Cell } from '../types'
import { changeNumberOfBombs } from './functions/changeNumberOfBombs'
import { changeNumberOfColumns } from './functions/changeNumberOfColumns'
import { changeNumberOfRows } from './functions/changeNumberOfRows'
import { clickCell } from './functions/clickCell/clickCell'
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

export type Action =
  | { type: 'Init' }
  | { type: 'ClickCell'; rowIndex: number, columnIndex: number }
  | { type: 'ChangeNumberOfColumns'; newNumberOfColumns: number }
  | { type: 'ChangeNumberOfRows'; newNumberOfRows: number }
  | { type: 'ChangeNumberOfBombs'; newNumberOfBombs: number }

export const minesweeperReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Init':
      return init(state)
    case 'ClickCell':
      return clickCell(state, action)
    case 'ChangeNumberOfColumns':
      return changeNumberOfColumns(state, action)
    case 'ChangeNumberOfRows':
      return changeNumberOfRows(state, action)
    case 'ChangeNumberOfBombs':
      return changeNumberOfBombs(state, action)
    default:
      return state
  }
}
