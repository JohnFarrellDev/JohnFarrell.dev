export const extractRowAndColumnFromId = (id: number, numberOfColumns: number): [row: number, column: number] => {
  const randomBombLocationColumn = id % numberOfColumns;
  const randomBombLocationRow = Math.floor(id / numberOfColumns);

  return [randomBombLocationRow, randomBombLocationColumn];
};
