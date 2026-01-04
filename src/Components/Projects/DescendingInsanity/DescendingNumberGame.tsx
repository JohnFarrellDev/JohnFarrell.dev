'use client';

import { Copy } from 'lucide-react';
import { RefObject, useEffect, useRef, useState } from 'react';
import { deferredGameState, applyConfetti } from './DescendingNumberGame.utils';
import { toast, ToastContainer } from 'react-toastify';
import { cn } from '@/lib/utils';

type SetGameProps = {
  gameType: 'set-size';
  highScore: number;
  setHighScore: (score: number) => void;
};

type LevelGameProps = {
  gameType: 'level';
  level: number;
  setLevel: (level: number) => void;
};

export type SetGameOrLevelGameProps = SetGameProps | LevelGameProps;

type GameProps = {
  numberOfSlots: number;
  refetch: () => void;
} & SetGameOrLevelGameProps;

export const DescendingNumberGame = ({ numberOfSlots, refetch, ...gameTypeProps }: GameProps) => {
  const [slots, setSlots] = useState<(number | null)[]>(Array(numberOfSlots).fill(null));

  const resetGameRef = useRef<HTMLButtonElement>(null);
  const slotsContainerRef = useRef<HTMLDivElement>(null);

  const {
    turnsTaken,
    randomValue,
    validLowestIndex,
    validHighestIndex,
    disabled,
    isGameOver,
    isWinner,
    gameOverMessage,
    gameOverButtonMessage,
    shareMessage,
    updateStorageCondition,
    updateStorageFunction,
  } = deferredGameState(slots, gameTypeProps);

  if (updateStorageCondition) {
    updateStorageFunction(gameTypeProps, turnsTaken);
  }

  const { clearConfetti } = applyConfetti(isWinner);

  useEffect(() => {
    return () => {
      if (clearConfetti) clearConfetti();
    };
  }, [clearConfetti]);

  // for handling focus events
  useEffect(() => {
    if (isGameOver) {
      resetGameRef.current?.focus();
    } else {
      const midIndexNotDisabled = Math.floor((validHighestIndex + validLowestIndex) / 2);
      const midElement = slotsContainerRef.current?.children[midIndexNotDisabled];
      midElement?.querySelector('input')?.focus();
    }
  }, [isGameOver, validHighestIndex, validLowestIndex]);

  const handleRestartGame = () => {
    if (clearConfetti) clearConfetti();
    if (isWinner) refetch();
    if (gameTypeProps.gameType === 'level' && isWinner) {
      setSlots(Array(numberOfSlots + 1).fill(null));
    } else {
      setSlots(Array(numberOfSlots).fill(null));
    }
  };

  const handleSlotClick = (index: number) => {
    if (slots[index] !== null) return;
    if (isGameOver) return;

    const newSlots = [...slots];
    newSlots[index] = randomValue;
    setSlots(newSlots);
  };

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const index = Number((e.target as HTMLInputElement).getAttribute('data-index'));

    if (e.key === 'ArrowUp') {
      const newIndex = index - 1;
      if (newIndex < validLowestIndex) return;
      const newElement = slotsContainerRef.current?.children[newIndex];
      newElement?.querySelector('input')?.focus();
      return;
    }

    if (e.key === 'ArrowDown') {
      const newIndex = index + 1;
      if (newIndex > validHighestIndex) return;
      const newElement = slotsContainerRef.current?.children[newIndex];
      newElement?.querySelector('input')?.focus();
      return;
    }
  }

  return (
    <div className="flex flex-col">
      {!isWinner && <CurrentNumber currentNumber={randomValue} targetNumber={numberOfSlots} />}
      <GameOver
        isGameOver={isGameOver}
        gameOverMessage={gameOverMessage}
        shareMessage={shareMessage}
        gameOverButtonMessage={gameOverButtonMessage}
        handleRestartGame={handleRestartGame}
        resetGameRef={resetGameRef}
      />
      <Slots
        slots={slots}
        slotsContainerRef={slotsContainerRef}
        isGameOver={isGameOver}
        isWinner={isWinner}
        disabled={disabled}
        validLowestIndex={validLowestIndex}
        validHighestIndex={validHighestIndex}
        handleClick={handleSlotClick}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
};

