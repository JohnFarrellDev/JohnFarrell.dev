import { deepCopy } from '../../../../UtilityFunctions/deepCopy'
import { CustomAnimations, Operations } from '../Components/Game/Game'
import { Cell } from '../types'
import { applyAnimation } from './functions/applyAnimation'
import { changeAnimations } from './functions/changeAnimations'
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

export type ChangeNumberOfBombsAction = { type: 'ChangeNumberOfBombs'; newNumberOfBombs: number }

export type Action =
  | { type: 'Init' }
  | { type: 'ClickCell'; rowIndex: number; columnIndex: number }
  | { type: 'ChangeNumberOfColumns'; newNumberOfColumns: number }
  | { type: 'ChangeNumberOfRows'; newNumberOfRows: number }
  | ChangeNumberOfBombsAction
  | { type: 'Animation' }
  | { type: 'ChangeAnimations'; animationOption: CustomAnimations | 'All' }
  | { type: 'RightClickCell'; rowIndex: number; columnIndex: number }

const mapActionToFunction = new Map([
  ['Init', init],
  ['ChangeNumberOfColumns', changeNumberOfColumns],
  ['ChangeNumberOfRows', changeNumberOfRows],
  ['ChangeNumberOfBombs', changeNumberOfBombs],
])

export const minesweeperReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Init':
      mapActionToFunction.get(action.type)?.(state, action)
      return deepCopy(state)
    case 'ChangeNumberOfColumns':
      mapActionToFunction.get(action.type)?.(state, action)
      return deepCopy(state)
    case 'ChangeNumberOfRows':
      mapActionToFunction.get(action.type)?.(state, action)
      return deepCopy(state)
    case 'ChangeNumberOfBombs':
      mapActionToFunction.get(action.type)?.(state, action)
      return deepCopy(state)
    case 'ClickCell':
      return clickCell(state, action)
    case 'RightClickCell':
      return rightClickCell(state, action)
    case 'ChangeAnimations':
      return changeAnimations(state, action)
    case 'Animation':
      return applyAnimation(state)

    default:
      return state
  }

  return deepCopy(state)
}
