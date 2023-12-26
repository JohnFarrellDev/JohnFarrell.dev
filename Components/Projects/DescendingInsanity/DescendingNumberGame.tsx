import { IoCopyOutline } from 'react-icons/io5'
import styles from './DescendingNumberGame.module.css'
import { RefObject, useEffect, useRef, useState } from 'react'
import { gameValues, applyConfetti } from './DescendingNumberGame.utils'

type SetGameProps = {
  gameType: 'set-size'
  highScore: number
  setHighScore: (score: number) => void
}

type LevelGameProps = {
  gameType: 'level'
  level: number
  setLevel: (level: number) => void
}

export type SetGameOrLevelGameProps = SetGameProps | LevelGameProps

type GameProps = {
  numberOfSlots: number
  refetch: () => void
} & SetGameOrLevelGameProps

export const DescendingNumberGame = ({ numberOfSlots, refetch, ...gameTypeProps }: GameProps) => {
  const [slots, setSlots] = useState<(number | null)[]>(Array(numberOfSlots).fill(null))

  const resetGameRef = useRef<HTMLButtonElement>(null)
  const slotsContainerRef = useRef<HTMLDivElement>(null)

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
    updateStorageCondition,
    updateStorageFunction,
  } = gameValues(slots, gameTypeProps)

  if (updateStorageCondition) {
    updateStorageFunction(gameTypeProps, turnsTaken)
  }

  const { clearConfetti } = applyConfetti(isWinner)

  // for handling focus events
  useEffect(() => {
    if (isGameOver) {
      resetGameRef.current?.focus()
    } else {
      const midIndexNotDisabled = Math.floor((validHighestIndex + validLowestIndex) / 2)
      const midElement = slotsContainerRef.current?.children[midIndexNotDisabled] as HTMLDivElement | undefined
      midElement?.querySelector('input')?.focus()
    }
  }, [isGameOver, validHighestIndex, validLowestIndex])

  const handleRestartGame = () => {
    if (clearConfetti) clearConfetti()
    if (isWinner) refetch()
    setSlots(Array(slots.length).fill(null))
  }

  const handleSlotClick = (index: number) => {
    if (slots[index] !== null) return
    if (isGameOver) return

    const newSlots = [...slots]
    newSlots[index] = randomValue
    setSlots(newSlots)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const index = Number((e.target as HTMLInputElement).getAttribute('data-index'))

    if (e.key === 'ArrowUp') {
      const newIndex = index - 1
      if (newIndex < validLowestIndex) return
      const newElement = slotsContainerRef.current?.children[newIndex] as HTMLDivElement | undefined
      newElement?.querySelector('input')?.focus()
      return
    }

    if (e.key === 'ArrowDown') {
      const newIndex = index + 1
      if (newIndex > validHighestIndex) return
      const newElement = slotsContainerRef.current?.children[newIndex] as HTMLDivElement | undefined
      newElement?.querySelector('input')?.focus()
      return
    }
  }

  return (
    <div>
      <CurrentNumber currentNumber={randomValue} targetNumber={numberOfSlots} />
      <GameOver
        isGameOver={isGameOver}
        turnsTaken={turnsTaken}
        gameOverMessage={gameOverMessage}
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
  )
}

const url = 'https://www.johnfarrell.dev/projects/20-number-challenge'

const GameOver = ({
  isGameOver,
  turnsTaken,
  gameOverMessage,
  gameOverButtonMessage,
  handleRestartGame,
  resetGameRef,
}: {
  isGameOver: boolean
  turnsTaken: number
  gameOverMessage: JSX.Element
  gameOverButtonMessage: string
  handleRestartGame: () => void
  resetGameRef: RefObject<HTMLButtonElement>
}) => {
  if (!isGameOver) return null

  return (
    <>
      {gameOverMessage}
      <div className={styles.gameOver}>
        <button className={styles.gameOverButton} onClick={handleRestartGame} ref={resetGameRef}>
          {gameOverButtonMessage}
        </button>
        <ShareButton score={turnsTaken} />
      </div>
    </>
  )
}

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
  slots: (number | null)[]
  slotsContainerRef: React.RefObject<HTMLDivElement>
  isGameOver: boolean
  isWinner: boolean
  disabled: boolean[]
  validLowestIndex: number
  validHighestIndex: number
  handleClick: (index: number) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className={styles.slotsContainer} ref={slotsContainerRef}>
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
  )
}

const CurrentNumber = ({ currentNumber, targetNumber }: { currentNumber: number; targetNumber: number }) => {
  const [hydration, setHydration] = useState(false)

  useEffect(() => {
    setHydration(true)
  }, [])

  if (!hydration) return null

  return (
    <>
      <p className={styles.info}>
        Attempt to place {targetNumber} randomly assigned numbers from 1 to 1,000 in descending order
      </p>
      <p className={styles.currentNumber}>Your Current Number is:</p>
      <p className={styles.nextNumber}>{currentNumber}</p>
    </>
  )
}

const clipboardMessage = (score: number) => {
  if (score === 20)
    return `I got a perfect score on the Twenty Number Challenge!` + '\n\n' + 'Can you manage it?' + '\n\n' + url

  return `I got a score of ${score} on the Twenty Number Challenge!` + '\n\n' + 'Can you beat it?' + '\n\n' + url
}

const ShareButton = ({ score }: { score: number }) => {
  const message = clipboardMessage(score)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          text: message,
        })
        .then(() => {})
        .catch(() => {})
    } else {
      copyToClipboard()
    }
  }

  return (
    <button onClick={handleShare} className={styles.shareButton}>
      <IoCopyOutline size={20} />
      Share Results
    </button>
  )
}

interface SlotProps {
  index: number
  disabled: boolean
  slotValue: number | null
  slotFail: boolean
  handleClick: (index: number) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Slot = ({ index, slotValue, disabled, slotFail, handleClick, handleKeyDown }: SlotProps) => {
  return (
    <div className={styles.slotContainer}>
      <span className={styles.slotNumber}>
        {Number(index + 1)
          .toString()
          .padStart(2, '0')}
        .
      </span>
      <input
        type="button"
        onClick={() => handleClick(index)}
        onKeyDown={handleKeyDown}
        className={styles.slotInput}
        data-slot-fail={slotFail}
        value={slotValue ?? ''}
        disabled={disabled}
        data-index={index}
      />
    </div>
  )
}
