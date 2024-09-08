import { MouseEvent, useCallback } from 'react';
import { Bomb } from './SVGs/Bomb';
import { RedFlag } from './SVGs/RedFlag';
import { cn } from '../../../../lib/utils';

interface GameCellI {
  rowIndex: number;
  columnIndex: number;
  isCovered: boolean;
  isBomb: boolean;
  isFlagged: boolean;
  isWinner: boolean;
  neighborBombs: number;
  color?: string;
  leftClick: (rowIndex: number, columnIndex: number) => void;
  rightClick: (rowIndex: number, columnIndex: number) => void;
  leftDown: (event: MouseEvent<HTMLDivElement>) => void;
  leftUp: (event: MouseEvent<HTMLDivElement>) => void;
}

export const GameCell = ({
  rowIndex,
  columnIndex,
  isCovered,
  isBomb,
  isFlagged,
  isWinner,
  neighborBombs,
  leftClick,
  rightClick,
  leftDown,
  leftUp,
}: GameCellI) => {
  const clickCell = useCallback(() => {
    leftClick(rowIndex, columnIndex);
  }, [rowIndex, columnIndex, leftClick]);

  const rightClickCell = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      rightClick(rowIndex, columnIndex);
    },
    [rightClick, columnIndex, rowIndex]
  );

  return (
    <div
      onClick={clickCell}
      onContextMenuCapture={rightClickCell}
      onMouseDown={leftDown}
      onMouseUp={leftUp}
      className={cn(
        'flex h-[30px] w-[30px] cursor-pointer select-none items-center justify-center border-2 border-gray-200 bg-gray-600',
        isCovered && 'bg-gray-400',
        isBomb && !isCovered && 'bg-red-500'
      )}
      data-is-covered={isCovered}
      data-is-bomb={isBomb}
      data-number-of-neighbor-bombs={neighborBombs}
    >
      <span
        className={cn(
          'font-bold',
          neighborBombs === 1 && 'text-blue-700',
          neighborBombs === 2 && 'text-green-500',
          neighborBombs === 3 && 'text-red-700',
          neighborBombs === 4 && 'text-purple-700',
          neighborBombs === 5 && 'text-orange-700',
          neighborBombs === 6 && 'text-yellow-700',
          neighborBombs === 7 && 'text-gray-700',
          neighborBombs === 8 && 'text-white'
        )}
      >
        {isFlagged && <RedFlag className="h-[28px] w-[28px]" />}
        {!isCovered && !isFlagged && !isWinner && isBomb && <Bomb className="h-[28px] w-[28px]" />}
        {!isCovered && !isBomb && neighborBombs !== 0 && neighborBombs}
      </span>
    </div>
  );
};
