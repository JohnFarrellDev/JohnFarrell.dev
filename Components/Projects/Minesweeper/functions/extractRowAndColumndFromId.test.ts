import { extractRowAndColumnFromId } from "./extractRowAndColumnFromId"

describe("extract row and column from id", () => {
    it("should correctly figure out the row index and column index from a 1d position", () => {
        let rowAndColumn = extractRowAndColumnFromId(0, 10)
        expect(rowAndColumn[0]).toBe(0)
        expect(rowAndColumn[1]).toBe(0)

        rowAndColumn= extractRowAndColumnFromId(9, 10)
        expect(rowAndColumn[0]).toBe(0)
        expect(rowAndColumn[1]).toBe(9)

        rowAndColumn= extractRowAndColumnFromId(10, 10)
        expect(rowAndColumn[0]).toBe(1)
        expect(rowAndColumn[1]).toBe(0)

        rowAndColumn= extractRowAndColumnFromId(19, 10)
        expect(rowAndColumn[0]).toBe(1)
        expect(rowAndColumn[1]).toBe(9)

        rowAndColumn= extractRowAndColumnFromId(25, 10)
        expect(rowAndColumn[0]).toBe(2)
        expect(rowAndColumn[1]).toBe(5)

        rowAndColumn= extractRowAndColumnFromId(99, 10)
        expect(rowAndColumn[0]).toBe(9)
        expect(rowAndColumn[1]).toBe(9)
    })
})