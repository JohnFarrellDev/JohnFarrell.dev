import confetti from 'canvas-confetti'
import styles from './DescendingNumberGame.module.css'
import { SetGameOrLevelGameProps } from './DescendingNumberGame'

export function applyConfetti(isWinner: boolean) {
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

  if (confettiInterval === null) return { clearConfetti: undefined }

  return { clearConfetti: () => clearInterval(confettiInterval as NodeJS.Timer) }
}

function generateGameOverMessageLevel(isGameOver: boolean, currentScore: number, highScore: number) {
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

export function generateGameOverMessage(
  isGameOver: boolean,
  currentScore: number,
  gameTypeProps: SetGameOrLevelGameProps
) {
  if (!isGameOver) return <></>
  if (gameTypeProps.gameType === 'level') return <></>

  return generateGameOverMessageLevel(isGameOver, currentScore, gameTypeProps.highScore)
}

export function getRandomValue(notPossibleValues: Set<number>) {
  let randomValue = 0
  while (notPossibleValues.has(randomValue) || randomValue === 0) {
    randomValue = Math.floor(Math.random() * 1000) + 1
  }
  return randomValue
}

export function getLowestIndex(slots: (number | null)[], nonNullValues: number[], randomValue: number) {
  if (nonNullValues.length === 0) return 0

  for (let i = slots.length - 1; i >= 0; i--) {
    const slot = slots[i]
    if (slot === null) continue

    if (slot < randomValue) return i + 1
  }

  return 0
}

export function getHighestIndex(slots: (number | null)[], nonNullValues: number[], randomValue: number) {
  if (nonNullValues.length === 0) return slots.length - 1

  for (let i = 0; i < slots.length; i++) {
    const slot = slots[i]
    if (slot === null) continue

    if (slot > randomValue) return i - 1
  }

  return slots.length - 1
}

function updateStorageCondition(
  isGameOver: boolean,
  turnsTaken: number,
  maximumNumberOfTurns: number,
  gameTypeProps: SetGameOrLevelGameProps
) {
  if (gameTypeProps.gameType === 'level') return turnsTaken === maximumNumberOfTurns

  return isGameOver && turnsTaken > gameTypeProps.highScore
}

function updateStorageFunction(gameTypeProps: SetGameOrLevelGameProps, turnsTaken: number) {
  if (gameTypeProps.gameType === 'level') {
    gameTypeProps.setLevel(turnsTaken - 3)
  } else {
    gameTypeProps.setHighScore(turnsTaken)
  }
}

function generateGameOverButtonMessage(isGameOver: boolean, isWinner: boolean, gameTypeProps: SetGameOrLevelGameProps) {
  if (!isGameOver) return ''

  if (!isWinner) return 'Game Over, click to restart'

  if (gameTypeProps.gameType === 'set-size') {
    return 'Click to play again'
  }

  return 'Click to play the next level'
}

export function gameValues(slots: (number | null)[], gameTypeProps: SetGameOrLevelGameProps) {
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
  const disabled = new Array(slots.length).fill(false).map((_, index) => checkDisabled(index))
  const isGameOver = disabled.every((value) => value)
  const isWinner = nonNullValues.length === slots.length
  const gameOverMessage = generateGameOverMessage(isGameOver, nonNullValues.length, gameTypeProps)
  const gameOverButtonMessage = generateGameOverButtonMessage(isGameOver, isWinner, gameTypeProps)

  return {
    turnsTaken: nonNullValues.length,
    randomValue,
    validLowestIndex,
    validHighestIndex,
    disabled,
    isGameOver,
    isWinner,
    gameOverMessage,
    gameOverButtonMessage,
    updateStorageCondition: updateStorageCondition(isGameOver, nonNullValues.length, slots.length, gameTypeProps),
    updateStorageFunction: updateStorageFunction,
  }
}
