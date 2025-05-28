import { AnimationSpeed, Change, State } from '../..';
import { Cell } from '../../../types';

const neighborIndexes = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export const calculateNeighborInformation = (state: State) => {
  if (!state.allowedOperations.CalculateNeighbors) return;

  if (!state.customAnimations.CalculateNeighbors) {
    state.revealedBoard.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        const cellNeighbors: Cell[] = [];

        if (state.borderlessMode) {
          const isOnLeft = columnIndex === 0;
          const isOnRight = columnIndex === state.columns - 1;
          const isOnTop = rowIndex === 0;
          const isOnBottom = rowIndex === state.rows - 1;

          const neighborIndexesBorderless = [
            [isOnTop ? state.rows - 1 : -1, isOnLeft ? state.columns - 1 : -1],
            [isOnTop ? state.rows - 1 : -1, 0],
            [isOnTop ? state.rows - 1 : -1, isOnRight ? 0 : 1],
            [0, isOnLeft ? state.columns - 1 : -1],
            [0, isOnRight ? 0 : 1],
            [isOnBottom ? 0 : 1, isOnLeft ? state.columns - 1 : -1],
            [isOnBottom ? 0 : 1, 0],
            [isOnBottom ? 0 : 1, isOnRight ? 0 : 1],
          ];

          neighborIndexesBorderless.forEach((neighborIndex, indx) => {
            const nRowIndex =
              isOnTop && indx <= 2 ? state.rows - 1 : isOnBottom && indx >= 5 ? 0 : rowIndex + neighborIndex[0];

            const nColumnIndex =
              isOnLeft && (indx === 0 || indx === 3 || indx === 5)
                ? state.columns - 1
                : isOnRight && (indx === 2 || indx === 4 || indx === 7)
                  ? 0
                  : columnIndex + neighborIndex[1];

            cellNeighbors.push(state.revealedBoard[nRowIndex][nColumnIndex]);
          });
        } else {
          neighborIndexes.forEach((neighborIndex) => {
            if (state.revealedBoard[rowIndex + neighborIndex[0]]?.[columnIndex + neighborIndex[1]]) {
              cellNeighbors.push(state.revealedBoard[rowIndex + neighborIndex[0]][columnIndex + neighborIndex[1]]);
            }
          });
        }

        cell.neighbors = cellNeighbors;

        cell.neighborBombs = cell.neighbors.reduce((prev, current) => prev + Number(current.isBomb), 0);
      });
    });

    state.changesToApply.enqueue({
      time: 0,
      changes: [{ action: 'COPYNEIGHBORBOMBCOUNT' }],
    });
    return;
  }

  state.revealedBoard.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const cellNeighbors: Cell[] = [];

      state.changesToApply.enqueue({
        time: AnimationSpeed.SelectedCellNeighborInformation,
        changes: [{ columnIndex, rowIndex, action: 'SELECTEDCELL' }],
      });

      const neighborCellsChanges: Change[] = [];

      if (state.borderlessMode) {
        const isOnLeft = columnIndex === 0;
        const isOnRight = columnIndex === state.columns - 1;
        const isOnTop = rowIndex === 0;
        const isOnBottom = rowIndex === state.rows - 1;

        const neighborIndexesBorderless = [
          [isOnTop ? state.rows - 1 : -1, isOnLeft ? state.columns - 1 : -1],
          [isOnTop ? state.rows - 1 : -1, 0],
          [isOnTop ? state.rows - 1 : -1, isOnRight ? 0 : 1],
          [0, isOnLeft ? state.columns - 1 : -1],
          [0, isOnRight ? 0 : 1],
          [isOnBottom ? 0 : 1, isOnLeft ? state.columns - 1 : -1],
          [isOnBottom ? 0 : 1, 0],
          [isOnBottom ? 0 : 1, isOnRight ? 0 : 1],
        ];

        neighborIndexesBorderless.forEach((neighborIndex, indx) => {
          const nRowIndex =
            isOnTop && indx <= 2 ? state.rows - 1 : isOnBottom && indx >= 5 ? 0 : rowIndex + neighborIndex[0];

          const nColumnIndex =
            isOnLeft && (indx === 0 || indx === 3 || indx === 5)
              ? state.columns - 1
              : isOnRight && (indx === 2 || indx === 4 || indx === 7)
                ? 0
                : columnIndex + neighborIndex[1];

          cellNeighbors.push(state.revealedBoard[nRowIndex][nColumnIndex]);
          neighborCellsChanges.push({
            rowIndex: nRowIndex,
            columnIndex: nColumnIndex,
            action: state.revealedBoard[nRowIndex][nColumnIndex].isBomb
              ? 'SELECTEDNEIGHBORCELLBOMB'
              : 'SELECTEDNEIGHBORCELL',
          });
        });
      } else {
        neighborIndexes.forEach((neighborIndex) => {
          if (state.revealedBoard[rowIndex + neighborIndex[0]]?.[columnIndex + neighborIndex[1]]) {
            cellNeighbors.push(state.revealedBoard[rowIndex + neighborIndex[0]][columnIndex + neighborIndex[1]]);
            neighborCellsChanges.push({
              rowIndex: rowIndex + neighborIndex[0],
              columnIndex: columnIndex + neighborIndex[1],
              action: state.revealedBoard[rowIndex + neighborIndex[0]][columnIndex + neighborIndex[1]].isBomb
                ? 'SELECTEDNEIGHBORCELLBOMB'
                : 'SELECTEDNEIGHBORCELL',
            });
          }
        });
      }

      const neighbors = cellNeighbors;

      const neighborBombs = neighbors.reduce((prev, current) => prev + Number(current.isBomb), 0);

      neighborCellsChanges.push({
        action: 'APPLYNEIGHBORINFORMATION',
        neighbors,
        neighborBombs,
        rowIndex,
        columnIndex,
      });

      state.changesToApply.enqueue({
        time: AnimationSpeed.NeighborInformation,
        changes: neighborCellsChanges,
      });

      state.changesToApply.enqueue({
        time: 0,
        changes: [{ action: 'WIPEANIMATION' }],
      });
    });
  });
};
