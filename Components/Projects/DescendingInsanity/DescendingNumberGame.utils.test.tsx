import { generateGameOverMessage, getHighestIndex, getLowestIndex, getRandomValue } from './DescendingNumberGame.utils'
import { render } from '@testing-library/react'

describe('descendingNumberGame.utils', () => {
  describe('getLowestIndex', () => {
    it.each([
      {
        slots: [null, null, 3, 5],
        randomValue: 4,
        expectedIndex: 3,
      },
      {
        slots: [1, 2, 3, 4],
        randomValue: 5,
        expectedIndex: 4,
      },
      {
        slots: [],
        randomValue: 1,
        expectedIndex: 0,
      },
      {
        slots: [null, null, null],
        randomValue: 1,
        expectedIndex: 0,
      },
      {
        slots: [1, null, null, 4],
        randomValue: 2,
        expectedIndex: 1,
      },
      {
        slots: [1, 2, null, null],
        randomValue: 3,
        expectedIndex: 2,
      },
    ])(
      'should return an index +1 of the first slot that the random value is greater than',
      ({ slots, randomValue, expectedIndex }) => {
        expect(getLowestIndex(slots, randomValue)).toBe(expectedIndex)
      }
    )
  })

  describe('getHighestIndex', () => {
    it.each([
      {
        slots: [null, null, 3, 5],
        randomValue: 4,
        expectedIndex: 2,
      },
      {
        slots: [1, 2, 3, 4],
        randomValue: 0,
        expectedIndex: -1,
      },
      {
        slots: [],
        randomValue: 1,
        expectedIndex: -1,
      },
      {
        slots: [null, null, null],
        randomValue: 1,
        expectedIndex: 2,
      },
      {
        slots: [1, null, null, 4],
        randomValue: 2,
        expectedIndex: 2,
      },
      {
        slots: [1, 2, null, null],
        randomValue: 3,
        expectedIndex: 3,
      },
    ])(
      'should return an index -1 of the first slot that the random value is less than',
      ({ slots, randomValue, expectedIndex }) => {
        expect(getHighestIndex(slots, randomValue)).toBe(expectedIndex)
      }
    )
  })

  describe('getRandomValue', () => {
    it('should return a random number between 1 and 1000', () => {
      const randomValue = getRandomValue(new Set())
      expect(randomValue).toBeGreaterThanOrEqual(1)
      expect(randomValue).toBeLessThanOrEqual(1000)
    })

    it('should not return a number that is in the notPossibleValues set', () => {
      const notPossibleValues = new Set([1, 2, 3, 4, 5])
      for (let i = 0; i < 1_000; i++) {
        const randomValue = getRandomValue(notPossibleValues)
        expect(randomValue).toBeGreaterThanOrEqual(6)
        expect(randomValue).toBeLessThanOrEqual(1000)
      }
    })
  })

  describe('generateGameOverMessage', () => {
    it('should return an empty fragment if isGameOver is false', () => {
      const result = generateGameOverMessage(false, 0, { gameType: 'set-size', highScore: 0, setHighScore: () => {} })

      const { container } = render(result)

      expect(container.innerHTML).toHaveLength(0)
      expect(container).toBeEmptyDOMElement()
    })

    it.each([
      {
        currentScore: 20,
        highScore: 0,
        expectedMessage: '<p class="gameOverMessage">Wow, you got a perfect score!</p>',
      },
      {
        currentScore: 10,
        highScore: 0,
        expectedMessage:
          '<p class="gameOverMessage">Well done on your first game, your score is <span class="gameOverScore">10</span>, which is a new high score!</p>',
      },
      {
        currentScore: 10,
        highScore: 5,
        expectedMessage:
          '<p class="gameOverMessage">Game Over, your score is <span class="gameOverScore">10</span>, which is a new high score!</p>',
      },
      {
        currentScore: 3,
        highScore: 5,
        expectedMessage:
          '<p class="gameOverMessage">Game Over, your score is <span class="gameOverScore">3</span>, wow that was bad! Your high score is 5!</p>',
      },
      {
        currentScore: 7,
        highScore: 20,
        expectedMessage:
          '<p class="gameOverMessage">Game Over, your score is <span class="gameOverScore">7</span>, you can do better than that! Your high score is 20</p>',
      },
      {
        currentScore: 11,
        highScore: 20,
        expectedMessage:
          '<p class="gameOverMessage">Game Over, your score is <span class="gameOverScore">11</span>, not bad! Your high score is 20</p>',
      },
      {
        currentScore: 15,
        highScore: 20,
        expectedMessage:
          '<p class="gameOverMessage">Game Over, your score is <span class="gameOverScore">15</span>, nice! Your high score is 20</p>',
      },
      {
        currentScore: 19,
        highScore: 20,
        expectedMessage:
          '<p class="gameOverMessage">Game Over, your score is <span class="gameOverScore">19</span>, great job, so close!</p>',
      },
    ])(
      'should return the correct message if isGameOver is true and the gameType is set-size',
      ({ currentScore, highScore, expectedMessage }) => {
        const result = generateGameOverMessage(true, currentScore, {
          gameType: 'set-size',
          highScore,
          setHighScore: () => {},
        })

        const { container } = render(result)

        expect(container.innerHTML).toContain(expectedMessage)
      }
    )

    it.each([
      {
        currentScore: 2,
        expectedMessage: '<p class="gameOverMessage">Game Over, you got 2 out of 10 correct, which is pretty bad</p>',
      },
      {
        currentScore: 4,
        expectedMessage: '<p class="gameOverMessage">Game Over, you got 4 out of 10 correct, which is not bad</p>',
      },
      {
        currentScore: 7,
        expectedMessage: '<p class="gameOverMessage">Game Over, you got 7 out of 10 correct, which is pretty good</p>',
      },
      {
        currentScore: 9,
        expectedMessage: '<p class="gameOverMessage">Game Over, you got 9 out of 10 correct, so close!</p>',
      },
      {
        currentScore: 10,
        expectedMessage: '<p class="gameOverMessage">Wow, you got a perfect score! Level complete</p>',
      },
    ])(
      'should return the correct message if isGameOver is true and the gameType is level',
      ({ currentScore, expectedMessage }) => {
        // level 6 means 10 turns required to win
        const result = generateGameOverMessage(true, currentScore, {
          gameType: 'level',
          level: 6,
          setLevel: () => {},
        })

        const { container } = render(result)

        expect(container.innerHTML).toContain(expectedMessage)
      }
    )
  })
})
