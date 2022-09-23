import { Action, State } from "..";
import { generateBoard } from "../../functions/generateBoard";
import { rightClickCell }  from "./rightClickCell";

const startingState: State = {
    animationToApply: [],
    animationTime: 0,
    board: generateBoard(5, 5).board,
    columns: 5,
    rows: 5,
    customAnimations: new Map(),
    allowedOperations: new Map([['FlagCell', true]]),
    isDead: false,
    isPlaying: true,
    isWinner: false,
    numberOfBombs: 5,
    borderlessMode: false,
  }

  let state = { ...startingState }

describe("right click cell", () => {

    beforeEach(() => {
        state = {
          ...startingState,
          animationToApply: [],
          board: generateBoard(5, 5).board,
          allowedOperations: new Map([['FlagCell', true]]),
        }
      })

      const action: Action = {
        type: 'RightClickCell',
        rowIndex: 0,
        columnIndex: 0
      }

    it("should do nothing if the action type is not RightClickCell", () => {
        const returnedState = rightClickCell(state, {...action, type: 'Invalid Type' as 'RightClickCell'})

        expect(returnedState).toBe(state)
    })

    it("should do nothing if the state isPlaying is not true", () => {
        state.isPlaying = false
        const returnedState = rightClickCell(state, action)

        expect(returnedState).toBe(state)
    })

    it("should do nothing if the state isDead is true", () => {
        state.isDead = true;
        const returnedState = rightClickCell(state, action)

        expect(returnedState).toBe(state)
    })

    it("should do nothing if the state isWinner is true", () => {
        state.isWinner = true;
        const returnedState = rightClickCell(state, action)

        expect(returnedState).toBe(state)
    })

    it("should do nothing if the state operation for FlagCell is not true", () => {
        state.allowedOperations.set("FlagCell", false)
        const returnedState = rightClickCell(state, action)

        expect(returnedState).toBe(state)
    })

    it('should do nothing if the cell is already uncovered', () => {
        state.board[0][0].isCovered = false

        const returnedState = rightClickCell(state, action)
        expect(returnedState).toBe(state)
    })

    it('should do nothing if there are animations to apply', () => {
        state.animationToApply.push({time: 0, animations: "WIPE"})
        const returnedState = rightClickCell(state, action)

        expect(returnedState).toBe(state)
    })

    it("should be able to flag a cell", () => {
        expect(state.board[0][0].isFlagged).toBe(false)

        rightClickCell(state, action)

        expect(state.board[0][0].isFlagged).toBe(true)
    })

    it('should be able to unflag a cell', () => {
        expect(state.board[0][0].isFlagged).toBe(false)
        state.board[0][0].isFlagged = true
        expect(state.board[0][0].isFlagged).toBe(true)

        rightClickCell(state, action)

        expect(state.board[0][0].isFlagged).toBe(false)
    })
})