import { ClickCellAction, State } from "../../..";
import { extractRowAndColumnFromId } from "../../../../functions/extractRowAndColumnFromId";

export const recursiveRevealCell = (state: State, action: ClickCellAction) => {
    if(state.isDead || !state.allowedOperations.RecursiveReveal) return
    const cellsAllReadySelected = new Set([
        state.board[action.rowIndex][action.columnIndex].id,
      ])
    
      const cellsToVisit = [state.board[action.rowIndex][action.columnIndex].id]
    
      while(cellsToVisit.length > 0) {
        const [row, column] = extractRowAndColumnFromId(cellsToVisit.pop() as number, state.columns)
        const currentCell = state.board[row][column]
        if(currentCell.neighborBombs === 0) {
            currentCell.neighbors.forEach(neighborCell => {
                if(!cellsAllReadySelected.has(neighborCell.id)) {
                    cellsToVisit.push(neighborCell.id);
                    cellsAllReadySelected.add(neighborCell.id)
                }
                neighborCell.isCovered = false
            })
        }
      }
}