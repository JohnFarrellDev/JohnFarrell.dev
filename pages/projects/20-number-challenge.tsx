import { useEffect, useState, useRef } from 'react'
import { Layout } from '../../Components/Layout/Layout'
import { SEO } from '../../Components/SEO/SEO'
import { Title } from '../../Components/Utilities/Title/Title'
import { UseLocalStorage } from '../../Utilities/UseLocalStorage'
import { IoCopyOutline } from 'react-icons/io5'
import confetti from 'canvas-confetti'
import styles from './twenty-number-challenge.module.css'

function getRandomValue(notPossibleValues: Set<number>) {
  let randomValue = 0
  while (notPossibleValues.has(randomValue) || randomValue === 0) {
    randomValue = Math.floor(Math.random() * 1000) + 1
  }
  return randomValue
}

function getLowestIndex(slots: (number | null)[], nonNullValues: number[], randomValue: number) {
  if (nonNullValues.length === 0) return 0

  for (let i = slots.length - 1; i >= 0; i--) {
    const slot = slots[i]
    if (slot === null) continue

    if (slot < randomValue) return i + 1
  }

  return 0
}

function getHighestIndex(slots: (number | null)[], nonNullValues: number[], randomValue: number) {
  if (nonNullValues.length === 0) return slots.length - 1

  for (let i = 0; i < slots.length; i++) {
    const slot = slots[i]
    if (slot === null) continue

    if (slot > randomValue) return i - 1
  }

  return slots.length - 1
}

function generateGameOverMessage(isGameOver: boolean, currentScore: number, highScore: number) {
  if (!isGameOver) return <></>

  if (highScore === 0) {
    return (
      <p className={styles.gameOverMessage}>
        Well done on your first game, your score is <span className={styles.gameOverScore}>{currentScore}</span>, which
        is a new high score!
      </p>
    )
  }

  if (currentScore > highScore) {
    return (
      <p className={styles.gameOverMessage}>
        Game Over, your score is <span className={styles.gameOverScore}>{currentScore}</span>, which is a new high
        score!
      </p>
    )
  }

  if (currentScore < 4) {
    return (
      <p className={styles.gameOverMessage}>
        Game Over, your score is <span className={styles.gameOverScore}>{currentScore}</span>, wow that was bad! Your
        high score is {highScore}!
      </p>
    )
  }

  if (currentScore < 8) {
    return (
      <p className={styles.gameOverMessage}>
        Game Over, your score is <span className={styles.gameOverScore}>{currentScore}</span>, you can do better than
        that! Your high score is {highScore}
      </p>
    )
  }

  if (currentScore < 12) {
    return (
      <p className={styles.gameOverMessage}>
        Game Over, your score is <span className={styles.gameOverScore}>{currentScore}</span>, not bad! Your high score
        is {highScore}
      </p>
    )
  }

  if (currentScore < 16) {
    return (
      <p className={styles.gameOverMessage}>
        Game Over, your score is <span className={styles.gameOverScore}>{currentScore}</span>, nice! Your high score is{' '}
        {highScore}
      </p>
    )
  }

  if (currentScore < 20) {
    return (
      <p className={styles.gameOverMessage}>
        Game Over, your score is <span className={styles.gameOverScore}>{currentScore}</span>, great job, so close!
      </p>
    )
  }

  if (currentScore === 20) {
    return <p className={styles.gameOverMessage}>Wow, you got a perfect score!</p>
  }

  return <></>
}

const TwentyNumberChallenge = () => {
  return (
    <Layout>
      <SEO title="Twenty Number Challenge" description="Fun numbers game" image="https://i.imgur.com/xm1cgR9.png" />
      <Title title="Twenty Number Challenge" extraStyles={styles.title} />
      <main className={styles.main}>
        <Game />
      </main>
    </Layout>
  )
}

function applyConfetti(isWinner: boolean) {
  let confettiInterval: NodeJS.Timer | null = null
  if (isWinner) {
    const randomDrift = () => Math.random() * (Math.random() > 0.5 ? 1 : -1)

    confettiInterval = setInterval(() => {
      confetti({
        particleCount: 150,
        spread: 45,
        angle: 45,
        drift: 1 + randomDrift(),
        disableForReducedMotion: true,
        origin: { x: 0.2, y: 0.5 },
        gravity: 1.5,
      })
      confetti({
        particleCount: 300,
        spread: 90,
        drift: randomDrift(),
        disableForReducedMotion: true,
        origin: { x: 0.5, y: 0.5 },
        gravity: 1.5,
      })
      confetti({
        particleCount: 150,
        spread: 45,
        angle: 135,
        drift: -1 + randomDrift(),
        disableForReducedMotion: true,
        origin: { x: 0.8, y: 0.5 },
        gravity: 1.5,
      })
    }, 1000)
  }
  return { confettiInterval }
}

