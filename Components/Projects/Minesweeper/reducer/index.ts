import { CustomAnimations } from '../Components/Game/Game'
import { Cell } from '../types'
import { applyAnimation } from './functions/applyAnimation'
import { changeNumberOfBombs } from './functions/changeNumberOfBombs'
import { changeNumberOfColumns } from './functions/changeNumberOfColumns'
import { changeNumberOfRows } from './functions/changeNumberOfRows'
import { clickCell } from './functions/clickCell/clickCell'
import { init } from './functions/init'

type PlaceBombColor = "red"

export type AnimationColorsRecord = Map<CustomAnimations, PlaceBombColor>

export const ANIMATION_COLORS: AnimationColorsRecord = new Map([["PlaceBombs", "red"]])

export interface Animation {
  columnIndex: number
  rowIndex: number
  color: AnimationColorsRecord extends Map<CustomAnimations, infer I> ? I : never;
}

interface AnimationStep {
  time: number
  animations: Animation[]
}

export interface State {
  rows: number
  columns: number
  numberOfBombs: number
  customAnimations: Map<CustomAnimations, boolean>
  board: Cell[][]
  isPlaying: boolean
  isDead: boolean
  isWinner: boolean
  animations: AnimationStep[]
}

export type Action =
  | { type: 'Init' }
  | { type: 'ClickCell'; rowIndex: number, columnIndex: number }
  | { type: 'ChangeNumberOfColumns'; newNumberOfColumns: number }
  | { type: 'ChangeNumberOfRows'; newNumberOfRows: number }
  | { type: 'ChangeNumberOfBombs'; newNumberOfBombs: number }
  | { type: 'Animation' }

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
    case 'Animation':
      return applyAnimation(state)

    default:
      return state
  }
}
