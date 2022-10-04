import cloneDeep from 'lodash.clonedeep'
import { CustomAnimations, Operations } from '../Components/Game/Game'
import { FaceType } from '../Components/GameTracking/GameTracking'
import { Cell } from '../types'
import { applyChanges } from './functions/applyChanges'
import { changeNumberOfBombs } from './functions/changeNumberOfBombs'
import { changeNumberOfColumns } from './functions/changeNumberOfColumns'
import { changeNumberOfRows } from './functions/changeNumberOfRows'
import { clickCell } from './functions/clickCell/clickCell'
import { mouseDownCell } from './functions/clickCell/mouseDownCell'
import { mouseUpCell } from './functions/clickCell/mouseUpCell'
import { init } from './functions/init'
import { flagCell } from './functions/flagCell'
import { switchFaceType } from './functions/switchFaceType'
import { Queue } from '../../../../Utilities/Queue'

type PlaceBombColor = '#eca1a6'
type SelectedCell = '#90EE90'
type SelectedNeighborCell = '#FF3399'
type RecursiveRevealColor = '#00CED1'
type NoColor = undefined

export type CellColor =
  | PlaceBombColor
  | SelectedCell
  | SelectedNeighborCell
  | RecursiveRevealColor
  | NoColor

export const AnimationColor: Record<string, CellColor> = {
  SelectedCell: '#90EE90',
  RecursiveRevealColor: '#00CED1',
  SelectedNeighborCell: '#FF3399',
  PlaceBombColor: '#eca1a6',
  NoColor: undefined,
}

export type AnimationColorsRecord = Map<CustomAnimations, CellColor>

export type Change =
  | { action: 'WIPEANIMATION' }
  | { action: 'PLACEBOMB'; rowIndex: number; columnIndex: number }
  | { action: 'REMOVEBOMB'; rowIndex: number; columnIndex: number }
  | { action: 'COPYBOARD', board: Cell[][]}

export interface ChangeStep {
  time: number
  changes: Change[]
}

export interface State {
  rows: number
  columns: number
  numberOfBombs: number
  borderlessMode: boolean
  customAnimations: Record<CustomAnimations, boolean>
  allowedOperations: Record<Operations, boolean>
  board: Cell[][]
  revealedBoard: Cell[][]
  isPlaying: boolean
  isDead: boolean
  isWinner: boolean
  isHoldingDown: boolean
  changesToApply: Queue<ChangeStep>
  changeTime: number
  faceType: FaceType
  flagsPlaced: number
}

export type InitAction = { type: 'Init' }
export type ClickCellAction = {
  type: 'ClickCell'
  rowIndex: number
  columnIndex: number
}
export type RightClickCellAction = {
  type: 'RightClickCell'
  rowIndex: number
  columnIndex: number
}
export type ChangeNumberOfColumnsAction = {
  type: 'ChangeNumberOfColumns'
  newNumberOfColumns: number
}
export type ChangeNumberOfRowsAction = {
  type: 'ChangeNumberOfRows'
  newNumberOfRows: number
}
export type ChangeNumberOfBombsAction = {
  type: 'ChangeNumberOfBombs'
  newNumberOfBombs: number
}
export type ApplyChangesAction = { type: 'ApplyChanges' }
export type MouseDownCell = { type: 'MouseDownCell' }
export type MouseUpCell = { type: 'MouseUpCell' }
export type SwitchFaceType = { type: 'SwitchFaceType' }

export type Action =
  | InitAction
  | ClickCellAction
  | ChangeNumberOfColumnsAction
  | ChangeNumberOfRowsAction
  | ChangeNumberOfBombsAction
  | ApplyChangesAction
  | RightClickCellAction
  | MouseDownCell
  | MouseUpCell
  | SwitchFaceType

const mapActionToFunction: Record<
  | 'Init'
  | 'ClickCell'
  | 'RightClickCell'
  | 'ChangeNumberOfColumns'
  | 'ChangeNumberOfRows'
  | 'ChangeNumberOfBombs'
  | 'ApplyChanges'
  | 'MouseDownCell'
  | 'MouseUpCell'
  | 'SwitchFaceType',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (state: State, action: any) => void
> = {
  Init: init,
  ClickCell: clickCell,
  RightClickCell: flagCell,
  ChangeNumberOfColumns: changeNumberOfColumns,
  ChangeNumberOfRows: changeNumberOfRows,
  ChangeNumberOfBombs: changeNumberOfBombs,
  ApplyChanges: applyChanges,
  MouseDownCell: mouseDownCell,
  MouseUpCell: mouseUpCell,
  SwitchFaceType: switchFaceType,
}

export const minesweeperReducer = (state: State, action: Action): State => {
  mapActionToFunction[action.type](state, action as Action)
  return cloneDeep(state)
}
