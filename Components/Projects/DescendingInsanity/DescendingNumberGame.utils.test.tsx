import { getLowestIndex } from './DescendingNumberGame.utils'

describe('descendingNumberGame.utils', () => {
  describe('getLowestIndex', () => {
    it('should return a valid index of 0 if there are no non null values in the slots', () => {
      expect(getLowestIndex([null, null, null, null], 1)).toBe(0)
    })

    it.each([
      {
        slots: [null, 1, 3, 4],
        randomValue: 2,
        expectedIndex: 2,
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
})
