import cloneDeep from 'lodash.clonedeep'
import { CustomAnimations, Operations } from '../Components/Game/Game'
import { Cell } from '../types'
import { applyAnimation } from './functions/applyAnimation'
import { changeNumberOfBombs } from './functions/changeNumberOfBombs'
import { changeNumberOfColumns } from './functions/changeNumberOfColumns'
import { changeNumberOfRows } from './functions/changeNumberOfRows'
import { clickCell } from './functions/clickCell/clickCell'
import { init } from './functions/init'
import { rightClickCell } from './functions/rightClickCell'

type PlaceBombColor = '#eca1a6'
type SelectedCell = '#6699ff'
type SelectedNeighborCell = '#ff3399'
type NoColor = undefined

export type CellColor =
  | PlaceBombColor
  | SelectedCell
  | SelectedNeighborCell
  | NoColor

export type AnimationColorsRecord = Map<CustomAnimations, CellColor>

export const ANIMATION_COLORS: AnimationColorsRecord = new Map([
  ['PlaceBombs', '#eca1a6'],
])

export interface Animation {
  columnIndex: number
  rowIndex: number
  color: AnimationColorsRecord extends Map<CustomAnimations, infer I>
    ? I
    : never
}

export interface AnimationStep {
  time: number
  animations: Animation[] | 'WIPE'
}

export interface State {
  rows: number
  columns: number
  numberOfBombs: number
  borderlessMode: boolean
  customAnimations: Record<CustomAnimations, boolean>
  allowedOperations: Record<Operations, boolean>
  board: Cell[][]
  isPlaying: boolean
  isDead: boolean
  isWinner: boolean
  animationToApply: AnimationStep[]
  animationTime: number
}

export type InitAction = { type: 'Init' }
export type ClickCellAction = { type: 'ClickCell'; rowIndex: number; columnIndex: number }
export type RightClickCellAction = { type: 'RightClickCell'; rowIndex: number; columnIndex: number }
export type ChangeNumberOfColumnsAction = { type: 'ChangeNumberOfColumns'; newNumberOfColumns: number }
export type ChangeNumberOfRowsAction = { type: 'ChangeNumberOfRows'; newNumberOfRows: number }
export type ChangeNumberOfBombsAction = { type: 'ChangeNumberOfBombs'; newNumberOfBombs: number }
export type ApplyAnimationAction = { type: 'ApplyAnimation' }

export type Action =
  | InitAction
  | ClickCellAction
  | ChangeNumberOfColumnsAction
  | ChangeNumberOfRowsAction
  | ChangeNumberOfBombsAction
  | ApplyAnimationAction
  | RightClickCellAction

const mapActionToFunction = {
  'Init': init,
  'ClickCell': clickCell,
  'RightClickCell': rightClickCell,
  'ChangeNumberOfColumns': changeNumberOfColumns,
  'ChangeNumberOfRows': changeNumberOfRows,
  'ChangeNumberOfBombs': changeNumberOfBombs,
  'ApplyAnimation': applyAnimation,
}

export const minesweeperReducer = (state: State, action: Action): State => {
  mapActionToFunction[action.type]?.(state, action)
  return cloneDeep(state)
}
