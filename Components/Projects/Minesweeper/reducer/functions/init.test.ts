import { State } from '..';
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState';
import { generateBoard } from '../../functions/generateBoard';
import { init } from './init';

import { vi } from 'vitest';

vi.mock('../../functions/generateBoard');

describe('init', () => {
  let state: State;

  beforeEach(() => {
    state = minesweeperStateFactory.build();
    generateBoard(state);
    vi.resetAllMocks();
  });

  it('should call generate board with our state', () => {
    init(state);
    expect(generateBoard).toBeCalledWith(state);
    expect(generateBoard).toBeCalledTimes(1);
  });
});
