export interface Cell {
  id: number
  isBomb: boolean
  isCovered: boolean
  isFlagged: boolean
  neighbors: number[]
  neighborBombs: number
}
