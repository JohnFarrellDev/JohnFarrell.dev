import confetti from 'canvas-confetti'
import styles from './DescendingNumberGame.module.css'
import { SetGameOrLevelGameProps } from './DescendingNumberGame'

function randomDrift() {
  return Math.random() * (Math.random() > 0.5 ? 1 : -1)
}

export function applyConfetti(isWinner: boolean) {
  if (!isWinner) return { clearConfetti: undefined }

  const difference = 1_500
  let lastFired = 0
  let animationNumber: number

  function playAnimation() {
    if (lastFired + difference < Date.now()) {
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
      lastFired = Date.now()
    }

    animationNumber = window.requestAnimationFrame(playAnimation)
  }

  animationNumber = window.requestAnimationFrame(playAnimation)

  return { clearConfetti: () => window.cancelAnimationFrame(animationNumber) }
}

function generateGameOverMessageSetSize(currentScore: number, highScore: number) {
  if (currentScore === 20) {
    return <p className={styles.gameOverMessage}>Wow, you got a perfect score!</p>
  }

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

  return <></>
}

function generateGameOverMessageLevel(currentScore: number, gameTypeProps: SetGameOrLevelGameProps) {
  if (gameTypeProps.gameType === 'set-size') return <></>

  const totalSlots = gameTypeProps.level + 4
  const ratio = currentScore / totalSlots
  const currentScorePercentage = ratio * 100

  if (currentScorePercentage < 25) {
    return (
      <p className={styles.gameOverMessage}>
        Game Over, you got {currentScore} out of {gameTypeProps.level + 4} correct, which is pretty bad
      </p>
    )
  }

  if (currentScorePercentage < 50) {
    return (
      <p className={styles.gameOverMessage}>
        Game Over, you got {currentScore} out of {gameTypeProps.level + 4} correct, which is not bad
      </p>
    )
  }

  if (currentScorePercentage < 75) {
    return (
      <p className={styles.gameOverMessage}>
        Game Over, you got {currentScore} out of {gameTypeProps.level + 4} correct, which is pretty good
      </p>
    )
  }

  if (currentScorePercentage < 100) {
    return (
      <p className={styles.gameOverMessage}>
        Game Over, you got {currentScore} out of {gameTypeProps.level + 4} correct, so close!
      </p>
    )
  }

  if (currentScorePercentage >= 100) {
    return <p className={styles.gameOverMessage}>Wow, you got a perfect score! Level complete</p>
  }

  return <></>
}

export function generateGameOverMessage(
  isGameOver: boolean,
  currentScore: number,
  gameTypeProps: SetGameOrLevelGameProps
) {
  if (!isGameOver) return <></>

  if (gameTypeProps.gameType === 'level') {
    return generateGameOverMessageLevel(currentScore, gameTypeProps)
  }

  return generateGameOverMessageSetSize(currentScore, gameTypeProps.highScore)
}

export function getRandomValue(notPossibleValues: Set<number>) {
  let randomValue = 0
  while (notPossibleValues.has(randomValue) || randomValue === 0) {
    randomValue = Math.floor(Math.random() * 1000) + 1
  }
  return randomValue
}

export function getLowestIndex(slots: (number | null)[], randomValue: number) {
  const nonNullValues = slots.filter((slot) => slot !== null) as number[]

  if (nonNullValues.length === 0) return 0

  for (let i = slots.length - 1; i >= 0; i--) {
    const slot = slots[i]
    if (slot === null) continue

    if (slot < randomValue) return i + 1
  }

  return 0
}

export function getHighestIndex(slots: (number | null)[], randomValue: number) {
  const nonNullValues = slots.filter((slot) => slot !== null) as number[]

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

const twentyNumberChallengeUrl = 'https://www.johnfarrell.dev/projects/20-number-challenge'
const descendingInsanityUrl = 'https://www.johnfarrell.dev/projects/descending-insanity'

function generateShareMessage(isWinner: boolean, turnsTaken: number, gameTypeProps: SetGameOrLevelGameProps) {
  if (gameTypeProps.gameType === 'set-size') {
    if (isWinner)
      return (
        `I got a perfect score on the Twenty Number Challenge!` +
        '\n\n' +
        'Can you manage it?' +
        '\n\n' +
        twentyNumberChallengeUrl
      )

    return (
      `I got a score of ${turnsTaken} on the Twenty Number Challenge!` +
      '\n\n' +
      'Can you beat it?' +
      '\n\n' +
      twentyNumberChallengeUrl
    )
  }

  if (isWinner)
    return `I just completed level ${gameTypeProps.level} of Descending Insanity!` + '\n\n' + descendingInsanityUrl

  return (
    `I got a score of ${turnsTaken} on level ${gameTypeProps.level} of Descending Insanity!` +
    '\n\n' +
    'Can you beat it?' +
    '\n\n' +
    descendingInsanityUrl
  )
}

export function deferredGameState(slots: (number | null)[], gameTypeProps: SetGameOrLevelGameProps) {
  const nonNullValues = slots.filter((slot) => slot !== null) as number[]
  const notPossibleValues = new Set<number>(nonNullValues)
  const randomValue = getRandomValue(notPossibleValues)

  const validLowestIndex = getLowestIndex(slots, randomValue)
  const validHighestIndex = getHighestIndex(slots, randomValue)

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
    shareMessage: generateShareMessage(isWinner, nonNullValues.length, gameTypeProps),
    updateStorageCondition: updateStorageCondition(isGameOver, nonNullValues.length, slots.length, gameTypeProps),
    updateStorageFunction: updateStorageFunction,
  }
}
