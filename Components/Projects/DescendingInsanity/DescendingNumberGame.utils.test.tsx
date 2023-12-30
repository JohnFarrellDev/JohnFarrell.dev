import { getHighestIndex, getLowestIndex } from './DescendingNumberGame.utils'

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
})
