import { ClickCellAction, State } from '../..'
import { generateBoard } from '../../../functions/generateBoard';
import { calculateNeighborInformation } from './calculateNeighborInformation';
import { placeBombs } from './placeBombs';
import { revealCell } from './revealCell';

export const startGame = (state: State, action: ClickCellAction) => {
  state.isPlaying = true;
  generateBoard(state)
  placeBombs(state, action)
  calculateNeighborInformation(state)
  revealCell(state, action)

  const animationToApply = [...state.animationToApply].reverse()

  for(let i = animationToApply.length - 1; i >= 0; i--) {
    animationToApply[i].time = animationToApply[i-1]?.time || 0;
  }

  state.animationToApply = animationToApply
}