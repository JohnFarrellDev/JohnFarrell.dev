import { CellColor } from "../reducer"

export interface Cell {
  id: number
  isBomb: boolean
  isCovered: boolean
  isFlagged: boolean
  neighbors: Cell[]
  neighborBombs: number
  color?: CellColor
}
