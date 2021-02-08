import { State } from "../..";
import { generateBoard, revealCells } from "../../../functions";
import { calculateNeighborPositions } from "../../../functions/calculateNeighborPositions";
import { VisualOption } from "../../../types";
import { countNeighborBombs } from "./countNeighborBombs";
import { placeBombs } from "./placeBombs";

export const notPlaying = (state: State, action: { type: 'ClickCell', cellIndex: number }) => {
  const visualSteps: VisualOption[] = [];

  const { board: boardAfterGenerate, visualSteps: generateBoardVisualSteps } = generateBoard(state.rows, state.columns, state.showVisual);
  // console.log("🚀 ~ file: notPlaying.ts ~ line 12 ~ notPlaying ~ boardAfterGenerate", boardAfterGenerate)
  visualSteps.push(...generateBoardVisualSteps);

  const { board: boardAfterPlacingBombs, visualSteps: placeBombsVisualState } = placeBombs(state, boardAfterGenerate, action);
  visualSteps.push(...placeBombsVisualState);

  const { board: boardAfterNeighborPositions, visualSteps: calculateNeighborsVisualState } = calculateNeighborPositions(state, boardAfterPlacingBombs);
  visualSteps.push(...calculateNeighborsVisualState);

  const { board: boardAfterCountingNeighborBombs, visualSteps: countNeighborBombsVisualState } = countNeighborBombs(state, boardAfterNeighborPositions)
  visualSteps.push(...countNeighborBombsVisualState);

  // carry on from HERE, clickCells() is probably reason for everything being revealed as visualization starts
  const {
    board: boardWithCellsRevealed,
    visualSteps: boardWithCellsRevealedVisualSteps,
    hasWon,
    hasLost, } = revealCells(action.cellIndex, boardAfterCountingNeighborBombs, state.autoReveal, state.autoFlag, state.autoPlay, state.showVisual);
  visualSteps.push(...boardWithCellsRevealedVisualSteps);

  if (state.showVisual) {
    return {
      ...state,
      visualSteps
    }
  }

  // return {
  //   ...state,
  //   board: boardWithCellsRevealed.board,
  //   flagsPlaced: 0,
  //   isPlaying: boardWithCellsRevealed.hasWon ? false : true,
  //   isDead: boardWithCellsRevealed.hasLost,
  //   isWinner: boardWithCellsRevealed.hasWon,
  //   face: boardWithCellsRevealed.hasWon ? Faces.Celebration : Faces.Happy,
  //   timer: 0,
  //   visualSteps
  // }
}