import { CustomAnimations } from "../Components/Game/Game"
import { AnimationColorsRecord } from "../reducer"

export interface Cell {
  id: number
  isBomb: boolean
  isCovered: boolean
  isFlagged: boolean
  neighbors: number[]
  neighborBombs: number
  color?: AnimationColorsRecord extends Map<CustomAnimations, infer I> ? I : never;
}
