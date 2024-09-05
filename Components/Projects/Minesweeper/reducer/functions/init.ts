import { State } from '..';
import { generateBoard } from '../../functions/generateBoard';

export const init = (state: State) => {
  generateBoard(state);
};
