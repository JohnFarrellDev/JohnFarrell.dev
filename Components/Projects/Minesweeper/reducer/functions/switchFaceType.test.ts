import { State } from '..';
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState';
import { FaceType } from '../../Components/GameTracking/GameTracking';
import { generateBoard } from '../../functions/generateBoard';
import { switchFaceType } from './switchFaceType';

describe('switch face type', () => {
  let state: State;

  beforeEach(() => {
    state = minesweeperStateFactory.build();
    generateBoard(state);
  });

  it('should switch face type from human to cat', () => {
    state.faceType = FaceType.Human;

    switchFaceType(state);

    expect(state.faceType).toBe(FaceType.Cat);
  });

  it('should switch face type from cat to human', () => {
    state.faceType = FaceType.Cat;

    switchFaceType(state);

    expect(state.faceType).toBe(FaceType.Human);
  });
});