const GameOver = ({
  isGameOver,
  gameOverMessage,
  gameOverButtonMessage,
  shareMessage,
  handleRestartGame,
  resetGameRef,
}: {
  isGameOver: boolean;
  gameOverMessage: React.ReactNode;
  gameOverButtonMessage: string;
  shareMessage: {
    text: string;
    url: string;
    clipboardMessage: string;
  };
  handleRestartGame: () => void;
  resetGameRef: RefObject<HTMLButtonElement | null>;
}) => {
  if (!isGameOver) return null;

  return (
    <>
      {gameOverMessage}
      <div className="mb-2 flex justify-center gap-4">
        <button className="bg-green-300 p-2 hover:bg-green-400" onClick={handleRestartGame} ref={resetGameRef}>
          {gameOverButtonMessage}
        </button>
        <ShareButton shareMessage={shareMessage} />
      </div>
    </>
  );
};

const Slots = ({
  slots,
  slotsContainerRef,
  isGameOver,
  disabled,
  isWinner,
  validHighestIndex,
  validLowestIndex,
  handleClick,
  handleKeyDown,
}: {
  slots: (number | null)[];
  slotsContainerRef: React.RefObject<HTMLDivElement | null>;
  isGameOver: boolean;
  isWinner: boolean;
  disabled: boolean[];
  validLowestIndex: number;
  validHighestIndex: number;
  handleClick: (index: number) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mb-4 flex flex-col gap-1" ref={slotsContainerRef}>
      {slots.map((slot, index) => (
        <Slot
          index={index}
          slotValue={slot}
          disabled={disabled[index]}
          slotFail={isGameOver && !isWinner && (index === validLowestIndex || index === validHighestIndex)}
          handleClick={handleClick}
          handleKeyDown={handleKeyDown}
          key={index}
        />
      ))}
    </div>
  );
};

const CurrentNumber = ({ currentNumber, targetNumber }: { currentNumber: number; targetNumber: number }) => {
  return (
    <>
      <p className="text-center">
        Attempt to place {targetNumber} randomly assigned numbers from 1 to 1,000 in descending order
      </p>
      <p className="text-center">Your Current Number is:</p>
      <p className="text-center text-3xl" suppressHydrationWarning={true}>
        {currentNumber}
      </p>
    </>
  );
};

const ShareButton = ({
  shareMessage: { text, url, clipboardMessage },
}: {
  shareMessage: { text: string; url: string; clipboardMessage: string };
}) => {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(clipboardMessage);
    toast('Copied sharable result to clipboard so you can paste it to others', {
      type: 'success',
      autoClose: 5_000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      position: 'bottom-center',
    });
  };

  const handleShare = async () => {
    const userAgent = navigator.userAgent;
    const isFirefox = /Firefox/i.test(userAgent);
    const isMobile = /Mobile/i.test(userAgent);

    const nonShareBrowser = isFirefox || !isMobile;

    const canShare = navigator.canShare?.({ url, text }) ?? false;

    if (canShare && !nonShareBrowser) {
      await navigator.share({
        url,
        text,
      });
    } else {
      copyToClipboard();
    }
  };

  return (
    <>
      <button onClick={handleShare} className="flex gap-2 bg-blue-300 p-2 text-center hover:bg-blue-400">
        <Copy />
        Share Results
      </button>
      <ToastContainer />
    </>
  );
};

interface SlotProps {
  index: number;
  disabled: boolean;
  slotValue: number | null;
  slotFail: boolean;
  handleClick: (index: number) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Slot({ index, slotValue, disabled, slotFail, handleClick, handleKeyDown }: SlotProps) {
  return (
    <div className="flex justify-center gap-2">
      <span>
        {Number(index + 1)
          .toString()
          .padStart(2, '0')}
        .
      </span>
      <input
        type="button"
        onClick={() => handleClick(index)}
        onKeyDown={handleKeyDown}
        className={cn('block w-[150px] rounded-sm border border-zinc-200 bg-zinc-200 disabled:bg-zinc-400', {
          'bg-red-500': slotFail,
          'disabled:bg-red-500': slotFail,
        })}
        value={slotValue ?? ''}
        disabled={disabled}
      />
    </div>
  );
}