export default TwentyNumberChallenge

const NUMBER_OF_SLOTS = 20

const Game = () => {
  const [hydration, setHydration] = useState(false)

  useEffect(() => {
    setHydration(true)
  }, [])

  const [slots, setSlots] = useState<(number | null)[]>(Array(NUMBER_OF_SLOTS).fill(null))
  const {
    value: highScore,
    setValueLocalStorageNoRerender: setHighScore,
    refetch,
  } = UseLocalStorage('twenty-number-challenge-high-score', 0)

  const resetGameRef = useRef<HTMLButtonElement>(null)
  const slotsContainerRef = useRef<HTMLDivElement>(null)

  const nonNullValues = slots.filter((slot) => slot !== null) as number[]
  const notPossibleValues = new Set<number>(nonNullValues)
  const randomValue = getRandomValue(notPossibleValues)

  const validLowestIndex = getLowestIndex(slots, nonNullValues, randomValue)
  const validHighestIndex = getHighestIndex(slots, nonNullValues, randomValue)

  const checkDisabled = (index: number): boolean => {
    const value = slots[index]
    if (value !== null) return true
    if (index < validLowestIndex) return true
    if (index > validHighestIndex) return true

    return false
  }
  const disabled = new Array(NUMBER_OF_SLOTS).fill(false).map((_, index) => checkDisabled(index))
  const isGameOver = disabled.every((value) => value)
  const isWinner = nonNullValues.length === NUMBER_OF_SLOTS
  const gameOverMessage = generateGameOverMessage(isGameOver, nonNullValues.length, highScore)

  const { confettiInterval } = applyConfetti(isWinner)

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

  if (!hydration) return null

  if (isGameOver && nonNullValues.length > highScore) {
    setHighScore(nonNullValues.length)
  }

  const restartGame = () => {
    if (confettiInterval) clearInterval(confettiInterval)
    refetch()
    setSlots(Array(NUMBER_OF_SLOTS).fill(null))
  }

  const handleClick = (index: number) => {
    if (isGameOver) {
      restartGame()
      return
    }

    const newSlots = [...slots]
    if (newSlots[index] !== null) return
    newSlots[index] = randomValue
    setSlots(newSlots)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') return
    if (e.key === ' ') return

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
      <p className={styles.info}>Attempt to place 20 randomly assigned numbers from 1 to 1,000 in descending order</p>
      <p className={styles.currentNumber}>Your Current Number is:</p>
      <p className={styles.nextNumber}>{randomValue}</p>
      {isGameOver && (
        <>
          {gameOverMessage}
          <div className={styles.gameOver}>
            <button className={styles.gameOverButton} onClick={restartGame} ref={resetGameRef}>
              Game Over, click to restart
            </button>
            <ShareButton score={nonNullValues.length} />
          </div>
        </>
      )}
      <div className={styles.slotsContainer} ref={slotsContainerRef}>
        {slots.map((slot, index) => (
          <Slot
            index={index}
            slotValue={slot}
            disabled={disabled[index]}
            slotFail={
              isGameOver && nonNullValues.length !== 20 && (index === validLowestIndex || index === validHighestIndex)
            }
            handleClick={handleClick}
            handleKeyDown={handleKeyDown}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

const url = 'https://www.johnfarrell.dev/projects/20-number-challenge'

const clipboardMessage = (score: number) => {
  if (score === 20)
    return `I got a perfect score on the Twenty Number Challenge!` + '\n\n' + 'Can you manage it?' + '\n\n' + url

  return `I got a score of ${score} on the Twenty Number Challenge!` + '\n\n' + 'Can you beat it?' + '\n\n' + url
}

const ShareButton = ({ score }: { score: number }) => {
  const copyToClipboard = () => {
    const message = clipboardMessage(score)
    navigator.clipboard.writeText(message)
  }

  return (
    <button onClick={copyToClipboard} className={styles.shareButton}>
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
